myfile = open("E:/python_java_javascript/python_java_javascript_typscript_notes/javascript/Javascript_notes.txt" , "a")

my_notes = """
------------------------------------------------------------------------------
topic 3 : varaibles declaration and initialization and printing.  
-------------------------------------------------------------------------------

// let a = 100;
// console.log(a);

// var name = "shubham";
// console.log(name);

// var name = "Gurupreeth";
// console.log(name);

// a = 200; 
// console.log(a);

// const b = 300; 
// console.log(b);

 // priting techniquies.

// var name = "Shubham";
// console.log("The name is " + name);
// console.log("The name is " , name);
// console.log(`The name is ${name}`);
// console.log(`The name is ${name}`);

"""


myfile.write(my_notes)

myfile.close()