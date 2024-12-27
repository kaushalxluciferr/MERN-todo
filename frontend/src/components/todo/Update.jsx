import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Update() {
  const { id } = useParams(); // Task ID from URL
  const userId = sessionStorage.getItem('id'); // User ID from session storage
  const [task, setTask] = useState({ title: '', body: '' }); // State for task data
  const navigate=useNavigate()

  // Fetch task data on component mount
  useEffect(() => {
   
    const fetchTask = async () => {
      try {
        const response = await axios.get(`${window.location.origin}/api/v2/gettask/${userId}`);
        const taskData = response.data.list.find((task) => task._id === id); // Filter by task ID
        if (taskData) {
          setTask(taskData);
        } else {
          toast.error('Task not found');
        }
      } catch (error) {
        toast.error('Failed to fetch task data');
      }
    };
  
    fetchTask();
  }, [id, userId]);
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // Handle update submission
  const handleUpdate = async () => {
    if (!task.title || !task.body) {
      toast.error('Title and body cannot be empty');
      return;
    }

    try {
      await axios.put(`${window.location.origin}/api/v2/update/${id}`, {
        title: task.title,
        body: task.body,
        id: userId, // Include the User ID
      });
      toast.success('Task updated successfully!');
navigate('/todo')
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  return (
    <div className="todo-main">
      <h4 className="todo-head">Update Your TODO</h4>
      <input
        type="text"
        value={task.title}
        placeholder="Enter Title"
        name="title"
        className="txt-todo"
        onChange={handleChange}
      />
      <br /> <br />
      <textarea
        className="txt-t"
        value={task.body}
        name="body"
        placeholder="Enter Description"
        onChange={handleChange}
      ></textarea>
      <br />
      <button className="btn-update" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default Update;
