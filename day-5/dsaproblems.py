# Find Maximum Number in a List
# Why this matters
# Backend often finds:
# Highest score
# Max price
# Top user


nums=list(map(int,input("Enter the number: ").split()))
max_number=nums[0]
for num in nums:
    if(num>max_number):
        max_number=num
print(max_number)


# DSA PROBLEM 2 (LeetCode Easy)
# ➤ Count Occurrences of a Number


numbers=list(map(int,input("enter the numbers: ").split()))
target=int(input("Enter a target value: "))
count=0
for i in numbers:
    if i==target:
        count+=1
print(count)

arr=list(map(int,input("Enter a array elements:").split()))
is_sorted=True
for i in range(len(arr)-1):
    if(arr[i]>arr[i+1]):
        is_sorted=False
        break
    
print(is_sorted)