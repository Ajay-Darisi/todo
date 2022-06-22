import React, { useState } from "react";
import "./Nav.css";
import UserIcon from "../Images/user.png";
import Modal from "react-modal";
import { db } from "./Firebase.js";
import { doc, setDoc } from "firebase/firestore";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(107, 114, 128, 0.75)",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  content: {
    width: "530px",
    height: "430px",
    top: "15%",
    left: "30%",
    right: "35%",
    bottom: "20%",
  },
};
// Modal.setAppElement('div');

function Nav() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [tag, setTag] = useState("personal");
  const [add, setAdd] = useState("Add");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(e) {
    console.log(e);
    setIsOpen(false);
  }

  const addTask = async () => {
    if (taskName) {
      setAdd("Adding task");
      await setDoc(doc(db, "email", String(Date.now())), {
        taskName: taskName,
        taskDate: taskDate,
        tag: tag,
      }).then(() => {
        setTaskName("");
        setTaskDate("");
        console.log("Uploading Task");
      });
      setAdd("Add");
      // setTag("Personal");
    }
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="nav">
      <div className="title">TASKS</div>
      <div className="searchbar">
        <input type="text" className="search" placeholder="Search" />
      </div>
      <div className="navEnd">
        <div className="newTask">
          <button className="new" onClick={openModal}>
            + New task
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div className="addtask">
              <h2 className="addtaskheading">Add Task</h2>
              <div className="inputfields">
                <p className="newtasktext">What are you upto?</p>
                <input
                  type="text"
                  className="addtaskinput"
                  placeholder="Breif text for what you want to accomplish."
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <p className="newtasktext">When do you want to complete it?</p>
                <input
                  type="text"
                  className="addtaskinput"
                  placeholder="Date in DD/MM//YYYY"
                  onChange={(e) => setTaskDate(e.target.value)}
                />
                <p className="newtasktext">Tags</p>
                <div className="tags">
                  <button
                    className={
                      tag === "personal" ? "personalactive" : "personaltag"
                    }
                    onClick={() => setTag("personal")}
                  >
                    Personal
                  </button>
                  <button
                    className={tag === "home" ? "homeactive" : "hometag"}
                    onClick={() => setTag("home")}
                  >
                    Home
                  </button>
                  <button
                    className={tag === "office" ? "officeactive" : "officetag"}
                    onClick={() => setTag("office")}
                  >
                    Office
                  </button>
                </div>
              </div>
            </div>
            {/* <input type="text" placeholder="default" onChange={(e)=>setMsg(e.target.value)} /> */}
            <div className="buttons">
              <button className="newtaskbutton cancel" onClick={closeModal}>
                Cancel
              </button>
              <button className="newtaskbutton add" onClick={addTask}>
                {add}
              </button>
            </div>
          </Modal>
        </div>
        <div className="user">
          <img
            src={UserIcon}
            alt="icon"
            className="userIcon"
            width="45"
            height="45"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
