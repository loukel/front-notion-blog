const axios = require('axios')
const baseUrl = process.env.REACT_APP_API

const getArticles = async () => {
	const res = await axios({
		method: 'GET',
		url: `${baseUrl}/articles`
	})

	return res.data
}
const getArticle = async (slug) => {
	const res = await axios({
		method: 'GET',
		url: `${baseUrl}/articles/${slug}`
	})

	return res.data
}

export {
	getArticles,
	getArticle,
}