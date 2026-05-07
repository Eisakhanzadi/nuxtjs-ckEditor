import UploadAdapterPlugin from '~/utils/ckeditorUploadAdapter'
import LineHeightDropdown from '~/utils/LineHeightDropdown'
import FontSizeInput from '~/utils/FontSizeInput'

import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { Heading } from '@ckeditor/ckeditor5-heading'
import { Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles'
import { FontFamily, FontSize, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font'
import { Highlight } from '@ckeditor/ckeditor5-highlight'
import { Alignment } from '@ckeditor/ckeditor5-alignment'
import { Link } from '@ckeditor/ckeditor5-link'
import { List, ListProperties  } from '@ckeditor/ckeditor5-list'
import { Table, TableToolbar,TableColumnResize ,TableProperties, TableCellProperties } from '@ckeditor/ckeditor5-table'
import {
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  ImageUpload,
  ImageInsert,
  ImageTextAlternative,
  // ImageResizeHandles
} from '@ckeditor/ckeditor5-image'
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import { CodeBlock } from '@ckeditor/ckeditor5-code-block'
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line'
import { PageBreak } from '@ckeditor/ckeditor5-page-break'
import { FileRepository } from '@ckeditor/ckeditor5-upload'
import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
import { Autosave } from '@ckeditor/ckeditor5-autosave'
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace'
import { WordCount } from '@ckeditor/ckeditor5-word-count'
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office'
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format'
import { SelectAll } from '@ckeditor/ckeditor5-select-all'
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support'
import { Indent ,IndentBlock  } from '@ckeditor/ckeditor5-indent'
import { Style } from '@ckeditor/ckeditor5-style'

import '~/assets/styles/text-editor-styles.scss'

export const CkeditorConfig = {
  licenseKey: 'GPL',
  language: {
    ui: 'en',
    content: 'en',
  },
  plugins: [
    Style,
    Essentials,
    Paragraph,
    Heading,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    GeneralHtmlSupport,
    Indent,
    IndentBlock,
    FontFamily,
    FontSize,
    FontColor,
    FontBackgroundColor,
    Highlight,
    Alignment,
    Link,
    List,
    ListProperties,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    TableColumnResize,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,

    // ImageResizeHandles,

    ImageUpload,
    ImageInsert,
    ImageTextAlternative,
    MediaEmbed,
    BlockQuote,
    CodeBlock,
    HorizontalLine,
    PageBreak,
    FileRepository,
    Autoformat,
    Autosave,
    FindAndReplace,
    WordCount,
    PasteFromOffice,
    RemoveFormat,
    SelectAll,

    UploadAdapterPlugin,
    FontSizeInput,
    LineHeightDropdown,
  ],
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
    decorators: {
      openInNewTab: {
        mode: 'manual',
        label: 'Open in a new tab',
        attributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      },
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'file',
        },
      },
    },
  },
  toolbar: {
    items: [
      'heading',
      '|',
      'fontFamily',
      'fontSize',
      'fontSizeInput',
      '|',
      'lineHeight',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'alignment',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'link',
      'blockQuote',
      '|',
      'subscript',
      'superscript',
      'code',
      '|',
      'highlight',
      'fontColor',
      'fontBackgroundColor',
      'removeFormat',
      '|',
      'codeBlock',
      '|',
      'insertTable',
      '|',
      'imageUpload',
      '|',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      '|',
      'mediaEmbed',
      '|',
      'horizontalLine',
      'pageBreak',
      '|',
      'findAndReplace',
      'selectAll',
      '|',
      'style',
      '|',
      'undo',
      'redo',
      '|',
    ],
    shouldNotGroupWhenFull: true,
  },
  image: {
    resizeUnit: '%',
    toolbar: [
      'imageTextAlternative',
      '|',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      '|',
      'resizeImage:50',
      'resizeImage:75',
      'resizeImage:original',
      '|',
      'resizeImage'
    ],
  },
  image: {
    resizeUnit: '%',
    toolbar: [
      'imageTextAlternative',
      '|',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',

      // '|',
      // 'resizeImage'
    ]
  }
  //
  ,
  fontSize: {
    options: Array.from({ length: 41 }, (_, i) => i + 8),
    supportAllValues: false,
  },
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4',
      },
      {
        model: 'heading5',
        view: 'h5',
        title: 'Heading 5',
        class: 'ck-heading_heading5',
      },
      {
        model: 'heading6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading6',
      },
    ],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'],
  },
  placeholder: 'your content ....',
  htmlSupport: {
    allow: [
      {
        name: /^.*$/,
        styles: true,
        attributes: true,
        classes: true,
      },
    ],
  },
  fontFamily: {
    options: ['default', 'iranSans', 'Estedad', 'sans-serif'],
    supportAllValues: false,
  },
  style: {
    definitions: [
      {
        name: 'Info box',
        element: 'p',
        classes: ['info-box'],
      },
      {
        name: 'Marker',
        element: 'span',
        classes: ['marker'],
      },
      {
        name: 'Spoiler',
        element: 'span',
        classes: ['spoiler'],
      },
    ],
  },
}

// TODO: for responsive size optional
function getToolbarConfig() {
  if (window.innerWidth < 768) {
    // mobile
    return ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', '|', 'link', '|', 'imageUpload', '|', 'bulletedList']
  }

  // desktop
  return [
    'undo',
    'redo',
    '|',
    'heading',
    '|',
    'formatDropdown',
    'fontDropdown',
    '|',
    'link',
    'blockQuote',
    'codeBlock',
    '|',
    'bulletedList',
    'numberedList',
    'alignment',
    '|',
    'insertTable',
    'imageUpload',
    'mediaEmbed',
    '|',
    'horizontalLine',
    'pageBreak',
    '|',
    'findAndReplace',
    'selectAll',
  ]
}