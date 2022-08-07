import { useState } from 'react';
import { HexColorPicker } from "react-colorful"
import Modal from './../components/modal'

interface ColorPickerProps {
	initialColor: string
	title: string
	onChange: (color: string) => void
}

export default function ColorPicker(props: ColorPickerProps) {

	const { initialColor, title, onChange } = props
	const [ color, setColor ] = useState(initialColor)
	const [ colorPickerVisible, setColorPickerVisible ] = useState(false)

	const handleChange = (color: string) => {
		setColor(color)
	}

	const handleConfirm = () => {
		onChange(color)
		setColorPickerVisible(false)
	}

	return (
		<div>
			<button onClick={()=>setColorPickerVisible(true)}>
				{title} <span style={{
					color: color,
				}}>
					{color}
				</span>
			</button>

			<Modal visible={colorPickerVisible}>
				<div style={{
					display: 'flex',
					justifyContent: 'center',
				}}>
					<HexColorPicker color={color} onChange={handleChange} />
				</div>
				<div className="buttons"
					style={{
						marginTop: '20px'
					}}
				>
					<button onClick={handleConfirm}>确定</button>
				</div>
			</Modal>
		</div>
	)
}
