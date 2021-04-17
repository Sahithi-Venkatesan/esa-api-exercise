# Cart Microservice API
## Sahithi Venkatesan - 18XJ1A0547
# ESA Assignment 2 - CS474 Enterprise Software Architecture
## Directions for Use:
Mongo DB atlas has been used for DB connection. 

Place your mongodb connection string uri in the place holder provided in the ```.env``` file that exists in the root directory.

Inorder to get this connection string, you can create an account at MongoDB atlas under the ```FREE``` plan set up your cluster!


To install all the related packages, use this command after cloning into the repository....
```
   > cd esa-api-exercise

   > npm install
```
To start the server, use...
```
   > npm start
```
Then you'll get server listening on port 3000 and a message saying that the db has been connected to Mongodb

# Use postman to make REST api calls
To add a user,
A POST request to ``` localhost:3000/rest/v1/users ``` with a request body
```
{
    "username":"sahithi",
    "password":"hi"
}
```
would give a response of 

```
{
    "_id": "6077aa6b80d3c422e0e8797f",
    "username": "sahithi",
    "password": "hi",
    "__v": 0
}
```
To view the list of users, 
A GET request to ``` localhost:3000/rest/v1/users ``` would yield
```
[
    {
        "_id": "6077aa6b80d3c422e0e8797f",
        "username": "sahithi",
        "password": "hi",
        "__v": 0
    }
]
```
Similarly, PUT request to ```localhost:3000/rest/v1/users/{username}``` would update the users db.

And a DELETE request to  ```localhost:3000/rest/v1/users/{username}``` would delete that specific user from the database

To add a new product, 
A POST request to ```localhost:3000/rest/v1/products``` with a request body
```
{
    "productId": "12445dsd234",
    "category": "Mobile",
    "productName": "Samsung Galaxy",
    "productModel":" S10 Edge",
    "price":"100000",
    "availableQuantity": "23"
}
```
would give a response of
```
{
    "_id": "6077ad9480d3c422e0e87981",
    "productId": "12445dsd234",
    "category": "Mobile",
    "productName": "Samsung Galaxy",
    "productModel": " S10 Edge",
    "price": 100000,
    "availableQuantity": 23,
    "__v": 0
}
```
A GET request to ```localhost:3000/rest/v1/products``` would give a response of

```
[
    {
        "_id": "6077ad9480d3c422e0e87981",
        "productId": "12445dsd234",
        "category": "Mobile",
        "productName": "Samsung Galaxy",
        "productModel": " S10 Edge",
        "price": 100000,
        "availableQuantity": 23,
        "__v": 0
    },
    {
        "_id": "6077af8c80d3c422e0e87982",
        "productId": "54326ppq768",
        "category": "Laptop",
        "productName": "Lenovo",
        "productModel": "Ideapad 540s",
        "price": 200000,
        "availableQuantity": 52,
        "__v": 0
    }
]
```
To view a specific product based on productID, a GET request to ```localhost:3000/rest/v1/product/{productId}``` would do

To update a specific product, use a PUT request to ```localhost:3000/rest/v1/product/{productId}```

To delete a specific product, use a DELETE request to ```localhost:3000/rest/v1/product/{productId}```

To add items to the cart of a specific user, a PUT request to ```localhost:3000/rest/v1/users/{username}/cart/{productID}``` with a request body
```
{
    "username":"sahithi",
    "productId": "12445dsd234",
    "productName": "Samsung Galaxy",
    "quantity": "1",
    "amount":"100000"
}

```
would yield a response of 

```
{
    "quantity": 1,
    "_id": "6077b4a480d3c422e0e87983",
    "username": "sahithi",
    "productId": "12445dsd234",
    "productName": "Samsung Galaxy",
    "amount": 100000,
    "__v": 0
}
```
To view the list of items in the cart of a specific user, a GET request to ```localhost:3000/rest/v1/users/{username}/cart``` would give a response of 
```
[
    {
        "quantity": 1,
        "_id": "6077b4a480d3c422e0e87983",
        "username": "sahithi",
        "productId": "12445dsd234",
        "productName": "Samsung Galaxy",
        "amount": 100000,
        "__v": 0
    }
]
```

To update cart of a specific user, use a PUT request to ```localhost:3000/rest/v1/users/{username}/cart/{productId}```

To delete an item in the cart of a specific user, use a DELETE request to ```localhost:3000/rest/v1/users/{username}/cart/{productId}```







