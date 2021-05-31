// import { Link } from 'react-router-dom'
// import { getDisplayDate } from '../functions/functions'

import { Badge, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ArticleList = ({ articles }) => {
	return (
		<div className="row d-flex justify-content-center">
			<Carousel>
				{articles.map((article) => (
					<Carousel.Item key={article.id} className='position-relative'>
						<img
							className="d-block w-100 cover"
							src={article.image}
							alt={article.title}
						/>
						<Carousel.Caption>
							<Link to={`/articles/${article.slug}`}>
								<h3>{article.title}</h3>
								<p>{article.description}</p>
								<div className='m-0'>
									{/* Get working with colors */}
									{article.tags.map((tag) => (
										<span key={tag.name}>
											<Badge style={{ background: '#97883F'}}>{tag.name}</Badge>
										</span>
									))}
								</div>
							</Link>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	)
}

export default ArticleList
