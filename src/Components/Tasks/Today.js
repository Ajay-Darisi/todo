import { React, useState, useEffect } from "react";
import './Today.css';
import { useLocation } from "react-router-dom";

function Today() {
    const [day,setDay] = useState("Today");
//   const location = useLocation();
//     const [day, setDay] = useState("Today");
    // useEffect(() => {
    //     if(location.state.day)
    //         setDay(location.state.day);
    // },[]);
  return (
    <div className="taskPage">
        <div className="taskContainer">
            <h1 className="heading">Today</h1>
            <div className="tasks">
                <div className="check">
                    <input type="checkbox" className="checkbox" />
                </div>
                <div className="matter">
                    <div className="summary">
                        Complete the Project
                    </div>
                    <div className={day==='Yesterday' ? 'dayyesterday':'day'}>
                        {day}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Today