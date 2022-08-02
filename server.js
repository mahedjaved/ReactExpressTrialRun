// one route that returns list of customers
const express = require("express");
const app = express();

// add the route
app.get("/api/customers", (req, res) => {
    // create customers, total = 3
    const customers = [
        { id: 1, firstName: "John", lastName: "Doe" },
        { id: 2, firstName: "Peter", lastName: "Parker" },
        { id: 3, firstName: "Mary", lastName: "Jane" },
    ];
    // send the customers as a respond with JSON
    res.json(customers);
});

// port number, remember 3000 is used for making React Apps
const port = 5000;

app.listen(port, () => {
    console.log(`[info] Server started successfully on port ${port}`);
});
