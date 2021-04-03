import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { MainTask } from '../components/taskDescription/MainTask'
import { StatisticTask } from '../components/taskDescription/StatisticTask'

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
        <StatisticTask></StatisticTask>
      </div>
    </div>
  )
}
