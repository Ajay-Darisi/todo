import React from 'react'

function Overdue() {
  return (
    <div className="taskPage">
    <div className="taskContainer">
        <h1 className="heading">Overdue</h1>
        <div className="tasks">
            <div className="check">
                <input type="checkbox" className="checkbox" />
            </div>
            <div className="matter">
                <div className="summary">
                    Complete the Project
                </div>
                <div className="dayyesterday">
                    Yesterday
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Overdue