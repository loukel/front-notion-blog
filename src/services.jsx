const axios = require('axios')

const getArticles = async () => {
	const res = await axios({
		method: 'GET',
		url: 'http://localhost:3001/articles'
	})

	return res.data
}

export {
	getArticles,
}