const CALENDAR_KEYS = {
  GET_CALENDAR_CALLS: (startDate, endDate) => [["calendar", "calls", startDate, endDate]],
  GET_CALLS_OF_DAY: (date) => ["calendar", "day", date]
}

export default CALENDAR_KEYS