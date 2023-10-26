import React, { useState } from "react";
import "./home.css";
import axios from "axios";
export default function Home() {
  const [copyStudentList, setcopyStudentList] = useState([]);
  const handleSubmit = async () => {
    try {
      const response = await axios(
        "http://localhost:5000/api/student/getdata",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "asfdasgfagdgafgfg",
          },
        }
      );
      setcopyStudentList(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <button onClick={handleSubmit}>Show List</button>
      <table className="hello ">
        <tr className="hello">
          <th className="hello">ID</th>
          <th className="hello">Name</th>
          <th className="hello">Email</th>
          <th className="hello">Address</th>
          <th className="hello">DOB</th>
        </tr>
        {copyStudentList.map((val, index) => {
          return (
            <tr key={val.id}>
              <td className="hello">{val.id}</td>
              <td className="hello">{val.name}</td>
              <td className="hello">{val.email}</td>
              <td className="hello">{val.address}</td>
              <td className="hello">{val.DOB}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
