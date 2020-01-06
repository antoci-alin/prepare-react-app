#!/usr/bin/env node

const colors = require("colors");
const ora = require("ora");
const readline = require("readline");

const { getDepVer, getReactRouterDOM, getPrettier, getCreateReactApp } = require("../lib/getDepedencies");
const { removeFiles, manageFolders, createFiles } = require("../lib/fileActions");

let arguments = process.argv.splice(2);

const askQuestion = () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return new Promise(resolve =>
		rl.question(`Do you want to install it now? \n (yes/no):`, ans => {
			rl.close();
			resolve(ans);
		})
	);
};

const spinner = new ora({
	color: "blue",
	interval: 150,
	spinner: "dots10"
});

(async () => {
	console.log(`\n። Checking if ${colors.bgBlue("create-react-app")} is installed`);
	spinner.start();
	try {
		await getDepVer();
	} catch {
		spinner.fail(` ${colors.bgBlue("create-react-app")} not installed.`);
		spinner.stop();

		const ans = await askQuestion();

		switch (ans.toLocaleLowerCase()) {
			case "y" || "yes":
				console.log(`\n። Installing ${colors.bgBlue("create-react-app")}`);
				spinner.start();
				await getCreateReactApp();
				spinner.stop();
				spinner.succeed(` ${colors.bgBlue("create-react-app")} installed!`);
				break;
			case "no" || "n":
				return;
			default:
				return;
		}
	}

	spinner.stop();

	console.log(`\n። Installing ${colors.bgBlue("react-router-dom & node-sass")}`);
	spinner.start();
	await getReactRouterDOM();
	spinner.stop();
	spinner.succeed(` ${colors.bgBlue("react-router-dom")} & ${colors.bgBlue("node-sass")} installed`);

	if (arguments[0] === "--prettier") {
		console.log(`\n። Installing ${colors.bgBlue("Prettier")}`);
		spinner.start();
		await getPrettier();
		spinner.stop();
		spinner.succeed(` ${colors.bgBlue("prettier")} installed (dep)`);
	}

	console.log(`\n። Preparing your project`);
	await removeFiles();
	await manageFolders();
	await createFiles();

	console.log(`\n። All set!\n\n You can now start your server with ${colors.bgRed("yarn start")}`);
})();
