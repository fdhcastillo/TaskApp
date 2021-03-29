import React from 'react'
import FaceIcon from '@material-ui/icons/Face';
import EventIcon from '@material-ui/icons/Event';
import { TasksEntries } from './TasksEntries';

export const Sidebar = () => {
  return (
    <>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <span className="task__sidebar-title mt-5"><FaceIcon fontSize="large" />Franco Hermoza.</span>
      </div>
      <div className="task__sidebar-calendar mt-5 pointer">
        <EventIcon style={{fontSize:'100px'}} />
        <span style={{color:'black'}}>Nueva Tarea</span>
      </div>
      <TasksEntries></TasksEntries>
    </>
  )
}
