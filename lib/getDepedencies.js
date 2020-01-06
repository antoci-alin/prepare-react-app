const { exec } = require("child_process");

const CMD = {
	vCreateReactApp: "npm list -g create-react-app",
	addDepedencies: "npm i react-router-dom node-sass --save",
	addPrettier: "npm i --save-dev --save-exact prettier",
	addCreateReactApp: "npm i -g create-react-app"
};

function checkCreateReactVersion() {
	return new Promise((resolve, reject) => {
		exec(CMD.vCreateReactApp, err => {
			if (err) {
				reject();
			}

			resolve({
				"create-react-app": "✓"
			});
		});
	});
}

function getCreateReactApp() {
	return new Promise((resolve, reject) => {
		exec(CMD.addCreateReactApp, err => {
			if (err) {
				reject();
			}

			resolve();
		});
	});
}

function getRouterDOM() {
	return new Promise((resolve, reject) => {
		exec(CMD.addDepedencies, err => {
			if (err) {
				reject(new Error("Cannot install react-router-dom"));
			}

			resolve();
		});
	});
}

function getPrettier() {
	return new Promise((resolve, reject) => {
		exec(CMD.addPrettier, err => {
			if (err) {
				reject(new Error("Cannot install prettier"));
			}

			resolve();
		});
	});
}

exports.getDepVer = async () => {
	await checkCreateReactVersion();
};

exports.getReactRouterDOM = async () => {
	await getRouterDOM();
};

exports.getPrettier = async () => {
	await getPrettier();
};

exports.getCreateReactApp = async () => {
	await getCreateReactApp();
};
