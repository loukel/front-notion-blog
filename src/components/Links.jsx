const Links = () => {
	return (
		<div className="p-3">
			<h4>Links </h4>
			<ol className="list-unstyled mb-0">
				<li className="mb-2">
					<a href="https://github.com/loukel" target="_blank" rel="noreferrer">
						<i className="fab fa-github mr-2 bg-dark"> </i>
            loukel
					</a>
				</li>
				<li className="mb-2">
					<a
						href="https://discordapp.com/users/158205237880946688"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-discord mr-2"> </i>
            Louis#7086
					</a>
				</li>
				<li className="mb-2">
					<a href="https://twitter.com/has_freedom" target="_blank" rel="noreferrer">
						<i className="fab fa-twitter mr-2"></i>
            has_freedom
					</a>
				</li>
				{/* <li className="mb-2">
          <a href="mailto:LKel@mail.com" target="_blank">
            <i className="fas fa-envelope mr-2"> </i>
            LKel@mail.com
          </a>
        </li> */}
			</ol>
		</div>
	)
}

export default Links
