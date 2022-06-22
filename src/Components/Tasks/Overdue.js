import { React, useState, useEffect } from "react";
import "./Today.css";
import { db } from "../Firebase.js";
import { collection, getDocs } from "firebase/firestore";

function Overdue() {
  const [day, setDay] = useState("Today");
  var [data, setData] = useState([]);
  var today;
  today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  const fun = async () => {
    var data1 = [];
    const querySnapshot = await getDocs(collection(db, "email"));
    // setFiles(Number(querySnapshot.docs.length) - 1);
    querySnapshot.forEach((doc) => {
      //   if (doc.data().name) {
      //     setName(doc.data().name);
      //   }
      if (
        convertToDate(doc.data().taskDate).getTime() <
        convertToDate(today).getTime()
      )
        data1.push(doc.data());
    });
    setData(data1);
  };

  const checkday = (task) => {
    convertToDate(task.taskDate) === convertToDate(today)
      ? setDay("Today")
      : convertToDate(task.taskDate) < convertToDate(today)
      ? setDay("Yesterday")
      : setDay("Tomorrow");
  };

  useEffect(() => {
    fun();
  }, []);

  const convertToDate = (d) => {
    const [day, month, year] = d.split("/");
    return new Date(year, month - 1, day);
  };

  return (
    <div className="taskPage">
      <div className="taskContainer">
        <h1 className="heading" onClick={fun}>
          Overdue
        </h1>
        {/* <div className="tasks">
            <div className="check">
              <input type="checkbox" className="checkbox" />
            </div>
            <div className="matter">
              <div className="summary">Complete the Project</div>
              <div className={day === "Yesterday" ? "dayyesterday" : "day"}>
                {day}
              </div>
            </div>
          </div> */}
        <div className="taskscontainer">
          {data.map((task) => (
            <div className="tasks" key={task.taskName}>
              <div className="check">
                <input type="checkbox" className="checkbox" />
              </div>
              <div className="matter">
                <div className="summary">{task.taskName}</div>
                {/* {task.taskDate ? checkday(task) : <></>} */}

                {task.taskDate ? (
                  <div className="dayyesterday">{task.taskDate}</div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
          {data.length === 0 ? (
            <div className="summary">No Previous Tasks</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overdue;
