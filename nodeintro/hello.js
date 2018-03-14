function doMath(num1, num2, operator){
	var do_add = parseInt(num1) + parseInt(num2);
	var do_sub = parseInt(num1) - parseInt(num2);
	var do_mult = parseInt(num1) * parseInt(num2);
	var do_div = parseInt(num1) / parseInt(num2);
	if( operator === '+'){
		return do_add;
	} else if( operator ==='-'){
		return do_sub;
	} else if(operator === '*'){
		return do_mult;
	} else if(operator === '/'){
		return do_div;
	}
}
for (var i=2; i<process.argv.length; i++){
	if(isNaN(process.argv[i])){
        var op = process.argv.splice(i,1);
        break;
	}
}
// var op = process.argv[3];
//console.log(op);
//console.log(process);

console.log(doMath(process.argv[2],process.argv[3],op[0]));
// console.log(process.argv[2]); //this is num1
// console.log(process.argv[3]); //this is num2
// console.log(process.argv[4]); //this is op
