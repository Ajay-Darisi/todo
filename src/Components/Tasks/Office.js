import React from 'react'

function Office() {
  return (
    <div className="taskPage">
        <div className="taskContainer">
            <h1 className="heading">Office</h1>
            <div className="tasks">
                <div className="check">
                    <input type="checkbox" className="checkbox" />
                </div>
                <div className="matter">
                    <div className="summary">
                        Complete the Project
                    </div>
                    <div className="day">
                        Tomorow
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Office