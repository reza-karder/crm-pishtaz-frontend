import { useEffect, useRef, useState } from "react";

function useDebouncedValue(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const timeoutRef = useRef(null);

	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, [value, delay]);

  return debouncedValue
}

export default useDebouncedValue;
