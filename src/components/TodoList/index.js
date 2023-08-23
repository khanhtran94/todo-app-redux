import {Col, Row, Input, Button, Select, Tag} from 'antd';
import Todo from '../Todo';
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/actions";
import {v4 as uuid} from 'uuid';
import {useState} from "react";
import {todoListSelector} from "../../redux/selectors";

export default function TodoList() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium')
    const handlePriorityChange = (value) => {
        console.log(value)
        setPriority(value);
    }
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setTodoName(e.target.value)
    }
    const handleAddButtonClick = () => {
        dispatch(addTodo({
            id: uuid(),
            name: todoName,
            priority: priority,
            complete: false
        }))
        setTodoName('');
        setPriority('Medium');
    }
    const todoList = useSelector(todoListSelector);
    return (
        <Row style={{height: 'calc(100% - 40px)'}}>
            <Col span={24} style={{height: 'calc(100% - 40px)', overflowY: 'auto'}}>
                {todoList.map(todo => <Todo name={todo.name} prioriry={todo.priority} key={todo.id}/>)}
            </Col>
            <Col span={24}>
                <Input.Group style={{display: 'flex'}} compact>
                    <Input value={todoName} onChange={handleInputChange}/>
                    <Select defaultValue="Medium" onChange={handlePriorityChange} value={priority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
