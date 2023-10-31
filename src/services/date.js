const getDaySuffix = (day) => {
	const superscriptD = String.fromCharCode(0x1d48) // ᵈ
	const superscriptH = String.fromCharCode(0x02b0) // ʰ
	const superscriptN = String.fromCharCode(0x207F) // ⁿ
	const superscriptR = String.fromCharCode(0x02b3) // ʳ
	const superscriptS = String.fromCharCode(0x02E2) // ˢ
	const superscriptT = String.fromCharCode(0x1d57) // ᵗ

	if (day >= 11 && day <= 13) {
		return `${superscriptT}${superscriptH}`
	}
	switch (day % 10) {
		case 1:
			return `${superscriptS}${superscriptT}`
		case 2:
			return `${superscriptN}${superscriptD}`
		case 3:
			return `${superscriptR}${superscriptD}`
		default:
			return `${superscriptT}${superscriptH}`
	}
}

export const formatDate = (date) => {
	const month = date.toLocaleString("default", { month: "short" })
	const day = date.getDate()
	const year = date.getFullYear()
	const daySuffix = getDaySuffix(day)

	return `${month} ${day}${daySuffix}, ${year}`
}
