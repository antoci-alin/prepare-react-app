const { exec } = require("child_process");

const CMD = {
	createReactApp: "npm list -g create-react-app",
	addDepedencies: "npm i react-router-dom node-sass --save",
	addPrettier: "npm i --save-dev --save-exact prettier"
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

function getPrettier() {
	return new Promise((resolve, reject) => {
		exec(CMD.addPrettier, err => {
			if (err) {
				reject(new Error("Cannot install Prettier"));
			}

			resolve({
				prettier: "✓"
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

exports.getPrettier = async () => {
	await getPrettier();
};
