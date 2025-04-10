# a = 10 
# b = 20 
# print(a+b)

# print("The sum of "+ str(a)+ " and " +str(b) + " is "+ str(a+b))
# # print("The sum of a and b is " + (a+b)) not possible to 
# print("The sum of {} and {} is {}".format(a, b, (a+b)))
# print("The sum of a and b is ",  (a+b))

# a = "10"
# b = "20"
# print(a+b)

# // map(), filter(), reduce(), zip() 
def square(num):
    return num * num

l1 = [1,2,3,4,5,6,7,8,9,10]
print(list(map(square, l1)))


def checkeven(num):
    if(num % 2 != 0):
        return num

print(list(filter(checkeven, l1)))

# zip . 
un = ["raj", "raju", "rajesh"]
pwd = ["abc123", "123abc"]
print(list(zip(un, pwd)))

# reduce() .

from functools import reduce

l1 = [1,2,3,4,5,6,7,8,9, 10]

def add(a, b):
    return a+b

print(reduce(add, l1, 0))