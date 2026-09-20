import useToggle from "../../../../../hooks/useToggle";
import Accordion, { AccordionContent, AccordionSummary } from "../../../../ui/accordion/Accordion";
import CallCard from "./CallCard";
import styles from "./CallsAccordion.module.css";

function CallsAccordion({ title, calls }) {
	const [isOpen, toggleIsOpen] = useToggle(false);

	return (
		<Accordion isOpen={isOpen}>
			<AccordionSummary title={title} onToggle={toggleIsOpen}>
				<span className={styles.count}>{calls.length}</span>
			</AccordionSummary>
			<AccordionContent>
				{calls.length ? (
					<ul>
						{calls.map((call) => (
							<CallCard key={call._id} call={call} />
						))}
					</ul>
				) : (
					<p className={styles.empty_message}>موردی ثبت نشده است.</p>
				)}
			</AccordionContent>
		</Accordion>
	);
}

export default CallsAccordion;
