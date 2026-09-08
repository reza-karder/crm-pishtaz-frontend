/**
thi components repesents delete confirm modal.
use this component for any deletion message and then do
the operation using onConfirm prop
*/

import Button from "../button/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../modal/Modal";
import styles from "./DeleteModal.module.css";
import WarningIcon from "../../../assets/icons/warning.svg?react";

function DeleteModal({ messageTilte, message, isOpen, onClose, onConfirm, title, subTitle }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader title={title} subTitle={subTitle} />
      <ModalBody>
        <div className={styles.message_wrapper}>
          <WarningIcon className={styles.icon} />
          <div>
            <p className={styles.message_title}>{messageTilte}</p>
            <p className={styles.message}>{message}</p>
          </div>
        </div>
      </ModalBody>
			<ModalFooter>
				<Button color="danger" onClick={onConfirm}> تایید </Button>
				<Button variant="outlined" color="normal">
					انصراف
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default DeleteModal;
