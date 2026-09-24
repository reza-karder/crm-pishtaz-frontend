import { useEffect, useState } from "react";
import MagnifyIcon from "../../assets/icons/magnify.svg?react";
import Input from "../ui/input/Input";
import useDebouncedValue from "../../hooks/useDebouncedValue";

function SearchInput({ initialValue, onChange, ...props }) {
	const [value, setValue] = useState(initialValue);
	const debouncedValue = useDebouncedValue(value, 500);

	useEffect(() => {
		onChange(debouncedValue);
	}, [debouncedValue, onChange]);

	return (
		<Input
			type="text"
			value={value}
			StartIcon={MagnifyIcon}
			onChange={(event) => setValue(event.target.value.trim())}
      {...props}
		/>
	);
}

export default SearchInput;
