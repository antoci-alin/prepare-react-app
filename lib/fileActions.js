const fs = require("fs");
const path = require("path");
const colors = require("colors");
const ora = require("ora");
const { indexjs, appjs, appscss, homepage } = require("./fileContent");

const spinner = new ora();

const removeFiles = () => {
	return new Promise((resolve, reject) => {
		if (fs.existsSync("./src")) {
			fs.readdir("src", function(err, files) {
				if (err) {
					reject(new Error("RemoveFiles failed."));
				}

				for (const file of files) {
					fs.unlink(path.join("src", file), err => {
						if (err) {
							reject(new Error("RemoveFiles failed."));
						}
					});
				}
			});
		} else {
			fs.mkdirSync("./src");
		}
		resolve();
	});
};

exports.removeFiles = async () => {
	await removeFiles().then(() => {
		spinner.succeed(` ${colors.bgCyan("src")} folder cleaned`);
	});
};

const manageFolders = () => {
	return new Promise((resolve, reject) => {
		let src = "./src";

		if (!fs.existsSync(src)) {
			fs.mkdirSync(src);
		}

		fs.mkdirSync("./src/components");
		fs.mkdirSync("./src/routes");
		fs.mkdirSync("./src/assets");
		fs.mkdirSync("./src/utils");
		fs.mkdirSync("./src/style");
		fs.mkdirSync("./src/style/components");

		resolve();
	});
};

exports.manageFolders = async () => {
	await manageFolders().then(() => {
		spinner.succeed(` Needed folders created`);
	});
};

const createFiles = () => {
	return new Promise((resolve, reject) => {
		fs.writeFileSync(`./src/style/_base.scss`, "//	All your resets, variables, mixins and any utility classes \n\n body {\n\tmargin: 0\n}", err => {
			if (err) {
				reject(new Error("CreateFiles failed"));
			}
		});

		fs.writeFileSync(`./src/style/components/_components.scss`, "//	Imports for all components style files", err => {
			if (err) {
				reject(new Error("CreateFiles failed"));
			}
		});

		fs.writeFileSync(`./src/style/app.scss`, appscss, err => {
			if (err) {
				reject(new Error("CreateFiles failed"));
			}
		});

		fs.writeFileSync(`./src/index.js`, indexjs, err => {
			if (err) {
				reject(new Error("CreateFiles failed"));
			}
		});

		fs.writeFileSync(`./src/routes/HomePage.js`, homepage, err => {
			if (err) {
				reject(new Error("CreateFiles failed"));
			}
		});

		fs.writeFileSync(`./src/App.js`, appjs, err => {
			if (err) {
				reject(new Error("CreateFiles failed"));
			}
		});

		resolve();
	});
};

exports.createFiles = async () => {
	await createFiles().then(() => {
		spinner.succeed(` Needed files created`);
	});
};
