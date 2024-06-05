import React, { useState } from 'react'
import { CiStopwatch } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { RiArrowDropDownLine, RiDeleteBin6Line } from "react-icons/ri";
import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import activeimage from '/pexels5.png'
import '../styles/Activecar.css'
import Addcar from './Addcar';
import { Link } from 'react-router-dom';
import Editform from './Editform';
function Activecar() {

const tableData = [
  {
    id: 1,
    image: "pexels5.png",
    email: "example1@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$900",
    status: "Canceling",
  },
  {
    id: 2,
    image: "pexels5.png",
    email: "example2@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    type: "card",
    amount: "$700",
    status: "pending",
  },
  {
    id: 3,
    image: "pexels5.png",
    email: "example3@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$600",
    type: "card",
    status: "Paid",
  },
  {
    id: 4,
    image: "pexels5.png",
    email: "example4@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$500",
    type: "card",
    status: "Canceling",
  },
  {
    id: 5,
    image: "pexels5.png",
    email: "example5@example.com",
    name: "payment from king",
    date: "12.3.2024",
    cartype: "hyundai",
    amount: "$400",
    type: "card",
    status: "pending",
  },
  
    ];
  let i = 0;
    const [openModel, setOpenModel] = useState(false);

    const handlemadal = () => {
      setOpenModel(!openModel);
    };
 const [openForm, setOpenForm] = useState(false);
 const handlemodal = () => {
   setOpenForm(!openForm);
 };

  return (
    <div className="active">
      {openModel && <Addcar handlemadal={handlemadal} />}
      {openForm && <Editform handlemodal={handlemodal} />}
      <div className="tableactiveparagraph">
        <p className="paragraphtable1">Payment Details</p>
        <p className="paragraphtable2" onClick={handlemadal}>
          Add a car
        </p>
      </div>
      <div className="activecar">
        <div className="activecard">
          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <Link to="singlecar">
              <img src={activeimage} />
            </Link>
          </div>
          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <Link to="singlecar">
              <img src={activeimage} />
            </Link>
          </div>

          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <Link to="singlecar">
              <img src={activeimage} />
            </Link>
          </div>
          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <Link to="singlecar">
              <img src={activeimage} />
            </Link>
          </div>

          <div className="activecard1">
            <div className="activecard12">
              <div>
                <p>Toyota ModelX</p>
                <p>2021</p>
              </div>

              <p>120,000/day</p>
            </div>
            <Link to="singlecar">
              <img src={activeimage} />
            </Link>
          </div>
        </div>

        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>CarDriver</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Cartype</th>
                <th>ReturnDate</th>
                <th>Type</th>
                <th>Totalprice</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr>
                  <td className="id-icon">
                    <MdDashboard className="icon" />
                    <p>#{(i += 1)}</p>
                  </td>
                  <td>
                    <img src={data.image} className="dataimage" />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>{data.cartype}</td>
                  <td>{data.date}</td>
                  <td>{data.type}</td>
                  <td>{data.amount}</td>
                  <td className="activeedit-delite">
                    <MdEdit onClick={handlemodal} />
                    <RiDeleteBin6Line className="active-delite" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Activecar