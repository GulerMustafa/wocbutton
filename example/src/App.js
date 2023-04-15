import React from 'react'

import { Button } from 'wocbutton'
import 'wocbutton/dist/index.css'

const App = () => {
  return (
    <>
      {/* button tipleri test edildi */}
      <Button type='primary' text='Primary Button' />
      <Button type='dashed' text='Error Button' />
      <Button type='text' text='Warning Button' />
      <Button type='link' text='Link Button' />
      <Button text='Default Button' />
    </>
  )
}

export default App