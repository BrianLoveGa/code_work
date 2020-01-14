import math as math


# auto format moves import to top - math is used later in codes
# remove spaces from the string
# completed


def no_space(s):
    ans = s.replace(" ", "")
    print(ans)


# print("test test   tesst")
# no_space("test test  tesst")
# no_space("c h e c  k i nh  y r f ")


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
    if name.lower() == owner.lower():
        # used return for code wars
        # using print here so can see results
        print("Hello boss")
    else:
        print("Hello guest")


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
        numOut = number ** pwr
        pwr_digits.append(numOut)
        pwr += 1
    print(pwr_digits)
    summed = sum(pwr_digits)
    print(summed)

    k = summed / n
    print(k)

    if summed % n == 0:
        return k
    else:
        return -1


# print("here")
# print(dig_pow(89, 1))
# print(dig_pow(92, 1))
# print(dig_pow(695, 2))
# print(dig_pow(46288, 3))
# print("here")


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

    numbers = numbers.split(" ")
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
    if x * x > 1000:
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
        sal = salary * 10

        print("$" + str(sal))
    else:
        print("$" + str(salary))


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

# print("squares")


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


# print(is_square(-1))   # false
# print(is_square(0))    # true
# print(is_square(3))   # false
# print(is_square(4))    # true
# print(is_square(25))    # true


#######################################
#######################################
#######################################


# For every good kata idea there seem to be quite a few bad ones!

# In this kata you need to check the provided array(x) for good ideas 'good' and bad ideas 'bad'.
# If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
# If there are no good ideas, as is often the case, return 'Fail!'.


# works now - clunky but effective
def well(x):
    g = 0
    b = 0
    for i in x:
        if b == len(x):
            break
        if i == "good":
            g += 1
        else:
            b += 1
    if g == 0:
        print("Fail!")
    elif g > 0 and g <= 2:
        print("Publish!")
    else:
        print("I smell a series!")


# well(['bad', 'bad', 'bad'])  # = Fail!
# well(['good', 'bad', 'bad', 'bad', 'bad'])  # = Publish!
# well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) # = I smell a series!


#######################################
#######################################
#######################################

# Given an array of integers, return a new array with each value doubled.
# For example:
# [1, 2, 3] - -> [2, 4, 6]


# close on this one
# def maps(a):
#     if a == []:
#         print(a)
#     else:
#         for x in a:
#             b = int(a)
#             c = b*2
#             ans = []
#             ans.append(c)

#             print(ans)


# maps([1, 2, 3])  # = [2, 4, 6])
# maps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])  # =  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
# maps([])  # = [])

#######################################
#######################################
#######################################

# // Write a function named sumDigits which takes a number as
# // input and returns the sum of the absolute value of each
# // of the number's decimal digits. For example:

# // sumDigits(10) # // Returns 1
# // sumDigits(99) # // Returns 18
# // sumDigits(-32) # // Returns 5


# // Write a function called repeatString which repeats the given
# // String src exactly count times.

# // repeatStr(6, "I") // "IIIIII"
# // repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


def repeat_string(n, s):

    return s * n


print(repeat_string(6, "I"))


# basic operations - calc in py


def basic_op(a, b, c):
    if a == "+":
        return b + c
    elif a == "-":
        return b - c
    elif a == "*":
        return b * c
    else:
        return b / c


print(basic_op("+", 3, 7))
print("ten")
print(basic_op("/", 49, 7))
print("seven")
print(basic_op("*", 5, 7))
print("thirty five")


# working
#######################################
#######################################
#######################################
def mouth_size(a):
    if a.lower() == "alligator":
        return "small"
    else:
        return "wide"


print(mouth_size("toucan"))
print(mouth_size("tou55can"))
print(mouth_size("Alligator"))
print(mouth_size("croc"))
print(mouth_size("LION"))

# works
#######################################
#######################################
#######################################

# // Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

# // Example:
# // isDivisible(3, 1, 3)--> true because 3 is divisible by 1 and 3
# // isDivisible(12, 2, 6)--> true because 12 is divisible by 2 and 6
# // isDivisible(100, 5, 3)--> false because 100 is not divisible by 3
# // isDivisible(12, 7, 5)--> false because 12 is neither divisible by 7 nor 5


def is_divisible(a, b, c):
    if (a % b == 0) and (a % c == 0):
        return True
    else:
        return False


print(is_divisible(3, 1, 3))
print(is_divisible(12, 2, 6))
print(is_divisible(100, 5, 3))
print(is_divisible(12, 7, 5))

# works
#######################################
#######################################
#######################################

# Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

# The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

# setAlarm(true, true) -> false setAlarm(false, true) -> false setAlarm(false, false) -> false setAlarm(true, false) -> true
# Test.describe("set_alarm")

# Test.it("returns correct result for all input values")
# Test.assert_equals(set_alarm(True, True), False,
#                    "Fails when input is True, True")
# Test.assert_equals(set_alarm(False, True), False,
#                    "Fails when input is False, True")
# Test.assert_equals(set_alarm(False, False), False,
#                    "Fails when input is False, False")
# Test.assert_equals(set_alarm(True, False), True,
#                    "Fails when input is True, False")


def set_alarm(employed, vacation):
    # Your code here
    if employed == True and vacation == False:
        return True
    else:
        return False


# works
#######################################
#######################################
#######################################


# Write a function that always returns 5

# Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

# Good luck  : )


def unusual_five():
    return len("fiver")


# works
#######################################
#######################################
#######################################


# // Task
# // Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

# // Input/Output
# // [input] string lastPlayer /$last_player

# // "black" or "white" - whose move it was during the previous round.

# // [input] boolean win /$win

# // true if the player who made a move during the previous round won, false otherwise.

# // [output] a string

# // Return "white" if white is to move on the next round, and "black" otherwise.

# // Example
# // For lastPlayer = "black" and win = false, the output should be "white".

# // For lastPlayer = "white" and win = true, the output should be "white".


def whoseMove(lastPlayer, win):
    if win == True:
        return lastPlayer
    else:
        if lastPlayer == "white":
            return "black"
        else:
            return "white"


# works
#######################################
#######################################
#######################################
test_Arr = [1, 2, 3, 4, 5]


def next_in_line(arr, item):
    arr.append(item)
    a = arr[0]
    arr = arr.pop(0)
    print("ans")
    print(arr)
    print(a)
    return a


next_in_line([], 5)
next_in_line([], 1)
next_in_line([2], 1)
next_in_line(test_Arr, 10)
# works
#######################################
#######################################

names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]


def golf_score(par, strokes):
    x = 0
    if strokes == 1:
        x += 0
    elif strokes > 1:
        k = strokes - par
        if k <= -2:
            x += 1
        elif k == -1:
            x += 2
        elif k == 0:
            x += 3
        elif k == 1:
            x += 4
        elif k == 2:
            x += 5
        else:
            x += 6
    return names[x]


print(golf_score(5, 4))
print(golf_score(4, 1))
print(golf_score(4, 2))
print(golf_score(5, 2))
print(golf_score(4, 3))
print(golf_score(4, 4))
print(golf_score(1, 1))
print(golf_score(5, 5))
print(golf_score(4, 5))
print(golf_score(4, 6))
print(golf_score(4, 7))
print(golf_score(5, 9))

# works
#######################################
#######################################

# // Jenny's secret message
def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    else:
        return "Hello, {name}!".format(name=name)


# works
#######################################
#######################################

# Return the number(count) of vowels in the given string.

# We will consider a, e, i, o, and u as vowels for this Kata.

# The input string will only consist of lower case letters and/or spaces.


def getCount(inputStr):
    num_vowels = 0
    # your code here
    for char in inputStr:
        if char in "aeiouAEIOU":
            num_vowels = num_vowels + 1
    return num_vowels


# works
#######################################
#######################################

# watermelons

def divide(weight):
    if weight == 2:
        return False
    elif weight % 2 == 0:
        return True
    else:
        return False


# works
#######################################
#######################################