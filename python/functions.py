# # declaring a function in python using def keywork. 

# def add():
#       a = 10 
#       b = 20
#       print(a+b)

# # calling the function by its name. 
# add()

# # 1. functions without any parameters. 
# def subract():
#       a = 10
#       b = 5
#       print(a-b)

# subract()

# # functions with paramers. 
# def multiply(a,b):
#       print(a*b)

# multiply(2,5)

# # function with return valuse. 
# def greeting(name):
#       return "Hello {}".format(name)


# print(greeting("aditya"))
# print(greeting("ecoders"))

# # functions with default values. 
# def greeting(name="Ecoders"):
#       return "Hello {}".format(name)

# print(greeting("aditya"))
# print(greeting("ecoders"))
# print(greeting())

# inbuilt functions. 

# print(dir())

# print(dir(__builtins__))

# s1 = "aditya"
# print(len(s1))

# l1 = [1,2,3,4,5,6,7,8,9,10]
# print(min(l1))
# print(max(l1))

# advance functions in python. 
# map(), filter(), zip(), reduce()

l1 = [1,2,3,4,5,6,7,8,9,10]

def square(num):
      return num* num

print(list(map(square, l1)))


# l1.map((eachnumer)=>{
#       return eachnumber * eachnumber
# })



# l1 = [1,2,3,4,5,6,7,8,9,10]

# def even(num):
#       if num % 2 == 0:
#             return num


# def odd(num):
#       if num % 2 != 0:
#             return num

# print(list(filter(even, l1)))

# print(list(filter(odd, l1)))


# un = ["adiya" , "vankatesh" , "Shilpa"]
# pwd = ["1234" , "", "4312"]

# print(list(zip(un, pwd)))


# # reduce function. 
# from functools import reduce

# def add(a, b):
#       return a+b


# l1 = [1,2,3,4,5,6,7,8,9,10]

# # 1,2,3,4,5,6,7,8,9,10
# # 3,3,4,5,6,7,8,9,10
# # 6,4,5,6,7,8,9,10
# # 10,5,6,7,8,9,10
# # 15,6,7,8,9,10
# # 21,7,8,9,10
# # 28,8,9,10
# # 36,9,10
# # 45,10
# # 55

# print(reduce(add, l1, 0))

# def multiply(a,b):
#       return a*b

# l1 = [1,2,3,4,5]

# print(reduce(multiply, l1, 1))



# recursive functions. 

def sum(num):
      if num == 1:
            return 1
      else:
            return num + sum(num-1)

# print(sum(1))

# print(sum(2))

print(dir(list))

# l1 = [1,2,3,4,5,6,7,8,9,10]

# for i in l1:
#       print(sum(i))
#       print("-" * 40)


print(sum(100))