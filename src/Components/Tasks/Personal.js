import React from 'react'

function Personal() {
  return (
    <div className="taskPage">
        <div className="taskContainer">
            <h1 className="heading">Personal</h1>
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

export default Personal