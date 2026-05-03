import random


def password_generator():
    length = int(input("Enter the length of your password: ").strip())
    chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    password = ''

    if length < 8 or length > 24:
        print("The length of a password should be between 8 and 24.")
        return

    for _ in range(length):
        random_num = int(random.random() * len(chars))
        password += chars[random_num:random_num+1]

    print(password)


password_generator()
