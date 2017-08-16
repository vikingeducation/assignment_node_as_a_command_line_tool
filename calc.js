/*
	Take stdinput, when i > 2, parse next args and stop after first or second number.
	If there are more args, parse them the same way and push into args array
	args array would look something like [add 2 2, sub 5, mul 6 5]

	Pass args array into calculate function.

	**in calculate function**
	map each operater with add, sub, etc.
	perform the calulation and return the results, using something like eval()

	for chained methods, add each results and alter a results value. When all arguments 
	are finished, return results
	
	example:
	[add 5 5, sub 2]
	results = 10;
	results = 8
	return results

	for v and version commands, use an if statement that checks first, then processes
	results in an else block
*/