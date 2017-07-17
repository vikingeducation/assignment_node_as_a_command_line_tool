
// use process.argv
//loop
// check for keywords like add/sub/div/mult
// depending keyword, carry out operations for all the numbers following until we hit a string


function calc(){
    var sum = 0;
    var func = "";
    var arg = process.argv;
    for(let i=2;i<arg.length;i++) {
    if (!(isNaN(arg[i]))) {
      var num = parseInt(arg[i]);
      switch(func) {
        case "add":
          sum = (sum + num);
        break;
        case "sub":
          sum = (sum - num);
        break;
        case "mult":
          sum = (sum * num);
        break;
        case "div":
          sum = (sum / num);
        break;
      }
    }
    else if (typeof arg[i] === "string") {
      switch(arg[i]) {
        case "add":
          func = "add";
        break;
        case "sub":
          func = "sub";
        break;
        case "div":
          if (i === 2) {
            sum = arg[3];
            i++;
          }
          func = "div";
        break;
        case "mult":
          if (i === 2) {
            sum = 1;
          }
          func = "mult";
        break;
      }
    }
  }
  console.log(sum);
}

calc();
