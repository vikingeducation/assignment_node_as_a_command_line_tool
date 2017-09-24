# assignment_node_as_a_command_line_tool
Working with standard I/O, processes and command-line arguments in Node

<h3>Maddie Rajavasireddy</h3>
<b>Description:</b>   

1. Warmup: Listening to STDIN   
  files: text_editor.js, data/input.txt   
  Set up listener for user input using process.stdin and write data to input.txt  
  
2. Warmup: Creating Child Processes   
  files: basic_child_processes.js 
  Create a child process (spawn and exec) that runs the ps command with aux arguments    
3. Fun with I/O, Processes and Commands   
  files: command_runner.js   
  Set up listener with process.stdin. Input is parsed into variables that are passed to the spawn, crating a child process. Output is sent to stdout   
  
4. CLI Calculator: calc.js    
  Basic Caluclator Functions:   
  add (a) (b)   
  sub (a) (b)   
  div (a) (b)   
  mult (a) (b)   
  pow (a) (b)    
  sqrt (a)
  
5. Flags:   
  -v or --version, -h or --help, -d or --debug
  
6. Command Chaining:   
  $ node calc.js --debug add 1 1 sub 1 mult 4 div 2   
  add 1  1  =>  2   
  sub 2  1  =>  1    
  mult 1  4  =>  4    
  div 4  2  =>  2    
  Result: 2
  
7. Error Checking:   
  
8. Help for sub command: node calc.js FUNC -h   
