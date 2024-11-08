import { Box, List } from '@mui/material'
import React from 'react'
import { TodoFooter } from './TodoFooter'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../utils'
import { Todo } from './Todo'

export const TodoList = () => {
  const { data, isLoading, isError, error } = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Error:{error.message}</div>
  console.log(data.data);


  return (
    <div className='todolist'>
      <Box sx={{ margin: 'auto', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          {data.data.map(obj =>
            <Todo key={obj.id} {...obj} />
          )}
        </List>
        <TodoFooter nrTasks={data.data.filter(obj => !obj.completed).length} />
      </Box>
    </div>
  )
}
