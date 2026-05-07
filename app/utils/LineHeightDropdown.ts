import { Plugin, Command } from '@ckeditor/ckeditor5-core'
import { Collection } from '@ckeditor/ckeditor5-utils'
import { createDropdown, addListToDropdown } from '@ckeditor/ckeditor5-ui'

class LineHeightCommand extends Command {
  execute({ value }: { value: string }) {
    const editor = this.editor

    editor.model.change(writer => {
      const blocks = Array.from(editor.model.document.selection.getSelectedBlocks())

      for (const block of blocks) {
        writer.setAttribute('lineHeight', value, block)
      }
    })
  }

  refresh() {
    const block = this.editor.model.document.selection.getFirstPosition()?.parent
    this.value = block?.getAttribute('lineHeight') || null
    this.isEnabled = true
  }
}

export default class LineHeightDropdown extends Plugin {

  init() {
    const editor = this.editor

    const options = [
      '0.8','1','1.2','1.4','1.6','1.8','2','2.2','2.4','2.6','2.8','3'
    ]

    editor.model.schema.extend('$block', { allowAttributes: 'lineHeight' })

    editor.conversion.for('downcast').attributeToAttribute({
      model: 'lineHeight',
      view: value => ({
        key: 'style',
        value: {
          'line-height': value
        }
      })
    })

    editor.conversion.for('upcast').attributeToAttribute({
      view: {
        styles: {
          'line-height': /[\s\S]+/
        }
      },
      model: {
        key: 'lineHeight',
        value: viewElement => viewElement.getStyle('line-height')
      }
    })

    editor.commands.add('lineHeight', new LineHeightCommand(editor))

    editor.ui.componentFactory.add('lineHeight', locale => {

      const dropdown = createDropdown(locale)
      const items = new Collection()

      options.forEach(value => {
        items.add({
          type: 'button',
          model: {
            label: value,
            withText: true,
            commandValue: value
          }
        })
      })

      addListToDropdown(dropdown, items)

      dropdown.buttonView.set({
        label: 'Line height',
        withText: true
      })

      dropdown.on('execute', evt => {
        editor.execute('lineHeight', {
          value: evt.source.commandValue
        })
      })

      return dropdown
    })
  }
}
