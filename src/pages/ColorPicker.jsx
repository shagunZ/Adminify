import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import {Header} from '../components'

const change=(args)=>{
document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="ColorPicker"/>

<div className='text-center'>
  <div id='preview'/>
  <div className='flex justify-center items-center gap-20 flex-wrap'>
  <div>
  <p className='text-2xl bg-gray-300 mt-2 mb-4'>INLINE PICKER</p>
      <ColorPickerComponent id='inline-picker' mode='Picker' modeSwitcher={false}
      inline showButtons={false} change={change}/>
  </div>
  
<div>
  <p className='text-2xl bg-gray-300 mt-2 mb-4'>INLINE PALETTE</p>
      <ColorPickerComponent id='inline-palette' mode='PaleTte' modeSwitcher={false}
      inline showButtons={false} change={change}/>
  </div>

</div>
</div>
    </div>
  )
}

export default ColorPicker