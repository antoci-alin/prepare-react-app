#!/usr/bin/env node

const colors = require("colors");
const ora = require("ora");

const { getDepVer, getReactRouterDOM } = require("../lib/getDepedencies");
const { removeFiles, manageFolders, createStyleFiles } = require("../lib/fileActions");

const spinner = new ora({
	color: "blue",
	interval: 150,
	spinner: "dots10"
});

(async () => {
	console.log(`\n። Checking if ${colors.bgBlue("create-react-app")} is installed`);
	spinner.start();
	let depList = await getDepVer();

	if (depList.length > 0) {
		spinner.succeed(` ${colors.bgBlue("create-react-app")} installed`);
	}

	spinner.stop();

	console.log(`\n። Installing ${colors.bgBlue("react-router-dom & node-sass")}`);
	spinner.start();
	await getReactRouterDOM();
	spinner.stop();
	spinner.succeed(` ${colors.bgBlue("react-router-dom")} installed`);

	console.log(`\n። Preparing your project`);
	await removeFiles();
	await manageFolders();
	await createStyleFiles();

	console.log(`\n። All set!\n\n You can now start your server with ${colors.bgRed("yarn start")}`);
})();
