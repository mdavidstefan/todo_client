import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { addTodo } from '../utils'
import { useQueryClient } from '@tanstack/react-query'

export const AddTodo = () => {
    const [newTask, setNewTask] = useState('')

    const queryClient = useQueryClient()

    const handleAdd = async () => {
        await addTodo({ task: newTask })
        queryClient.invalidateQueries('todos')
        setNewTask('')
    }
    return (
        <div className='addtodo'>
            <TextField id="filled-basic" label="add new task..." variant="filled"
                sx={{ backgroundColor: "white" }}
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <Button variant="outlined" onClick={handleAdd} disabled={!newTask ? true : false}>Add</Button>
        </div>
    )
}

