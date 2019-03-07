console.log("hello")


fetch("http://localhost:8088/food")
    .then(foods => food.json())
    .then(parsedFood => {
        console.table(parsedFood)
    })