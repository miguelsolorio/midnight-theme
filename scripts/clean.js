const fs = require("fs");
const rimraf = require("rimraf");

const outputDirectory = "themes";

// clear dist folder
rimraf(outputDirectory, function () {

    console.log(`deleted "${outputDirectory}" folder`);

    // re-create dist folder
    fs.mkdirSync(outputDirectory);
});