myfile = open("Typescript_notes.txt" , "a")

my_notes = """
------------------------------------------------------------------------------
topic 1: Typescript varaibles.
-------------------------------------------------------------------------------
	let a1 :number = 10;
	let b1 :number = 20;
	let c1 : string = "hello";


	console.log(a1+b1);
	console.log("the sum of a and b is " + (a1+b1));
	console.log("the sum of a and b is " , (a1+b1));
	console.log("the sum of " + a1 +" and " + b1 + " is " + (a1+b1));


	console.log(a1>b1);
	console.log(a1<b1);

	output : basic.js file. 
		var a1 = 10;
		var b1 = 20;
		var c1 = "hello";
		console.log(a1 + b1);
		console.log("the sum of a and b is " + (a1 + b1));
		console.log("the sum of a and b is ", (a1 + b1));
		console.log("the sum of " + a1 + " and " + b1 + " is " + (a1 + b1));
		console.log(a1 > b1);
		console.log(a1 < b1);


"""


myfile.write(my_notes)

myfile.close()