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
