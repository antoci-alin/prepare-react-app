const fs = require("fs");
const path = require("path");
const colors = require("colors");
const ora = require("ora");
const { indexjs, appjs, appscss, homepage } = require("./fileContent");

const spinner = new ora();

exports.removeFiles = async () => {
	fs.readdir("src", function(err, files) {
		if (err) {
			return console.error(err);
		}

		for (const file of files) {
			fs.unlink(path.join("src", file), err => {
				if (err) {
					return console.error(err);
				}
			});
		}
	});
	spinner.succeed(` ${colors.bgCyan("src")} folder cleaned`);
};

exports.manageFolders = async () => {
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

	spinner.succeed(` Needed folders and files created`);
};

exports.createStyleFiles = async () => {
	fs.writeFile(`./src/style/_base.scss`, "//	All your resets, variables, mixins and any utility classes \n\n body {\n\tmargin: 0\n}", err => {
		if (err) {
			return console.error(err);
		}
	});

	fs.writeFile(`./src/style/components/_components.scss`, "//	Imports for all components style files", err => {
		if (err) {
			return console.error(err);
		}
	});

	fs.writeFile(`./src/style/app.scss`, appscss, err => {
		if (err) {
			return console.error(err);
		}
	});

	fs.writeFile(`./src/index.js`, indexjs, err => {
		if (err) {
			return console.error(err);
		}
	});

	fs.writeFile(`./src/routes/HomePage.js`, homepage, err => {
		if (err) {
			return console.error(err);
		}
	});

	fs.writeFile(`./src/App.js`, appjs, err => {
		if (err) {
			return console.error(err);
		}
	});

	spinner.succeed(` SASS files created`);
};
