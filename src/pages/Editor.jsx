import React from 'react'
import { RichTextEditorComponent, Inject, Toolbar, HtmlEditor, Image, QuickToolbar, Link} from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';
import {Header} from '../components'
const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="TextEditor"/>
      <RichTextEditorComponent >
        {/* <EditorData/> */}
      <p>Edit text here...</p>
        <Inject services={[Toolbar, HtmlEditor, Image, QuickToolbar, Link]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor