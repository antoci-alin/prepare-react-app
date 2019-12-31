const { exec } = require("child_process");

const CMD = {
	createReactApp: "npm list -g create-react-app",
	addDepedencies: "npm i react-router-dom node-sass --save"
};

function getReactVersion() {
	return new Promise((resolve, reject) => {
		exec(CMD.createReactApp, (err, stdout, stderr) => {
			if (err) {
				reject(new Error("Not installed"));
			}

			resolve({
				"create-react-app": "✓"
			});
		});
	});
}

function getRouterDOM() {
	return new Promise((resolve, reject) => {
		exec(CMD.addDepedencies, err => {
			if (err) {
				reject(new Error("Cannot install react-router-dom"));
			}

			resolve({
				"react-router-dom": "✓",
				"node-sass": "✓"
			});
		});
	});
}

exports.getDepVer = async () => {
	let depedencies = [];
	depedencies.push(await getReactVersion());

	return depedencies;
};

exports.getReactRouterDOM = async () => {
	await getRouterDOM();
};
