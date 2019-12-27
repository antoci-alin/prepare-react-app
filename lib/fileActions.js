const fs = require("fs");
const path = require("path");
const colors = require("colors");
const ora = require("ora");

const spinner = new ora();

exports.checkFiles = () => {
	try {
		if (fs.existsSync("./src")) {
			spinner.succeed(`${colors.bgBlue("src")} folder exists`);
		}
	} catch (err) {
		console.error(err);
	}
};

exports.removeFiles = () => {
	fs.readdir("src", function(err, files) {
		if (err) {
			return console.error("Unable to scan directory: " + err);
		}

		for (const file of files) {
			fs.unlink(path.join("src", file), err => {
				if (err) {
					return console.error(err);
				}

				spinner.succeed(`${file} removed`);
			});
		}
	});
};
