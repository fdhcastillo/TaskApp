import React from 'react'

import { Button } from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link } from 'react-router-dom';

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
      <div>
        
      </div>
    </>
  )
}
