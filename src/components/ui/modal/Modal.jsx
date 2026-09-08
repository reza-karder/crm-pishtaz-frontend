/** 
this component represents the base modal for every modals. in case of need use 
the ModalHeader, ModalBody, ModalFooter as the children of the Modal.
designed for more readability and customizable.
*/

import IconBtn from "../icon-btn/IconBtn";
import styles from "./Modal.module.css";
import CrossIcon from "../../../assets/icons/cross.svg?react";

function Modal({ isOpen, children, onClose }) {
	if (!isOpen) return null;

	return (
		<div className={styles.modal_wrapper}>
			<div className={styles.modal}>{children}</div>
			<div className={styles.backdrop} onClick={onClose}></div>
		</div>
	);
}

export function ModalHeader({ onClose, title, subTitle }) {
	return (
		<div className={styles.modal__header}>
			<div>
				<p className={styles.header__title}> {title} </p>
				{subTitle && <p className={styles.header__subtitle}> {subTitle} </p>}
			</div>
			<IconBtn onClick={onClose}>
				<CrossIcon />
			</IconBtn>
		</div>
	);
}

export function ModalBody({ children }) {
  return <div className={styles.modal__body}>{children}</div>
}

export function ModalFooter({ children }) {
	return <div className={styles.modal__footer}>{children} </div>;
}

export default Modal;
