import { useQueryClient } from "@tanstack/react-query";
import useCustomForm from "../../../../../hooks/useCustomForm";
import { jobFormSchema } from "../../../../../utils/validators";
import FormField from "../../../../ui/form-field/FormField";
import Input from "../../../../ui/input/Input";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../../../ui/modal/Modal";
import { useCreateJob, useEditJob } from "../../../../../api/jobs/mutations";
import JOB_KEYS from "../../../../../api/jobs/keys";
import { toast } from "sonner";
import Button from "../../../../ui/button/Button";
import { stringifyParams } from "../../../../../utils/utils";

function JobModal({ isOpen, onClose, job, params }) {
	const isEditing = Boolean(job);

	const queryClient = useQueryClient();
	const { mutateAsync: mutateCreateJob, isPending: isPendingCreate } = useCreateJob();
	const { mutateAsync: mutateEditJob, isPending: isPendingEdit } = useEditJob();

	const syncData = () => {
		queryClient.invalidateQueries({
			queryKey: JOB_KEYS.GET_ADMIN_JOBS(stringifyParams(params)),
		});
	};

	const addJob = async (jobData) => {
		const response = await mutateCreateJob(jobData);

		if (response.success) {
			toast.success(response.message);
			syncData();
			onClose();
		}
	};

	const editJob = async (jobData) => {
		const response = await mutateEditJob(jobData);

		if (response.success) {
			toast.success(response.message);
			syncData();
			onClose();
		}
	};

	const handleSubmit = (jobData) => {
		if (isEditing) {
			editJob(jobData);
		} else {
			addJob(jobData);
		}
	};

	const { getFieldProps, dirty, onSubmit, getErrorMessage } = useCustomForm(
		job || { title: "" },
		jobFormSchema,
		handleSubmit
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader title={isEditing ? "ویرایش شغل" : "افزودن شغل"} onClose={onClose} />
			<ModalBody>
				<form>
					<FormField label="عنوان شغل" required id="title" error={getErrorMessage("title")}>
						<Input
							type="text"
							placeholder="نام را وارد کنید"
							error={getErrorMessage("title")}
							{...getFieldProps("title")}
						/>
					</FormField>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button onClick={onSubmit} disabled={!dirty} loading={isPendingEdit || isPendingCreate}>
					ذخیره
				</Button>
				<Button variant="outlined" onClick={onClose}>انصراف</Button>
			</ModalFooter>
		</Modal>
	);
}

export default JobModal;
