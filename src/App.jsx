import { useState } from 'react'
import './App.css'
import { Watermark } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Watermark 
        content={["Gurkirat's", "watermark"]}
        //image=....... if you want to put the image instead of text 
        gap={[30, 30]}
        rotate={-59}
        font={{
          color:"seagreen",
          fontSize:20,
        }}
        zIndex={-10}
      >
        <div style={{width:1100, height:1100}}>
          This is the content over watermark.
        </div>
      </Watermark>
    </div>
  )
}

export default App
