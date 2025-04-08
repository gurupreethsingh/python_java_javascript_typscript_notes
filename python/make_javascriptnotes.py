myfile = open("E:/python_java_javascript/python_java_javascript_typscript_notes/javascript/Javascript_notes.txt" , "a")

my_notes = """

------------------------------------------------------------------------------
topic 4 : There are 6 conditional statments in JS
------------------------------------------------------------------------------
// if
// if- else
// if -else if - else
// switch - case 
// break
// continue

var name = "Raj";

if (name == "Shubham")
{
    console.log("Access granted.");
}

else if (name == "Sham")
    {
        console.log("Access granted.");
    }

  else  if (name == "Raj")
        {
            console.log("Access granted.");
        }

     else   if (name == "Raju")
            {
                console.log("Access granted.");
            }

     else  if (name == "Ramesh")
                {
                    console.log("Access granted.");
                }
	else{
		console.log("Access Denied");
	}

	// SWITCH - CASE statement 
	switch(name)
	{
		case "Shubham" : {console.log("Access granted"); break;  }
		case "Raj" : {console.log("Access granted"); break;  }
		case "Raju" : {console.log("Access granted"); break;  }
		case "Ramesh" : {console.log("Access granted"); break;  }
		case "Sham" : {console.log("Access granted"); break;  }
		default: { console.log("Access Denied");}
	}

	// BREAK statement. 
	for ( let i =1; i <= 10; i++)
	{
		console.log(i);
		if(i == 5)
		{
			break;
		}
	}

	// Continue Statement. 

	for( let i = 1; i<=10; i++)
	{
		if(i==5)
		{
			continue;
		}
		console.log(i);
	}

"""


myfile.write(my_notes)

myfile.close()