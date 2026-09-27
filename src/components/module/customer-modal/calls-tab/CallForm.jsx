import styles from "./CallForm.module.css";
import DatePickerModule from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Input from "../../../ui/input/Input";
import FormField from "../../../ui/form-field/FormField";
import Select from "../../../ui/select/Select";
import { CALL_STATUS_OPTIONS } from "../../../../constants/callStatus";
import TextArea from "../../../ui/text-area/TextArea";

const DatePicker = DatePickerModule.default;

function CallForm({ callForm }) {
	const { values, setFieldValue, getFieldProps, getErrorMessage, onSubmit } = callForm;

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<FormField id="date" label="تاریخ" required error={getErrorMessage("date")}>
				<DatePicker
					calendar={persian}
					locale={persian_fa}
					value={values.date}
					containerClassName={styles.date_picker}
					onChange={(dateObject) => setFieldValue("date", dateObject.toDate())}
					render={
						<Input placeholder="تاریخ تماس" id="date" name="date" error={getErrorMessage("date")} />
					}
				/>
			</FormField>

			<FormField id="status" label="وضعیت" required error={getErrorMessage("status")}>
				<Select
					options={CALL_STATUS_OPTIONS}
					error={getErrorMessage("status")}
					{...getFieldProps("status")}
				/>
			</FormField>

			<FormField id="notes" label="یادداشت تماس" error={getErrorMessage("notes")}>
				<TextArea
					className={styles.notes}
					error={getErrorMessage("notes")}
					placeholder="خلاصه گفتگو با مشتری..."
					{...getFieldProps("notes")}
				/>
			</FormField>
		</form>
	);
}

export default CallForm;
