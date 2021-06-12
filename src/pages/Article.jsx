import { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getArticle } from '../services'
import { Helmet } from 'react-helmet'
// import NotFound from './NotFound'
import Loading from '../components/Loading'
import Links from '../components/Links'
// import { getDisplayDate } from '../functions/getDisplayDate'

const Article = () => {
	const { slug } = useParams()

	const [article, setArticle] = useState('')

	const [loading, setLoading] = useState(false)

	useEffect(async () => {
		setLoading(true) 
		setArticle(await getArticle(slug))
		setLoading(false)
	}, [])

	useEffect(() => {
		if (article) {
			document.getElementById('article').innerHTML += article.page
			// useReload('../../js/components.js')
		}
		console.log(article)
	}, [article])

	return (
		<main role="main" className="container my-2">
			{article && (
				<Helmet>
					<title>{article.title}</title>
				</Helmet>
			)}
			{/* {error && <NotFound />} */}
			{loading && (
				<div className="mt-4 text-center">
					<Loading />
				</div>
			)}
			{article && (
				<div className="row">
					<div className="col-md-8 article-main">
						<div className="article" id="article">
							<h2 className="article-title">{article.title}</h2>
							{/* {getDisplayDate(article.updated_date)} */}
							<p className="article-meta d-flex flex-wrap">
								{/* Published date, updated date, tags, read time
								{categories &&
                  categories.map((category) => (
                  	<span
                  		className="category p-2 mr-2 mt-2"
                  		title={category.description}
                  		style={{
                  			color: category.font_color,
                  			background: category.background,
                  			whiteSpace: 'nowrap',
                  		}}
                  		key={category.name}
                  	>
                  		{category.name}
                  	</span>
                  ))} */}
							</p>
						</div>
					</div>

					<aside className="col-md-4 article-sidebar">
						<div className="card bg-transparent rounded">
							{article.description && (
								<div className="p-3 mb-3 about rounded">
									<h4 className="font-italic">About</h4>
									<p className="mb-0">{article.description}</p>
								</div>
							)}
							<Image
								src={article.image}
								className="rounded card-img"
								alt="Cover Image"
							/>
						</div>
						<Links />
					</aside>
				</div>
			)}
		</main>
	)
}

export default Article
