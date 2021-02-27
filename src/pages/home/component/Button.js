import React from 'react'
import { Button } from 'antd'

function CreateTodoButton(props) {
  return (
    <div className='buttonContainer'>
      <Button
        style={{
          background: '#333333',
          borderRadius: '5px',
          marginRight: '10px',
        }}
        id='createTodoButton'
        onClick={(e) => {
          e.preventDefault()

          props.navigation.push({
            pathname: '/create-edit-todo',
            state: {
              isEdit: false,
            },
          })
        }}>
        Create a ToDo
      </Button>
    </div>
  )
}

export default CreateTodoButton
