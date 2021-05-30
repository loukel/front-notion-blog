import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="container not-found">
			<Helmet>
				<title>Not Found</title>
			</Helmet>
			<h2>Sorry</h2>
			<p>That page cannot be found</p>
			<Link to="/">Back to the homepage...</Link>
		</div>
	)
}

export default NotFound
