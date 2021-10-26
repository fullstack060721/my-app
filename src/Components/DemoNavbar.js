import React from 'react';
import "../Styles/DemoNavbar.css";

function DemoNavbar() {
	return (
		<div className="demoNavbar">
			<a href="/home" className="linkHome"> Home</a>
			<a href="/About" className="linkBasic"> About</a>
			<a href="/Profile" className="linkBasic"> Profile</a>
			<a href="/Contact" className="linkBasic"> Contact</a>
		</div>
	)
}

export default DemoNavbar;
