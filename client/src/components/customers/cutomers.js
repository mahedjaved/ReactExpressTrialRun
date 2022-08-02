// import logo from "./logo.svg";
import React, { Component } from "react";
import "./customers.css";

class Customers extends Component {
    constructor() {
        // super because this is embedded into the parent component
        super();
        this.state = {
            customers: [],
        };
    }
    // life cycle component
    componentDidMount() {
        fetch("/api/customers")
            .then((res) => res.json())
            .then((customers) =>
                this.setState({ customers }, () =>
                    console.log("Customers fetched ..", customers)
                )
            );
    }
    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map((customer) => (
                        <li key={customer.id}>
                            {customer.firstName} {customer.lastName}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
// function Customers() {
//     return (
//         <div>
//             <h2>Customers</h2>
//         </div>
//     );
// }

export default Customers;
