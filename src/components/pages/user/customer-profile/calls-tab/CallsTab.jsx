import { useParams } from "react-router";
import styles from "./CallsTab.module.css" 
import { useGetCustomerProfile } from "../../../../../api/customers/queries";
import CallsAccordion from "./CallsAccordion";
import { getResolvedCalls, getScheduledCalls, getUnresolvedCalls } from "../../../../../utils/calls";

function CallsTab() {
  const params = useParams();

	const { data } = useGetCustomerProfile(params.customerId, { refetchOnMount: true });
	const { calls } = data?.customer || {};


  return (
   <div className={styles.wrapper}>
     <CallsAccordion title="تماس های آینده" calls={getScheduledCalls(calls)} />
     <CallsAccordion title="تماس های رسیدگی نشده" calls={getUnresolvedCalls(calls)} />
     <CallsAccordion title="تماس های گذشته" calls={getResolvedCalls(calls)} />
   </div>
  )
}

export default CallsTab