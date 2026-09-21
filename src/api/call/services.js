import axiosClient from "../../lib/axiosClient";

const CALL_SERVICES = {
	editCall: (call) => axiosClient.patch(`/calls/${call._id}`, call),
};

export default CALL_SERVICES;
