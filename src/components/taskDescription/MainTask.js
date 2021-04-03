import TaskImg from '../../assets/mainscreen/tareahecha.png';

import AssignmentIcon from '@material-ui/icons/Assignment';


import { Button, Paper } from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link } from 'react-router-dom';
import { CreateTask } from './CreateTask';
import { TableTask } from './TableTask';

export const MainTask = () => {
  return (
    <>
      <div className="task__main-navbar">
        <span>28 de Marzo del 2021</span>
          <Link to="/auth/login" style={{textDecoration:'none', color:'black'}}>
            <Button
              className="task__main-button"
              variant='contained'
              startIcon={<MeetingRoomIcon  style={{fontSize:'25px'}} />}
            >
              Logout
            </Button>
          </Link>
      </div>
      <div style={{margin:'0 20px', display:'flex'}}>
        <h1 className="task__main-title">Crea tu tarea y asignale una prioridad</h1>
        <AssignmentIcon fontSize="large" color="primary"></AssignmentIcon>
      </div>
      <div className="task__main-container">
        <div>
          <Paper className="task__main-paper" elevation={3}>
            <h1>Prioridades</h1>
            <div style={{display:'flex'}}>
              <h3>Muy urgente</h3>
              <div style={{width:'20px',height:'20px',background:'#ff555593', marginLeft:'5px'}}></div>
            </div>
            <div style={{display:'flex'}}>
              <h3>Urgente</h3>
              <div style={{width:'20px',height:'20px',background:'#ff9c5580', marginLeft:'5px'}}></div>
            </div>
            <div style={{display:'flex'}}>
              <h3>Puede esperar</h3>
              <div style={{width:'20px',height:'20px',background:'#ffd81388', marginLeft:'5px'}}></div>
            </div>
            <div style={{display:'flex'}}>
              <h3>Finalizado</h3>
              <div style={{width:'20px',height:'20px',background:'#1ec11b8c', marginLeft:'5px'}}></div>
            </div>
            <div style={{display:'flex'}}>
              <h3>No urgente</h3>
              <div style={{width:'20px',height:'20px',background:'#555bff8c', marginLeft:'5px'}}></div>
            </div>
          </Paper>
          <div className="task__main-imgcontainer">
            <img src={TaskImg} style={{width:'100%'}}></img>
          </div>
        </div>
        <div className="task__main-folder">
         <CreateTask></CreateTask>
        </div>
      </div>
      {/* <div style={{margin: '100px 40px'}}>
        <TableTask></TableTask>
      </div> */}
    </>
  )
}
