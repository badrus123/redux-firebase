import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../redux/actions/delete_todos_action'
import { changeTodo } from '../../../redux/actions/change_todo_status_action'
import { Avatar, Button, Card, Row, Col } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { TodoStatus } from '../../../redux/actions/create_todo_action'
import moment from 'moment'
import './card.scss'
import ImageViewer from 'react-simple-image-viewer'

function TodoCard(props) {
  const dispatch = useDispatch()
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [images, setImages] = useState([props.item.imageUrl])

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = useCallback(() => {
    setIsViewerOpen(false)
  }, [])

  return (
    <Card
      style={{
        marginBottom: 10,
        borderRadius: 4,
      }}>
      {isViewerOpen && (
        <ImageViewer src={images} currentIndex={0} onClose={closeImageViewer} />
      )}
      <Row>
        <Col span={5} onClick={() => openImageViewer()}>
          <Avatar src={props.item.imageUrl} size={48} />
        </Col>
        <Col span={12}>
          <Row>
            <span className='header'>{props.item.header}</span>
          </Row>
          <Row>
            <span className='description'>{props.item.description}</span>
          </Row>
        </Col>
        <Col span={4}>
          <EditOutlined
            onClick={(e) => {
              e.preventDefault()

              console.log(props)

              props.navigation.push({
                pathname: '/create-edit-todo',
                state: {
                  isEdit: true,
                  item: props.item,
                },
              })
            }}
            style={{
              float: 'right',
            }}
          />
        </Col>
        <Col span={3}>
          <DeleteOutlined
            onClick={(e) => {
              e.preventDefault()
              dispatch(deleteTodo(props.item.id))
            }}
            style={{
              float: 'right',
              color: 'red',
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Button
          onClick={(e) => {
            e.preventDefault()
            dispatch(changeTodo(props.item))
          }}
          style={{
            background:
              props.item.status === TodoStatus.DONE ? '#F2F2F2' : '#CCCCCC',
            color: '#2D2F30',
            borderColor: 'transparent',
            width: '100%',
          }}
          type='primary'>
          {props.item.status === TodoStatus.DONE ? 'Done' : 'This is done'}
        </Button>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col span='24'>
          CreatedAt:{' '}
          {moment(props.item.createdAt).format('DD MMMM YYYY, H:mma')}
        </Col>
      </Row>
      <Row>
        <Col span='24'>CreatedBy: {props.item.username}</Col>
      </Row>
    </Card>
  )
}

export default TodoCard
