import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import html2canvas from 'html2canvas'
import toast, { Toaster } from 'react-hot-toast';
import Modal from './components/modal'
import ColorPicker from './components/color-picker'
import { isMac, isWindows } from './utils/ua'
import './App.less'

const TARGET_TYPE = '_blank'
const PREVIEW_CONTAINER_SELECTOR = '#display-content'
const DEFAULT_TEXT_COLOR = '#ff4a4a'

function App() {
	const [text, setText] = useState('')
	const [imageUrl, setImageUrl] = useState('')
	const [loading, setLoading] = useState(false)
	const [viewImgModalVisible, setViewImgModalVisible] = useState(false)
	const [color, setColor] = useState(DEFAULT_TEXT_COLOR);

	const handleTextChange = (e: any) => {
		setText(e.target.value)
	}

	useEffect(() => {
		handleGengerate()
	}, [text, color])

	const handleGengerate = () => {
		setLoading(true)
		html2canvas(document.querySelector(PREVIEW_CONTAINER_SELECTOR) as HTMLElement).then(function (canvas) {
			const base64Url = canvas.toDataURL("image/png")
			setImageUrl(base64Url)
			setLoading(false)
		});
	}

	const viewImg = () => {
		if (!text) {
			toast('请先输入文字')
			return
		}
		setViewImgModalVisible(true)
	}

	const isPC = (isMac || isWindows) && false

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
			logo 文字：<input type="text" placeholder='请输入文字' value={text} onChange={handleTextChange}
				style={{
					marginBottom: '10px',
				}}
			/>
			<ColorPicker initialColor={DEFAULT_TEXT_COLOR} title='颜色' onChange={(color) => setColor(color)} />

			<div className='display-container'>
				<div className="display-content-box">
					<span id='display-content' className='display-content'
						style={{
							color: color,
						}}
					>
						{text}
					</span>
				</div>
			</div>
			{
				loading ?
					<button className='download-btn'>
						<span>生成中...</span>
					</button>
					:
					isPC ?
					<a className='download-btn' href={imageUrl} download="logo.png">
						确认生成
					</a>
					:
						<button className='download-btn'
							onClick={viewImg}
						>
							确认生成
						</button>
			}
			<p>
				输入任意文字 点击确认按钮即可生成图片
			</p>
      <p className="read-the-docs">
				Powered by <a href="https://github.com/vitejs/vite" target={TARGET_TYPE}>Vite</a>,
				<a href='https://reactjs.org/' target={TARGET_TYPE}> React</a>,
				<a href="https://www.npmjs.com/package/html2canvas" target={TARGET_TYPE}> html2canvas</a>,
				Created by <a href="https://github.com/lexmin0412" target={TARGET_TYPE}>Lexmin0412</a>.
      </p>

			<Modal
				visible={viewImgModalVisible}
			>
				<img src={imageUrl} alt="logo"
					style={{
						width: '100%'
					}}
					onClick={() => setViewImgModalVisible(false)}
				/>
			</Modal>

			<Toaster/>
    </div>
  )
}

export default App
