// Import the 'fs' module for handling file system operations.
import fs from 'fs';

// Define the interface for the save file use case.
export interface saveFileUseCase {
    execute: (options: Options) => boolean;
}

// Define the interface for the options that can be passed to the 'execute' method.
export interface Options {
    fileContent: string;   // Content of the file to be saved.
    destination?: string;  // Destination directory where the file will be saved (default value: 'outputs').
    fileName?: string;     // Name of the file to be saved (default value: 'table').
}

// Implement the class that performs the task of saving a file.
export class saveFile implements saveFileUseCase {
    // Constructor that may include dependency injection in the future.
    constructor(/* DI */) {}

    // Main method that performs the task of saving the file.
    execute({ fileContent, destination = 'outputs', fileName = 'table' }: Options): boolean {
        try {
            // Create directories recursively if they do not exist.
            fs.mkdirSync(destination, { recursive: true });
            // Write the output message to a text file at the specified path.
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            // Print a message to the console indicating that the file has been created.
            console.log('File created');
            return true;
        } catch (error) {
            // In case of an error, print the error to the console and return 'false'.
            console.log(error);
            return false;
        }
    }
}
