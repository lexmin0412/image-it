import React from 'react'
import './modal.less'

interface ModalProps {
	visible: boolean
	children: React.ReactNode
	handleClose: () => void
}

export default function Modal(props: ModalProps): JSX.Element {

	const { visible, children, handleClose } = props

	return (
		visible ?
		<div className="view-img-modal">
			<div className="view-img-modal-mask" />
			<div className="view-img-modal-content"
				onClick={handleClose}
			>
				{children}
			</div>
		</div>
		:
		<></>
	)
}
