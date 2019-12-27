#!/usr/bin/env node

const colors = require("colors");
const ora = require("ora");

const dep = require("../lib/getDepedencies");
const { checkFiles, removeFiles } = require("../lib/fileActions");

const spinner = new ora({
	color: "blue",
	interval: 150,
	spinner: "dots10"
});

(async () => {
	//  Get list of dependences
	console.log(`\n። Checking if ${colors.bgBlue("create-react-app")} is installed`);
	spinner.start();
	let depList = await dep.getDepVer();

	if (depList.length > 0) {
		spinner.succeed(` ${colors.bgBlue("create-react-app")} installed`);
	} else {
		spinner.succeed(` ${colors.bgBlue("create-react-app")} installed`);
	}
	spinner.stop();

	console.log(`\n። Checking your files`);
	await checkFiles();
	console.log(`\n። Removing files`);
	await removeFiles();
})();
