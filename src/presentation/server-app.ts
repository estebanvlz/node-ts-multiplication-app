// Importing necessary modules
import { createTable } from "../domain/use-cases/create-table.use-case";
import { saveFile } from "../domain/use-cases/save-file.use-case";

// Defining the structure of runOptions interface
interface runOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    fileDestination: string,
}

// Exporting a class named serverApp
export class serverApp {

    // Static method to run the server with specified options
    static run( { base, limit, showTable, fileDestination, fileName}: runOptions) {

        // Logging a message indicating that the server is running
        console.log( 'Server running...' );

        // Creating a table using the createTable use case
        const table = new createTable().execute( { base, limit } );

        // Saving the table to a file using the saveFile use case
        const wasCreated = new saveFile().execute( {fileContent: table, destination: fileDestination, fileName: fileName} );

        // Logging the table if showTable is true
        if ( showTable ) console.log( table );

        // Logging whether the file was created or not based on the result
        ( wasCreated )
            ? console.log('File created!')
            : console.error('File not created');
    }
}
