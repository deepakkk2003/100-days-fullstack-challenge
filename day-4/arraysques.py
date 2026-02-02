# DSA PROBLEM:

# Count Pass and Fail students

# Condition:

# marks ≥ 40 → Pass

# else → Fail

students= [
    {"name":"deepak",'marks':40},
    {"name":"teja",'marks':30},
    {"name":"mike",'marks':20}
]

pass_count=0
fail_count=0

for student in students:
    if(student["marks"]>35):
        pass_count+=1
    else:
        fail_count+=1

print("number of passed students :",pass_count)
print("number of failed students :",fail_count)


products=[
    {"name":"sugar","price":550},
    {"name":"salt","price":450},
    {"name":"wired earphones","price":750}
]

count=0

for product in products:
    if(product["price"]>=500):
        print(product["name"],product["price"])
        count+=1
    else:
        print(product["name"],product["price"])
        

print("Total products with price > 500:", count)


#PROBLEM 2: FIND STUDENT WITH HIGHEST MARKS

candidates=[
    {"name":"max",'marks':40},
    {"name":"lucas",'marks':55},
    {"name":"will",'marks':70}
]

top_candidate=candidates[0]

for candidate in candidates[1:]:
    if candidate["marks"]>top_candidate["marks"]:
        top_candidate=candidate

print("Top student is :",top_candidate['name'], top_candidate["marks"])


accessories = [
    {"name": "Book", "price": 300},
    {"name": "Mouse", "price": 600},
    {"name": "Keyboard", "price": 1200}
]

# for item in accessories:
#     if item["price"] > 500:
#         print(item["name"], item["price"])
        
for items in accessories:
    if items['price']>500:
        items['status']='expensive'
    else:
        items['status']='cheaper'

print(accessories)