

import math as math


# auto format moves import to top - math is used later in codes
# remove spaces from the string
# completed


def no_space(s):
    ans = s.replace(" ", "")
    print(ans)


print("test test   tesst")
no_space("test test  tesst")
no_space("c h e c  k i nh  y r f ")


#######################################
#######################################
#######################################


# Convert a string to an array
# "Robin Singh" == > ["Robin", "Singh"]

# "I love arrays they are my favorite" == >
# ["I", "love", "arrays", "they", "are", "my", "favorite"]


# completed


def string_to_array(s):
    string = s.split(" ")
    print(string)
    return string


# string_to_array("Robin Singh")
# string_to_array("CodeWars")
# string_to_array("I love arrays they are my favorite")
# string_to_array("1 2 3")

#######################################
#######################################
#######################################

# Create a function that gives a personalized greeting.
#  This function takes two parameters: name and owner.
# Use conditionals to return the proper message:
# case return
# name equals owner	'Hello boss'
# otherwise	'Hello guest'

# completed
def greet(name, owner):
    if (name.lower() == owner.lower()):
        # used return for code wars
        # using print here so can see results
        print('Hello boss')
    else:
        print('Hello guest')


# greet("Fred", "Fred")
# greet("Tim", "Fred")
# greet("Sarah", "Sasha")
# greet("owner", "OWNER")


#######################################
#######################################
#######################################


# Some numbers have funny properties. For example:

# 89 - -> 8¹ + 9² = 89 * 1
# 695 - -> 6² + 9³ + 5⁴ = 1390 = 695 * 2
# 46288 - -> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

# Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
# we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
# In other words:
# Is there an integer k such as: (a ^ p + b ^ (p+1) + c ^ (p+2) + d ^ (p+3) + ...) = n * k
# If it is the case we will return k, if not return -1.
# Note: n and p will always be given as strictly positive integers.
# dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
# dig_pow(92, 1) should return -1 since there is no  such as 9¹ + 2² equals 92 * k
# dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴ = 1390 = 695 * 2
# dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

# completed
def dig_pow(n, p):
    digits = list(str(n))
    print(digits)
    pwr = p
    pwr_digits = list()

    for num in digits:
        number = int(num)
        print(number)
        numOut = number**pwr
        pwr_digits.append(numOut)
        pwr += 1
    print(pwr_digits)
    summed = sum(pwr_digits)
    print(summed)

    k = summed/n
    print(k)

    if(summed % n == 0):
        return k
    else:
        return -1


print("here")
print(dig_pow(89, 1))
print(dig_pow(92, 1))
# print(dig_pow(695, 2))
# print(dig_pow(46288, 3))
print("here")


#######################################
#######################################
#######################################


# Bob is preparing to pass IQ test. The most frequent task in this test is to find out which
# one of the given numbers differs from the others. Bob observed that one number usually differs
# from the others in evenness. Help Bob — to check his answers, he needs a program that among the
# given numbers finds one that is different in evenness, and return a position of this number.

# ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the
# elements start from 1 (not 0)

# ##Examples :
# iq_test("2 4 7 8 10") = > 3 // Third number is odd, while the rest of the numbers are even
# iq_test("1 2 1 1") = > 2 // Second number is even, while the rest of the numbers are odd

# completed
def iq_test(numbers):
    index_odd = None
    index_even = None

    numbers = numbers.split(' ')
    count_odd = 0
    count_even = 0

    for i in range(len(numbers)):
        if int(numbers[i]) % 2 == 0:
            count_even += 1
            index_even = i + 1
        else:
            count_odd += 1
            index_odd = i + 1

    if count_even == 1:
        print(index_even)
    else:
        print(index_odd)


# iq_test("2 4 7 8 10")
# iq_test("1 2 1 1")


#######################################
#######################################
#######################################
#######################################
#######################################
#######################################

# Alan Partridge II - Apple Turnover
# Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!',
# else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

# X will be either a number or a string. Both are valid.

# completed
def apple(x):
    x = int(x)
    if x*x > 1000:
        print("It's hotter than the sun!!")
    else:
        print("Help yourself to a honeycomb Yorkie for the glovebox.")

# apple('50') # = "It's hotter than the sun!!"
# apple(4)  # = "Help yourself to a honeycomb Yorkie for the glovebox."
# apple("12")  # = "Help yourself to a honeycomb Yorkie for the glovebox."
# apple(60)  # = "It's hotter than the sun!!"
# apple(12)  # = "Help yourself to a honeycomb Yorkie for the glovebox."
# apple(4.4)  # = "Help yourself to a honeycomb Yorkie for the glovebox."


#######################################
#######################################
#######################################


# Build a function that takes in two arguments(salary, bonus).
# Salary will be an integer, and bonus a boolean.

# If bonus is true, the salary should be multiplied by 10.
# If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

# Return the total figure the individual will receive as a string prefixed with "£" (="\u00A3", JS, Go, and Java),
# "$" (C  # , C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua)
# or "¥" (Rust).

# completed
def bonus_time(salary, bonus):
    # your code here
    if bonus == True:
        sal = salary*10

        print('$'+str(sal))
    else:
        print('$'+str(salary))


# bonus_time(10000, True)


#######################################
#######################################
#######################################


# Task
# Given an integral number, determine if it's a square number:

# In mathematics, a square number or perfect square is an integer that is the square of an integer
# in other words, it is the product of some integer with itself.

# The tests will always use some integral number, so don't worry about that in dynamic typed languages.

# working now

print("squares")


def is_square(n):
    if n < 0:
        return False
    elif n == 0:
        return True
    else:
        a = math.sqrt(n)

        if a.is_integer() == True:
            return True
        else:
            return False


print(is_square(-1))   # false
print(is_square(0))    # true
print(is_square(3))   # false
print(is_square(4))    # true
print(is_square(25))    # true


# For every good kata idea there seem to be quite a few bad ones!

# In this kata you need to check the provided array(x) for good ideas 'good' and bad ideas 'bad'.
# If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
# If there are no good ideas, as is often the case, return 'Fail!'.


# close on this one - the js version works at least
def well(x):
   for i in x:
    g = 0
    if i == 'good':
        g += 1
    if g == 0:
        print('Fail!')
    elif g <= 2:
        print('Publish!')
    else:
        print("I smell a series!")

well(['bad', 'bad', 'bad'])  # = Fail!
well(['good', 'bad', 'bad', 'bad', 'bad'])  # = Publish!
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) # = I smell a series!


# Given an array of integers, return a new array with each value doubled.
# For example:
# [1, 2, 3] - -> [2, 4, 6]


# close on this one
def maps(a):
    if a == []:
        print(a)
    else:
        for x in a:
            b = int(a)
            c = b*2
            ans = []
            ans.append(c)

            print(ans)


# maps([1, 2, 3])  # = [2, 4, 6])
# maps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])  # =  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
# maps([])  # = [])
