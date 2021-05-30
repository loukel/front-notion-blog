import { Helmet } from 'react-helmet'
import Links from '../components/Links'
import ReadingShelf from '../components/ReadingShelf'

const Home = () => {
	/**
   * Explain tech exp
   * Bio complete
   */

	return (
		<div className="container">
			<Helmet>
				<title>Louis Kelly</title>
			</Helmet>
			<div className="row">
				<div className="col-sm">
					<div className="p-3">
						<h3>Bio</h3>
						<p className="mb-0">
              Currently a web developer who strives to create technology that
              complements people. Passionate about learning new web
              technologies. Actively trying to learn and develop.
						</p>
					</div>
				</div>
				<div className="col-sm-3 m-0">
					<Links />
				</div>
			</div>

			<div className="p-3">
				<h3 className="text-center mt-2">Techonology Experience</h3>
				<div className="row">
					<div className="col-sm mt-3">
						<h4>Back-End</h4>
						<ul className="fa-ul">
							<li>
								<span className="fa-li">
									<i className="fab fa-laravel"></i>
								</span>
                Laravel
							</li>
							<li>
								<span className="fa-li">
									{/* <i className="fab fa-php"></i> */}
                  🐘
								</span>
                PHP
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-node-js"></i>
								</span>
                Node.js
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-js"></i>
								</span>
                Express.js
							</li>
							<li>
								<span className="fa-li">⚫</span>
                Prisma.js
							</li>
						</ul>
					</div>
					<div className="col-sm mt-3">
						<h4>Front-End</h4>
						<ul className="fa-ul">
							<li>
								<span className="fa-li">
									<i className="fab fa-html5"></i>
								</span>
                HTML & CSS
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-js"></i>
								</span>
                JavaScript
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-react"></i>
								</span>
                React
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-sass"></i>
								</span>
                SASS
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-bootstrap"></i>
								</span>
                Bootstrap
							</li>
						</ul>
					</div>
					<div className="col-sm mt-3">
						<h4>Database</h4>
						<ul className="fa-ul">
							<li>
								<span className="fa-li">
									<i className="fas fa-database"></i>
								</span>
                MySQL
							</li>
							<li>
								<span className="fa-li">
									<i className="fas fa-leaf"></i>
								</span>
                MongoDB
							</li>
							<li>
								<span className="fa-li">🐘</span>
                PostgreSQL
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-sm mt-3">
						<h4>Deployment</h4>
						<ul className="fa-ul">
							<li>
								<span className="fa-li">
									<i className="fab fa-digital-ocean"></i>
								</span>
                Digital Ocean Droplets (Ubuntu)
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-raspberry-pi"></i>
								</span>
                Raspberry Pi
							</li>
						</ul>
					</div>
					<div className="col-sm mt-3">
						<h4>Other</h4>
						<ul className="fa-ul">
							<li>
								<span className="fa-li">
									<i className="fas fa-keyboard"></i>
								</span>
                Visual Studio Code
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-github"></i>
								</span>
                GitHub's Version Control
							</li>
							<li>
								<span className="fa-li">🐍</span>
                Python
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-windows"></i>
								</span>
                Visual Basic.net
							</li>
							<li>
								<span className="fa-li">
									<i className="fab fa-unity"></i>
								</span>
                Unity with C#
							</li>
							<li>
								<span className="fa-li">🖥️</span>
                C++
							</li>
							<li>
								<span className="fa-li">🔥</span>
                Firebase
							</li>
						</ul>
					</div>
					<div className="col-sm mt-3">
						<h4>Tech Stack I'm Using Here</h4>
						<ul className="px-2 mb-0">
							<li>React</li>
							<li>Bootstrap & SASS</li>
							<li>Laravel</li>
							<li>MySQL</li>
							<li>Digital Ocean's Droplet</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="p-3">
				<h3>Books</h3>
				<div className="books">
					<div>
						<h5>Favourite</h5>
						<div className="d-flex flex-wrap flex-row">
							<img
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019.jpg"
								alt="Lean Startup"
								className="book-cover m-1"
							/>
							<img
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414347376l/18050143.jpg"
								alt="Zero to One"
								className="book-cover m-1"
							/>
							<img
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050.jpg"
								alt="Algorithms to Live By"
								className="book-cover m-1"
							/>
							<img
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512705866l/30257963.jpg"
								alt="12 Rules for Life"
								className="book-cover m-1"
							/>
						</div>
					</div>
					<ReadingShelf />
				</div>
				<div className="p-3">
					<h3 className="text-center mt-3">Certificates</h3>
					<div className="certificates text-center">
						<a
							href="https://courses.edx.org/certificates/9f192cb0af55478b83e7786e8904c060"
							target="_blank"
							rel="noreferrer"
							className="p-2"
						>
							<img
								src="/img/UsingPythonForResearchCourse.JPG"
								className="certificate mb-3"
								alt="Using Python For Research Course"
							/>
						</a>
						<a
							href="https://www.sololearn.com/Certificate/1059-7797310/jpg"
							target="_blank"
							rel="noreferrer"
							className="p-2"
						>
							<img
								src="/img/PHPCourse.jpg"
								className="certificate mb-3"
								alt="PHP Course Certificate"
							/>
						</a>
						<a
							href="https://courses.edx.org/certificates/976eff4cc7f941698d3417258c35ffb6"
							target="_blank"
							rel="noreferrer"
							className="p-2"
						>
							<img
								src="/img/BlockchainTechnology.jpg"
								className="certificate"
								alt="Blockchain Technology Certificate"
							/>
						</a>
					</div>
				</div>
			</div>
			{/* <blockquote className="blockquote text-center mt-4 p-3">
        <p className="mb-0">
          A startup is the largest endeavour over which you can define mastery.
          You can have agency not just over your own life, but over a small and
          important part of the world.
        </p>
        <footer className="blockquote-footer">Peter Thiel</footer>
      </blockquote> */}
		</div>
	)
}

export default Home
