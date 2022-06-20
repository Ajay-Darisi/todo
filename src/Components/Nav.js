import React, { useState } from "react";
import "./Nav.css";
import UserIcon from "../Images/user.png";
import Modal from "react-modal";

const customStyles = {
    overlay: {
        backgroundColor:'rgba(107, 114, 128, 0.75)',
      },
    content: {
        width: "28%",
        height: "45%",
        top: '20%',
        left: '35%',
        right: 'auto',
        bottom: 'auto',
    //   marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',
    },
  };

function Nav() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tag, setTag] = useState('personal');
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
                <h2 className="addtaskheading">
                    Add Task
                </h2>
                <div className="inputfields">
                    <p className="newtasktext">What are you upto?</p>
                    <input type="text" className="addtaskinput" placeholder="Breif text for what you want to accomplish." />
                    <p className="newtasktext">When do you want to complete it?</p>
                    <input type="text" className="addtaskinput" placeholder="Date in DD/MM//YY" />
                    <p className="newtasktext">Tags</p>
                    <div className="tags">
                      <button className={tag === 'personal'?'personalactive':'personaltag'} onClick={()=>setTag('personal')}>Personal</button>
                      <button className={tag === 'home'?'homeactive':'hometag'} onClick={()=>setTag('home')}>Home</button>
                      <button className={tag === 'office'?'officeactive':'officetag'} onClick={()=>setTag('office')}>Office</button>
                    </div>
                </div>
            </div>
            {/* <input type="text" placeholder="default" onChange={(e)=>setMsg(e.target.value)} /> */}
            <div className="buttons">
                <button className="newtaskbutton cancel" onClick={closeModal}>Cancel</button>
                <button className="newtaskbutton add" onClick={closeModal}>Add</button>
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
