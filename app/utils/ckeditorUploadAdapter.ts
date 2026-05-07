import { FileRepository } from '@ckeditor/ckeditor5-upload'

class UploadAdapter {
  constructor(loader) {
    this.loader = loader
    this.xhr = null
  }

  upload() {
    return this.loader.file.then((file) => {

      const { $toast } = useNuxtApp()
      const maxImageSize: number = 5
      const maxImageSizeMB: number = maxImageSize * 1024 * 1024

      if (file.size > maxImageSizeMB) {
        $toast.warning(`Your image size must not exceed ${maxImageSize} MB`)
        console.log(file)
        return Promise.reject()
      }

      return new Promise((resolve, reject) => {
        const xhr = (this.xhr = new XMLHttpRequest())
        const token = useCookie<string | null | undefined>('token')
        const {
          public: { apiBaseUrl },
        } = useRuntimeConfig()
        xhr.open('POST', `${apiBaseUrl}/upload`, true) // TODO:your endPoint for upload images
        xhr.responseType = 'text'
        xhr.setRequestHeader('Authorization', `${token.value}`)
        const data = new FormData()
        data.append('file', file)

        xhr.upload.addEventListener('progress', (evt) => {
          if (evt.lengthComputable) {
            this.loader.uploadTotal = evt.total
            this.loader.uploaded = evt.loaded
          }
        })

        xhr.addEventListener('load', () => {
          if (xhr.status !== 200) {
            $toast.error(('An error occurred while connecting to the server !'))
            return reject()
          }

          const url = xhr.response

          resolve({
            default: url,
          })
        })

        xhr.addEventListener('error', () => {
          $toast.error(('An error occurred while connecting to the server !'))
          return reject()
        })
        xhr.addEventListener('abort', () => reject())

        xhr.send(data)
      })
    })
  }

  abort() {
    if (this.xhr) {
      this.xhr.abort()
    }
  }
}

export default function UploadAdapterPlugin(editor) {
  editor.plugins.get(FileRepository).createUploadAdapter = (loader) => {
    return new UploadAdapter(loader)
  }
}
