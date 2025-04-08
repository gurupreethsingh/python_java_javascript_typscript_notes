myfile = open("Javascript_notes.txt" , "a")

my_notes = """
------------------------------------------------------------------------------
topic 2: Javascript Concatination and Relational operators
-------------------------------------------------------------------------------
	let a = 10;
	let b = 20;
	let c = "10";
	let d = 10;

	console.log(a+b);
	console.log("the sum of a and b is " + (a+b));
	console.log("the sum of a and b is " , (a+b));
	console.log("the sum of " + a +" and " + b + " is " + (a+b));


	console.log(a>b);
	console.log(a<b);
	console.log(a == d);
	console.log(a === d);
	console.log(a == c);  // no strict rules ( tries and converts string into integer)
	console.log(a === c);  //  very strict, check the datatype

"""


myfile.write(my_notes)

myfile.close()