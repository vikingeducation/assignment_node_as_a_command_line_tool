var help_string = `
	Welcome to my calculator!
	Get a result with:
	[operator] [num] [num]

	operators include add, sub, mult, div

	You can also chain methods, just add more operators straight
	after your first calculable result.
	Feel free to chain as many methods as you like!

	Chained methods work when there is one operator followed by a number.

	Example:
	add 4 4 mult 6 sub 7 //41

	**More Examples**
	//a simple operation
	node calc.js sub 7 8 //-1

	//Chaining multiple arguments
	node calc.js add 1 2 sub 7 mult 10 //-40

	Have fun!
`

var pjson = require('./package.json');

var version_arg = process.argv[2].trim();
var result = 0;

if(version_arg == "-v" || version_arg == "-version"){
	console.log(pjson.version);
}
else if(version_arg == "-h" || version_arg == "-help"){
	console.log(help_string)
}

else{
	parse_args();
}

function parse_args(){
	var results = "";
	var first_split = true;
	var p = process.argv;

	//delete first two file path args
	process.argv.splice(0,2);

	while(process.argv.length > 1){

		if(first_split){
			results = `${p[0]} ${p[1]} ${p[2]}`;
			first_split = false;
			process.argv.splice(0,3);
		}
		else{
			results = `${p[0]} ${p[1]}`
			process.argv.splice(0,2);
		}

		calc_results(results);
		results = "";
	}
}

function calc_results(val){
	val = val.split(" ");
	var first_num = parseInt(val[1]);
	var second_num = parseInt(val[2]);

	if(val[0] == "add"){
		!second_num ? result+=first_num : result+=(first_num + second_num);
	}
	else if(val[0] == "sub"){
		!second_num ? result-=first_num : result+=(first_num - second_num);
	}
	else if(val[0] == "mult"){
		!second_num ? result*=first_num : result+=(first_num * second_num);
	}
	else if(val[0] == "div"){
		!second_num ? result/=first_num : result+=(first_num / second_num);
	}
	log_output(first_num, second_num, val[0]);
}

	function log_output(first_num, second_num, operator){
		var ops = {"add": "+", "sub":"-", "mult": "*", "div": "/"}

		if(second_num){
			console.log(`${first_num} ${ops[operator]} ${second_num} = ${result}`);
		}
		else{
			console.log( `${ops[operator]} ${first_num} = ${result}`);
		}
	}