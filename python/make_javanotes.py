myfile = open("Java_notes.txt" , "a")

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


myfile.write(my_notes)

myfile.close()