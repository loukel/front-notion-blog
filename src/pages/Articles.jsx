import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ArticleList from '../components/ArticleList'
// import Loading from '../components/Loading'
import { getArticles } from '../services'

const Articles = () => {
	const [ articles, setArticles ] = useState() 
	// const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(async () => {
		// setLoading(true)
		try {
			setArticles(await getArticles())
		} catch (error) {
			setError('Failed')
		}
		// setLoading(false)
	}, [])
	
	return (
		<div className="container">
			<Helmet>
				<title>Articles</title>
			</Helmet>
			<div>
				{error && <div className="mt-4 text-center">{error}</div>}
				{articles && <ArticleList articles={articles}/>}
			</div>
		</div>
	)
}

export default Articles
