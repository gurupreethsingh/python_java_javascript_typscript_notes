import os

# Step 1: Get the current path of the Python script
current_path = os.path.dirname(os.path.abspath(__file__))

# Step 2: Go up one level to reach the 'parent' directory
parent_path = os.path.dirname(current_path)

# Step 3: Navigate into the sibling 'javascript' folder from 'parent'
java_folder = os.path.join(parent_path, "java")

# Step 4: Target file path inside the 'javascript' folder
target_file_path = os.path.join(java_folder, "java_notes.txt")

my_notes = """
------------------------------------------------------------------------------
topic 1: Java variables
-------------------------------------------------------------------------------
package basics;

public class Varaibles {

	public static void main(String[] args) 
	{
		// byte short char int long float double String
		//  1    2     /u   4    8     4    8      null
		int a = 10;
		float b = 2.3f;
		double b1 = 4765476455674.778678;
		char c = 'a';    
		String d = "hello world";
		boolean f = true;
		
		System.out.println(a);
		System.out.println(b);
		System.out.println(b1);
		System.out.println(c);
		System.out.println(d);
		System.out.println(f);
	}
}


"""


# Step 6: Append the notes to the file
with open(target_file_path, "a", encoding="utf-8") as myfile:
    myfile.write(my_notes)

myfile.close()