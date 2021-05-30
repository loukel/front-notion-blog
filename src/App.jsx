import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Articles from './pages/Articles'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import ArticleShow from './pages/ArticleShow'

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
						<Route exact path="/Articles">
							<Articles />
						</Route>
						<Route path="/Articles/:slug">
							<ArticleShow />
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