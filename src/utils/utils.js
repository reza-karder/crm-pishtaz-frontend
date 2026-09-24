// return params object as sort=""&search=""...
function stringifyParams(paramsObj) {
  return new URLSearchParams(paramsObj).toString()
}

export { stringifyParams }