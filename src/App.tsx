import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import html2canvas from 'html2canvas'
import './App.css'

const targetType = '_blank'
const previewBoxSelector = '#display-content'

function App() {
	const [text, setText] = useState('')
	const [imageUrl, setImageUrl] = useState('')

	const handleTextChange = (e: any) => {
		setText(e.target.value)
	}

	useEffect(() => {
		handleGengerate()
	}, [text])

	const handleGengerate = () => {
		html2canvas(document.querySelector(previewBoxSelector) as HTMLElement).then(function (canvas) {
			const base64Url = canvas.toDataURL("image/png")
			setImageUrl(base64Url)
		});
	}

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
					<img src="https://vitejs.cn/logo.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Image It !</h1>
			logo 文字：<input type="text" placeholder='请输入文字' value={text} onChange={handleTextChange} />
			<div className='display-container'>
				<div className="display-content-box">
					<span id='display-content' className='display-content'>
						{text}
					</span>
				</div>
			</div>
			<a className='download-btn' href={imageUrl} download="logo.png">
				确认生成
			</a>
			<p>
				输入任意文字 点击确认按钮即可生成图片
			</p>
      <p className="read-the-docs">
				Powered by <a href="https://github.com/vitejs/vite" target={targetType}>Vite</a>,
				<a href='https://reactjs.org/' target={targetType}> React</a>,
				<a href="https://www.npmjs.com/package/html2canvas" target={targetType}> html2canvas</a>,
				Created by <a href="https://github.com/lexmin0412" target={targetType}>Lexmin0412</a>.
      </p>
    </div>
  )
}

export default App
