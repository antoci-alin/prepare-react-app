const { exec } = require("child_process");

const CMD = {
	createReactApp: "npm list -g create-react-app"
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

exports.getDepVer = async () => {
	let depedencies = [];
	depedencies.push(await getReactVersion());

	return depedencies;
};
