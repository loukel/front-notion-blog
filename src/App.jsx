import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Articles from './pages/Articles'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Article from './pages/Article'

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Profile />
						</Route>
						<Route exact path="/articles">
							<Articles />
						</Route>
						<Route path="/articles/:slug">
							<Article />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App