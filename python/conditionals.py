# if, if-else,  if-elif-else, break, continue, 

name = "raju"

if name == "raj":
      print("access granted.")
elif name == "raju":
      print("access granted.")
elif name == "rajesh":
      print("access granted.")
elif name == "ramesh":
      print("access granted.")
else:
      print("Access denied")


# break, 
for i in range(1,11):
      print(i, end=" ")

print()
print("*" * 50)

for i in range(1,11):
      print(i, end=" ")
      if(i == 5):
            break


print()
print("*" * 60)

for i in range(1, 11):
      if i== 5:
            continue
      print(i, end = " ")

print()
print("*" * 60)

print(""" logical "and" operators
 logical "or"  operators
 logical "not" operators""")


for i in range(1, 11):
      if i >= 4 and i<= 7:
            continue
      print(i, end = " ")