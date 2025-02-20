# 1. Check if a number is positive, negative, or zero
num = float(input("Enter a number: "))
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")

# 2. Check if a number is odd or even
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

## or

res =  "Even" if num % 2==0 else "Odd"

# 3. Check voting eligibility
age = int(input("Enter age: "))
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")

## or 

res = "Eligible" if age >= 18 else "Not Eligibla"

# 4. Find the greatest of two numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
if num1 > num2:
    print("Greatest number" + str(num1))
elif num2 > num1:
    print("Greatest number" + str(num2))
else:
    print("Both numbers are equal")

# 5. Check if a student has passed or failed
marks = float(input("Enter marks: "))
if marks > 40:
    print("Pass")
else:
    print("Fail")

#or

res = "Pass" if marks > 40 else "fail"

# 6. Display the day of the week based on a number
day_number = int(input("Enter a number (1-7): "))

if day_number == 1:
    print("Monday")
elif day_number == 2:
    print("Tuesday")
elif day_number == 3:
    print("Wednesday")
elif day_number == 4:
    print("Thursday")
elif day_number == 5:
    print("Friday")
elif day_number == 6:
    print("Saturday")
elif day_number == 7:
    print("Sunday")
else:
    print("Invalid input")


# 7. Simple calculator
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
operation = input("Enter operation (+, -, *, /): ")

if operation == '+':
    print("Result: " + (num1 + num2))
elif operation == '-':
    print("Result: " + (num1 - num2))
elif operation == '*':
    print("Result: " + (num1 * num2))
elif operation == '/':
    if num2 != 0:
        print("Result: " + (num1 / num2))
    else:
        print("Error: Division by zero")
else:
    print("Invalid operation")


# medium Questions
# 5. to check the sides form a triangle or not

def is_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        print("The sides form a triangle")
    else:
        print("The sides do not form a triangle")

side1 = float(input("Enter first side: "))
side2 = float(input("Enter second side: "))
side3 = float(input("Enter third side: "))

is_triangle(side1, side2, side3)

#2. To check a year is leap year or not
def is_leap_year(year):
    if (year % 400 == 0):
        print(year, "is a leap year")
    elif (year % 100 != 0 and year % 4 == 0):
        print(year, "is a leap yar")
    else:
         print(year, "is not a leap year")


year = int(input("Enter a year: "))

is_leap_year(year)

