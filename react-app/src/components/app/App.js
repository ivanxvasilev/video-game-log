import React, { Component, Fragment } from "react";
import { Header, Footer } from "../layouts";
import Games from "../games";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Games />
				<Footer />
			</Fragment>
		);
	}
}

export default App;
