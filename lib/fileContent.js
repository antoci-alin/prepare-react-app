module.exports = {
	indexjs: `import React from "react";\nimport ReactDOM from "react-dom";\nimport App from "./App";\n\nReactDOM.render(<App />, document.getElementById("root"));`,
	appjs: `import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage";
import "./style/app.scss";

const App = () => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;`,
	appscss: `@import "./_base.scss";\n@import "./components/components";`,
	homepage: `import React from "react";
const HomePage = () => {
    return (
        <div style={{display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center"}}>
            <h1>We are ready!</h1>
        </div>
    );
};
    
export default HomePage;`
};
