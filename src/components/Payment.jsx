import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDashboard} from "react-icons/md";
import '../styles/Payment.css'
const tableData = [
  {
    id: 1,
    image: "pexels5.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 2,
    image: "pexels5.png",
    email: "example2@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$700",
    status: "pending",
  },
  {
    id: 3,
    image: "pexels5.png",
    email: "example3@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$600",
    status: "Paid",
  },
  {
    id: 4,
    image: "pexels5.png",
    email: "example4@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$500",
    status: "Canceling",
  },
  {
    id: 5,
    image: "pexels5.png",
    email: "example5@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$400",
    status: "pending",
  },
  {
    id: 6,
    image: "pexels5.png",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$300",
    status: "pending",
  },
  {
    id: 6,
    image: "pexels5.png",
    email: "example6@example.com",
    name: "payment from king",
    date: "12.3.2024",
    amount: "$300",
    status: "pending",
  },
  // {
  //   id: 6,
  //   image: "pexels5.png",
  //   email: "example6@example.com",
  //   name: "payment from king",
  //   date: "12.3.2024",
  //   amount: "$300",
  //   status: "pending",
  // },

  // {
  //   id: 6,
  //   image: "pexels5.png",
  //   email: "example6@example.com",
  //   name: "payment from king",
  //   date: "12.3.2024",
  //   amount: "$300",
  //   status: "pending",
  // },

  // {
  //   id: 6,
  //   image: "pexels5.png",
  //   email: "example6@example.com",
  //   name: "payment from king",
  //   date: "12.3.2024",
  //   amount: "$300",
  //   status: "pending",
  // },
];

function Payment() {
  return (
    <div className="App">
      <div className="tablepaymentparagraph">
        <p className="paragraphtable1">Payment Details</p>
        <p className="paragraphtable2">
          <CiStopwatch className="tableicon " />
          <p> Last 30 days</p>
          <RiArrowDropDownLine className="tableicon" />
        </p>
      </div>

      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>
                <MdDashboard className="icon" />
              </th>
              <th>Car</th>
              <th>Transaction</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((message) => (
              <tr>
                <td>
                  <MdDashboard className="icon" />
                </td>
                <td>
                  <img src={message.image} className="dataimage" />
                </td>
                <td>{message.name}</td>
                <td>{message.date}</td>
                <td>{message.amount}</td>
                <td>{message.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Payment;
