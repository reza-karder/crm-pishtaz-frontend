// return params object as sort=""&search=""...
function stringifyParams(paramsObj) {
  return new URLSearchParams(paramsObj).toString()
}

function toPersianDateString(date) {
  return new Date(date).toLocaleDateString("fa-IR")
}

export { stringifyParams, toPersianDateString }