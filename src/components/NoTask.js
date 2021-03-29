import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
export const NoTask = () => {
  return (
      <div className="task__main-screen-nothing">
        Selecciona una tarea
        <AssignmentIcon style={{fontSize: '100px',color:'rgba(33, 34, 104, 0.356)'}} />
      </div>
  )
}
