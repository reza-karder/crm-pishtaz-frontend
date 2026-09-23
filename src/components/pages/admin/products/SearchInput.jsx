import { useEffect, useState } from "react";
import Input from "../../../ui/input/Input";
import useDebouncedValue from "../../../../hooks/useDebouncedValue";
import MagnifyIcon from "../../../../assets/icons/magnify.svg?react"

function SearchInput({ productsParams }) {
	const { params, updateParams } = productsParams;
	const [value, setValue] = useState(params.search);
	const debouncedValue = useDebouncedValue(value, 500);

	useEffect(() => {
		updateParams({ search: debouncedValue });
	}, [debouncedValue, updateParams]);

	return (
		<Input
			type="text"
			value={value}
      StartIcon={MagnifyIcon}
			placeholder="جستجوی نام محصول..."
			onChange={(event) => setValue(event.target.value.trim())}
		/>
	);
}

export default SearchInput;
