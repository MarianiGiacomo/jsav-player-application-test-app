import React, { useEffect } from 'react';

const Modal = ({ modalData }) => {
	const { visible, close, content } = { ...modalData }

	useEffect(() => {
		setFocus(3);
	}, [])

	return ( 
		visible
		?
			<div className="overlay">
				<div className="modal" id="modalWindow" role="alert">
						<div className="modal-content">{content}</div>
						<div className="close">
							<button onClick={close}>Close</button>
						</div>
				</div>
			</div>
		: <></> )

		function setFocus(retry) {
			const button = document.querySelector('.close button')
			const modal = document.querySelector('.modal')
			if(button && modal) {
				button.focus()
				modal.addEventListener('keydown', (e) => {
					if(e.key === 'Tab'){
						e.preventDefault()
						button.focus()
					}
				})
			}
			else if(retry > 0) {
				setFocus(retry -1)
			}
		}
};

export default Modal;
