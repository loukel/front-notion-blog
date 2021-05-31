import { Image } from 'react-bootstrap'
import icons from './Icons'

const Links = () => {
	return (
		<div className="p-3">
			<h4>Links </h4>
			<ol className="list-unstyled mb-0">
				<li className="mb-2">
					<a href="https://github.com/loukel" target="_blank" rel="noreferrer">
						<Image src={icons.github} className='icon-md mr-2 github'/>
            loukel
					</a>
				</li>
				<li className="mb-2">
					<a
						href="https://discordapp.com/users/158205237880946688"
						target="_blank"
						rel="noreferrer"
					>
						<Image src={icons.discord} className='icon-md mr-2'/>
            Louis#7086
					</a>
				</li>
				<li className="mb-2">
					<a href="https://twitter.com/has_freedom" target="_blank" rel="noreferrer">
						<Image src={icons.twitter} className='icon-md mr-2'/>
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
