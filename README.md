# Node_as_a_command_line_tool
Working with standard I/O, processes and command-line arguments in Node

**-Standard input and writing the input to file**. To launch type ```nodemon test_editor.js``` in terminal and	```\q``` to exit the program.

**-The CLI Calculator**

Simple command line calculator (using mathjs package) used as

````
$ node calc.js add 5 5
= 10
$ node calc.js add 5 5 sub 3
= 7
$ node calc.js -v
$ node calc.js --version
= 1.0
$ node calc.js -h
$ node calc.js --help

```
The result from the previous function can be passed as the first argument to the next function, and you can chain indefinitely 