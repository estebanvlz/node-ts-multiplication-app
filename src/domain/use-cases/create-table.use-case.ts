// Define the interface for the use case of table creation.
export interface createTableUseCase {
    execute: (options: createTableOptions) => string;
}

// Define the interface for the options that can be passed to the 'execute' method.
export interface createTableOptions {
    base: number;  // Base number for the multiplication table.
    limit: number; // Limit up to which the table will be generated (default value: 10).
}

// Implement the class that performs the task of creating a multiplication table.
export class createTable implements createTableUseCase {
    // Constructor that may include dependency injection in the future.
    constructor(/* Dependency Injection */) {}

    // Main method that performs the task of generating the multiplication table.
    execute({ base, limit = 10 }: createTableOptions): string {
        // Build the table header.
        const header = `
====================================
        Table of ${base}
====================================\n`;

        let outputMessage = '';
        // Use a for loop to generate the multiplication table from 1 to the specified limit.
        for (let i = 1; i <= limit; i++) {
            // Build each line of the table and append it to the output message.
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }

        // Combine the header and the table content and return it as a string.
        return header + outputMessage;
    }
}
