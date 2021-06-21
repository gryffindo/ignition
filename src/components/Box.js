import Box from '@material-ui/core/Box'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Hero () {

	return (
		<Box>
			<Box>
				<h1 className="heroHeading">Hello, Welcome to our awesome Blog Page</h1>
				<p className="heroDesc">Here you can share you opinion through blog about anything. <Button><Link className="signup" to="/signup">Signup</Link> </Button></p>
			</Box>
		</Box>
	)
}

export default Hero