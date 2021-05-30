import { Helmet } from 'react-helmet'
import ArticleList from '../components/ArticleList'
import Loading from '../components/Loading'
import useFetch from '../functions/useFetch'

const Articles = () => {
	const { error, isPending, data: articles } = useFetch('api/articles')

	return (
		<div className="container">
			<Helmet>
				<title>Articles</title>
			</Helmet>
			<div>
				{error && <div className="mt-4 text-center">{error}</div>}
				{isPending && (
					<div className="mt-4 text-center">
						<Loading />
					</div>
				)}
				{articles && <ArticleList articles={articles} />}
			</div>
		</div>
	)
}

export default Articles
