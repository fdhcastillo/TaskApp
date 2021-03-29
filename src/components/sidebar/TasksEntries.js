import React from 'react'
import { TaskEntry } from './TaskEntry'

export const TasksEntries = () => {
  const entries = [1,2,3];
  return (
    <div className="task__entries">
      {
        entries.map(entry => ( 
          <TaskEntry key={entry} />
        ))
      }
    </div>
  )
}
