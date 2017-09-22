/************************* Pseudocode **********************************

1. Get user input: argv = process.argv
2. Check parsed input:
	if argv[2] === '-v' or '--version' or '-h' or '--help'
		print relevant info
	else
		check if argv[2] is a command and next two array items are numbers
		if yes
			do operation requested in command
			while argv.length not reached
				do chaining by:
				move three places in array 
				check  argv[5] for command and arg[6] is number
				do operation  	
				continue till array .length reached
		else
			print out error message
3. print out final answer

**************************************************************************/

