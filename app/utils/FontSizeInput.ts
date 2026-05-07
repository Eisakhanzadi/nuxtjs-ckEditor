import { Plugin } from '@ckeditor/ckeditor5-core'
import {
  createDropdown,
  ListView,
  ListItemView,
  View
} from '@ckeditor/ckeditor5-ui'

export default class FontSizeDropdown extends Plugin {
  init() {
    const editor = this.editor

    editor.ui.componentFactory.add('fontSizeDropdownTest', locale => {
      const dropdown = createDropdown(locale)

      dropdown.buttonView.set({
        label: 'Size',
        withText: true
      })

      const listView = new ListView(locale)

      const sizes = [8, 10, 12, 14, 16]

      for (const s of sizes) {
        const item = new ListItemView(locale)

        const label = new View(locale)
        label.setTemplate({
          tag: 'span',
          children: [String(s)]
        })

        item.children.add(label)

        item.extendTemplate({
          on: {
            click: () => {
              editor.execute('fontSize', { value: s + 'px' })
              dropdown.isOpen = false
            }
          }
        })

        listView.items.add(item)
      }

      dropdown.panelView.children.add(listView)

      return dropdown
    })
  }
}
