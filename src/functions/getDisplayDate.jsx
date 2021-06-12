const months = {
	0: 'January',
	1: 'February',
	2: 'March',
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'July',
	7: 'August',
	8: 'September',
	9: 'October',
	10: 'November',
	11: 'December',
}

/**
 * Convert SQL date into a formatted date to display
 * @param {string} date '2021-02-22 00:00:00' sql date format
 * @returns {string} date formatted like 23 January 2019
 */
const getDisplayDate = (date) => {
	var d = new Date(date.slice(0, 10).replace(/-/g, '/'))

	const day = d.getDate()
	const month = months[d.getMonth()]
	const year = d.getFullYear()

	var string = `${day} ${month} ${year}`

	return string
}

export {
	getDisplayDate
}