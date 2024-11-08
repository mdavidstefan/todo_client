import React from 'react'

export const TodoFooter = ({ nrTasks }) => {
  return (
    <div style={{position:'fixed', bottom: '10px', right:'10px'}}>
      {nrTasks != 0 ? `{nrTasks} tasks left` : "No tasks left"}
    </div>
  )
}
