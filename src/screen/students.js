import { useEffect, useState } from "react";
import { getData } from "../config/firebasemethods";

function StudentList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData("students")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Student List</h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>CNIC</th>
        </tr>
        <tbody>
          {data && data.length > 0
            ? data.map((x) => (
                <tr>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.cnic}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
}
export default StudentList;
