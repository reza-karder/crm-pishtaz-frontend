import styles from "./Note.module.css";
import NoteIcon from "../../../assets/icons/note.svg?react"

function Note({ note, title }) {
  if(!note) return null

	return (
		<div className={styles.note_wrapper}>
			<div className={styles.note__header}>
				<NoteIcon className={styles.note__icon} />
				<p className={styles.note__title}>{title}</p>
			</div>
			<p className={styles.note__text}>{note}</p>
		</div>
	);
}

export default Note;
