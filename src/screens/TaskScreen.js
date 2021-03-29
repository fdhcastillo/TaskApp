import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { MainTask } from '../components/taskDescription/MainTask'
export const TaskScreen = () => {
  return (
    <div className="task__main">
      <div className="task__main-sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="task__main-screen">
        {/* <NoTask></NoTask> */}
        <MainTask></MainTask>
      </div>
      <div className="task__main-prioritytask">
        <h1>priority task</h1>
      </div>
    </div>
  )
}
