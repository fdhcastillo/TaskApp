import React from 'react'
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

export const TaskEntry = () => {
  return (
    <div className="task__entry pointer">
      <div style={{display:' flex', alignItems:'center',justifyContent:'center'}}>
        <AssignmentLateIcon className="task__entry-colorIcon" style={{fontSize:'60px'}} />
      </div>
      <div className="task__entry-body">
        <h4 className="task__entry-title">Hacer un pastel</h4>
        <p className="task__entry-content">Comprar ingredientes para el cumpleaños de mi hijo</p>
      </div>
      <div className="task__line-vertical"></div>
      <div className="task__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
        <span>March</span>
      </div>
    </div>
  )
}
