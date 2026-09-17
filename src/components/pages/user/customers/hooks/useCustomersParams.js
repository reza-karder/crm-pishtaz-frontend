import { useSearchParams } from "react-router";

const DEFAULT_PARAMS = {
  search: "",
  sort: "newest",
  purchasedProduct: "all",
  potentialProduct: "all",
  job: "all",
  status: "all",
  date: "all",
  call: "all",
  page: 1
}

function useCustomersParams() {
	const [searchParams, setSearchParams] = useSearchParams();

	const params = {
		search: searchParams.get("search") || DEFAULT_PARAMS.search,
		sort: searchParams.get("sort") || DEFAULT_PARAMS.sort,
		purchasedProduct: searchParams.get("purchasedProduct") || DEFAULT_PARAMS.purchasedProduct,
		potentialProduct: searchParams.get("potentialProduct") || DEFAULT_PARAMS.potentialProduct,
		job: searchParams.get("job") || DEFAULT_PARAMS.job,
		status: searchParams.get("status") || DEFAULT_PARAMS.status,
		date: searchParams.get("date") || DEFAULT_PARAMS.date,
		call: searchParams.get("call") || DEFAULT_PARAMS.call,
		page: Number(searchParams.get("page")) || DEFAULT_PARAMS.page,
	};

  const normalizeParams = (dirtyParams) => {
    const normalizedParams = {...dirtyParams}

    for(const param in normalizedParams) {
      const value = dirtyParams[param]
      
      if(value === DEFAULT_PARAMS[param]) {
        delete normalizedParams[param]
      }
    }

    return normalizedParams
  }

  const updateParams = (updates) => {
    setSearchParams(prevParams => {
      const prevParamsObj = Object.fromEntries(prevParams)
      return normalizeParams({ ...prevParamsObj, ...updates })
    })
  }

  return {
    params, 
    updateParams,
    normalizeParams
  }
}

export default useCustomersParams;
