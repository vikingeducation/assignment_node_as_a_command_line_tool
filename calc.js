// start process

// check if first arg starts with flag (-) or operation (add, sub, div or mult)

// if starts with flag

  // if -h or --help
    // log help information
  // else if -v or --version
    // log version information
  // else
    // log error - invalid flag

// else if starts with operation (add, sub, div or mult)
  // if there aren't 2 numbers after the operation
    // log an error
    // pause the process

  // create a var 'answer'
  // create a var 'endOfOperations' set to false

  // perform initial calculation
  // update answer


  // if there is a next argument

    // while endOfOperations === false
      // if the one after the operation is a number
        // perform calculation
        // update answer

        // unless next argument after number is an operation
          // endOfOperations = true
          // log the final answer
          // pause the process for another operation!

  // else there is no more arguments
    // log the final answer
    // pause the process for another operation!

