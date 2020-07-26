from random import randint
import time

"""
User vs Computer
The user will have a prompt
The CPU would pick a random choice
Then check whether cpu_pick is x,y,z and user_pick is x,y,z then that means that person won
Placing all of these in a function to show OOP
"""

# print("Rock = [1]")


def picks():
    random_choice = ["rock", "paper", "scissors"]

    user_pick = input("Please choose: ").lower()

    # This will generate a random number from 0 to 2 which will then be the index of the random_choice list
    # this choice will then be the CPU's pick

    random_generator = randint(0, 2)
    cpu_pick = random_choice[random_generator]
    return user_pick, cpu_pick

def check_winner():
    user_pick, cpu_pick = picks()
    if user_pick == "rock" and cpu_pick == "paper":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("CPU Wins!")

    elif user_pick == "rock" and cpu_pick == "scissors":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("User Wins!")

    elif user_pick == "rock" and cpu_pick == "rock":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("The result is a DRAW!")

    elif user_pick == "paper" and cpu_pick == "paper":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("DRAW")

    elif user_pick == "paper" and cpu_pick == "scissors":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("CPU Wins!")

    elif user_pick == "paper" and cpu_pick == "rock":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("User Wins!")

    elif user_pick == "scissors" and cpu_pick == "paper":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("User Wins!")

    elif user_pick == "scissors" and cpu_pick == "rock":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("CPU Wins!")

    elif user_pick == "scissors" and cpu_pick == "scissors":
        time.sleep(3)
        print("The computer chose {}".format(cpu_pick))
        print("DRAW!")

check_winner()