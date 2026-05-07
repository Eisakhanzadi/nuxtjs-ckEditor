<template>
  <div class="editor-wrapper">
    <div ref="editorEl"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import 'ckeditor5/ckeditor5.css'

import { CkeditorConfig } from '~/utils/ckeditor.config'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
const editorEl = ref<HTMLElement | null>(null)
let editorInstance:any | null = null

// upload adapter

onMounted(async () => {
  editorInstance = await ClassicEditor.create(editorEl.value , CkeditorConfig)
  await nextTick()
  editorInstance.setData(props.modelValue)
  // update data after update ckEditor
  editorInstance.model.document.on('change:data', () => {
    const data = editorInstance.getData()

    emit('update:modelValue', data)
  })
})

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.destroy()
  }
})

watch(
  () => props.modelValue,
  (newValue) => {
    if (editorInstance && newValue !== editorInstance.getData()) {
      editorInstance.setData(newValue)
    }
  }
)

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.destroy()
  }
})
</script>

<style lang="scss">

</style>
