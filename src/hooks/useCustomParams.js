import { useSearchParams } from "react-router";

function useCustomParams(defaultParams) {
	const [searchParams, setSearchParams] = useSearchParams();

	const params = Object.fromEntries(
		Object.entries(defaultParams).map(([param, defaultValue]) => [
			param,
			searchParams.get(param) || defaultValue,
		])
	);

	// remove any default value before setting to url
	const normalizeParams = (dirtyParams) => {
		const normalizedParams = { ...dirtyParams };

		for (const param in normalizedParams) {
			const value = dirtyParams[param];

			if (value === defaultParams[param]) {
				delete normalizedParams[param];
			}
		}

		return normalizedParams;
	};

	const updateParams = (updates) => {
		setSearchParams((prevParams) => {
			const prevParamsObj = Object.fromEntries(prevParams);
			return normalizeParams({ ...prevParamsObj, ...updates });
		});
	};

	return {
		params,
		updateParams,
		normalizeParams,
	};
}

export default useCustomParams;
