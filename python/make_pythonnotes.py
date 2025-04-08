myfile = open("python_notes.txt" , "a")

my_notes = """
------------------------------------------------------------------------------
topic 3: relational operators
-------------------------------------------------------------------------------
    a = 10 
    b = 20 

    print(a <= b)
    print(a == b)
    print(a >= b)
    print(a != b)

"""


myfile.write(my_notes)

myfile.close()