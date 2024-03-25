import React, { useState } from 'react';
import { Input, Heading, Button } from '@chakra-ui/react';
const Todo = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        deadline: ''
    });

    const [tasks, setTasks] = useState([]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setTasks([...tasks, formData]);
            resetForm();
        }
    }

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            deadline: ''
        });
    }

    const validate = () => {
        return formData.title.trim() !== '' && formData.description.trim() !== '' && formData.deadline.trim() !== '';
    }

    return (
        <>
            <div className="todo-form">
                <Heading fontSize={'14px'}>Add Tasks</Heading>

                <form onSubmit={onFormSubmit}>
                    <div>
                        <label fontWeight={'bold'}>Title:</label>
                        <Input ml={'50px'} mt={'10px'} width={'10rem'} type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    </div>
                    <div>
                        <label mt={'10px'}>Description</label>
                        <Input ml={'10px'} mt={'10px'} width={'10rem'} type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                    <div>

                        <label>Deadline</label>
                        <Input ml={'30px'} mt={'10px'} width={'10rem'} type="text" value={formData.deadline} onChange={(e) => setFormData({ ...formData, deadline: e.target.value })} />
                    </div>
                    <div>
                        <Button type="submit" colorScheme={'red'} marginLeft={'80px'} marginTop={'30px'}>Add Task</Button>
                    </div>
                </form>
            </div>
            <div className="todo-list">
                <p fontSize={'33px'} fontWeight={'bold'}>Tasks</p>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <strong>{task.title}</strong> --- &nbsp;
                            {task.description}
                            {task.deadline}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Todo;