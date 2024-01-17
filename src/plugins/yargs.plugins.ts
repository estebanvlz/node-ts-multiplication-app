// Import the 'yargs' library and the 'option' function to work with command-line arguments.
import yargs, { option } from 'yargs';

// Import the 'hideBin' function from 'yargs/helpers'.
import { hideBin } from 'yargs/helpers';

// Create an instance of 'yargs' and pass the command-line arguments (hiding 'node' and the script name).
// This allows handling arguments in a cleaner and application-specific way.
export const yarg = yargs(hideBin(process.argv))

// Add an 'b' option for the 'base' argument.
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,  // Require this argument to be provided.
    describe: 'Multiplication table base.'  // Description of the option.
})

// Add an 'l' option for the 'limit' argument.
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,  // Default value if this argument is not provided.
    describe: 'Multiplication table limit.'  // Description of the option.
})

// Add an 's' option for the 'shown' argument.
.option('s', {
    alias: 'shown',
    type: 'boolean',
    default: false,  // Default value if this argument is not provided.
    describe: 'Show multiplication table.'  // Description of the option.
})

// Add an 'n' option for the 'name' argument.
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name',
})

// Add a 'd' option for the 'destination' argument.
.option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'File destination',
})

// Synchronously parse the command-line arguments.
// This means the code will block until the arguments are processed.
.parseSync();
