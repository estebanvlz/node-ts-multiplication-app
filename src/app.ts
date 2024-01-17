// Import the 'yarg' object from the './plugins/yargs.plugins' module.
import { yarg } from "./plugins/yargs.plugins";
import { serverApp } from "./presentation/server-app";

// Print the contents of 'yarg' to the console.
// console.log(yarg);

// Use an immediately-invoked asynchronous arrow function (IIFE).
(async () => {
    // Wait for the completion of the 'main' function before proceeding.
    await main();
})();

// Define an asynchronous function named 'main'.
async function main() {
    // Print the contents of 'yarg' to the console.
    const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = yarg;

    // Execute the 'run' method of the 'serverApp' class with the provided options.
    serverApp.run( {base, limit, showTable, fileName, fileDestination} );
}
