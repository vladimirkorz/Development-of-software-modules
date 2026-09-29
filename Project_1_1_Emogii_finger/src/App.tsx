import { useState } from 'react';
import './App.css'

function App() {

  const [input, setInput] = useState('');


  return (
    <>
      <header>
        <h1>Emoji Finger</h1>
        <p className='desc'>
          Find emoji by keywords
        </p>

        <input type="text"  placeholder='Placeholder'/>
      </header>

      <main>

        <div className='conteiner'>

          <div className='card'>
            <p className='emoji'>💯</p>
            <p className='title'>100</p>
            <p className='keywords'>Hundred, points, symbol, wow</p>
          </div>

          <div className='card'>
            <p className='emoji'>🔢</p>
            <p className='title'>1234</p>
            <p className='keywords'>input symbol for numbers symbol</p>
          </div>

          <div className='card'>
            <p className='emoji'>🔢</p>
            <p className='title'>1234</p>
            <p className='keywords'>input symbol for numbers symbol</p>
          </div>

        </div>
        
      </main>
    </>
  )
}
//ыыыыы

export default App
