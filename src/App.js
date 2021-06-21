import React from "react";
import Home from './pages/Home'
import Signup from './pages/signup'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './pages/Login'
import Blog from './pages/blog'
import News from './pages/newsfeed'

function App() {
  return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/blog">
					<Blog />
				</Route>
				<Route exact="/news">
					<News />
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
