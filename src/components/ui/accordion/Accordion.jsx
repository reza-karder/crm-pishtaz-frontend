/**
 * this component represents the base accordion for each accordion.
 * in case of need, use the AccordionSummary and AccordionContent as the children of
 * the Accordion
 */

import styles from "./Accordion.module.css";
import ArrowIcon from "../../../assets/icons/tailless-arrow-down.svg?react";
import clsx from "clsx";

function Accordion({ children, isOpen }) {
	return <div className={clsx(styles.accordion, isOpen && styles.open)}>{children}</div>;
}

export function AccordionSummary({ children, title, onToggle }) {
	return (
		<div className={styles.accordion__summary} onClick={onToggle}>
			<p className={styles.summary__title}> {title} </p>
			<div className={styles.summary__actions}>
				{children}
				<ArrowIcon className={styles.summary__icon} />
			</div>
		</div>
	);
}

export function AccordionContent({ children }) {
	return (
		<div className={styles.accordion__content}>
			<div className={styles.content__inner}>
				<div className={styles.content__padding}>{children}</div>
			</div>
		</div>
	);
}

export default Accordion;
