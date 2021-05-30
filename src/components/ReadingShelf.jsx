import useFetch from '../functions/useFetch'
import Loading from './Loading'

const ReadingShelf = () => {
	const { error, isPending, data: books } = useFetch('/api/readShelf')

	error && console.log(error)

	return (
		<div style={{ position: 'relative' }}>
			{isPending && (
				<div
					style={{
						position: 'absolute',
						top: '40px',
						left: '-300px',
					}}
				>
					<Loading />
				</div>
			)}
			{books && (
				<div>
					<h5 className="mt-2">Currently Reading</h5>
					<div className="d-flex flex-wrap">
						{books.map((book) => (
							<img
								src={books && book['Large Cover']}
								alt="12 Rules for Life"
								className="book-cover m-1"
								key={book.ISBN}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default ReadingShelf
