const getDaySuffix = (day) => {
	if (day >= 11 && day <= 13) {
		return "th"
	}
	switch (day % 10) {
		case 1:
			return "st"
		case 2:
			return "nd"
		case 3:
			return "rd"
		default:
			return "th"
	}
}

export const formatDate = (date) => {
	const month = date.toLocaleString("default", { month: "short" })
	const day = date.getDate()
	const year = date.getFullYear()
	const daySuffix = getDaySuffix(day)

	return `${month} ${day}${daySuffix}, ${year}`
}
