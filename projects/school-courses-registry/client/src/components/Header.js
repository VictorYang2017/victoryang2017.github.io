// Import libraries
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ context }) => {
	// Get authenticatedUser from authContext;
	const { authenticatedUser } = context;
	return (
		<header>
			<div className='wrap header--flex'>
				<h1 className='header--logo'>
					<Link to='/'>Courses</Link>
				</h1>
				<nav>
					{!authenticatedUser ? (
						<ul className='header--signedout'>
							<li>
								<Link to='/signup'>Sign Up</Link>
							</li>
							<li>
								<Link to='/signin'>Sign In</Link>
							</li>
						</ul>
					) : (
						<ul className='header--signedin'>
							<li>{`Welcome, ${authenticatedUser.userFirstName} ${authenticatedUser.userLastName}!`}</li>
							<li>
								<Link to='/signout'>Sign Out</Link>
							</li>
						</ul>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
