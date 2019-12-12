# Convert a string to an array
# "Robin Singh" == > ["Robin", "Singh"]

# "I love arrays they are my favorite" == >
# ["I", "love", "arrays", "they", "are", "my", "favorite"]


def string_to_array(s):
    string = s.split(" ")
    print(string)
    return string


string_to_array("Robin Singh")
string_to_array("CodeWars")
string_to_array("I love arrays they are my favorite")
string_to_array("1 2 3")


# Create a function that gives a personalized greeting.
#  This function takes two parameters: name and owner.
# Use conditionals to return the proper message:
# case return
# name equals owner	'Hello boss'
# otherwise	'Hello guest'


def greet(name, owner):
    if (name.lower() == owner.lower()):
        # used return for code wars
        # using print here so can see results
        print('Hello boss')
    else:
        print('Hello guest')


greet("Fred", "Fred")
greet("Tim", "Fred")
greet("Sarah", "Fred")
greet("owner", "OWNER")

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
# dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
# dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴ = 1390 = 695 * 2
# dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


def dig_pow(n, p):
    digits = list(str(n))
    pwr = p
    pwr_digits = list()

    for num in digits:
        number = int(num)
        numOut = number**pwr
        pwr_digits.append(numOut)
        pwr += 1

    summed = sum(pwr_digits)

    k = summed/n

    if(summed % n == 0):
        return k
    else:
        return -1


print(dig_pow(89, 1))
print(dig_pow(695, 2))
print(dig_pow(92, 1))
print(dig_pow(46288, 3))


# Bob is preparing to pass IQ test. The most frequent task in this test is to find out which
# one of the given numbers differs from the others. Bob observed that one number usually differs
# from the others in evenness. Help Bob — to check his answers, he needs a program that among the
# given numbers finds one that is different in evenness, and return a position of this number.

# ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the
# elements start from 1 (not 0)

# ##Examples :

# iq_test("2 4 7 8 10") = > 3 // Third number is odd, while the rest of the numbers are even

# iq_test("1 2 1 1") = > 2 // Second number is even, while the rest of the numbers are odd

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
        print( "index_even")
    else:
        print( "index_odd")


iq_test("2 4 7 8 10")
iq_test("1 2 1 1")
