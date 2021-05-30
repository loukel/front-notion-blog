import { Link } from 'react-router-dom'
import { getDisplayDate } from '../functions/functions'

const ArticleList = ({ articles }) => {
	return (
		<div className="row">
			{articles.map((article) => (
				<div className="col-lg-4 py-2" key={article.slug}>
					<Link to={`/Articles/${article.slug}`}>
						<div className="card bg-dark text-white">
							<img
								className="card-img"
								src={`/storage/images/articles/${article.id}.jpg`}
								alt="Cover Image"
								style={{
									filter: 'brightness(60%)',
									height: '280px',
								}}
							/>
							<div className="card-img-overlay">
								<h5 className="card-title"> {article.title} </h5>
								<p className="card-text"> {article.description} </p>
								<p className="card-text mb-0">
									{getDisplayDate(article.published_date)}
								</p>
								<div className="d-flex flex-wrap">
									{article['categories'].slice(0, 4).map((category) => (
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
									))}
								</div>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	)
}

export default ArticleList
