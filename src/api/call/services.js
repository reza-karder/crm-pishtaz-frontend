import axiosClient from "../../lib/axiosClient";

const CALL_SERVICES = {
	editCall: (call) => axiosClient.patch(`/calls/${call._id}`, call),
  deleteCall: (callId) => axiosClient.delete(`/calls/${callId}`)
};

export default CALL_SERVICES;
