import React, { useState } from 'react'
import TaskService from '../../../api/Task.Service';
import { toast } from 'react-hot-toast';
import Loader from '../../custome/Loader';

const DeleteModal = ({ selectedTask }) => {
    const { _id, title } = (selectedTask);
    const [loading, setLoading] = useState(false);
    const handelDeleteTask = (id) => {
        setLoading(true);
        TaskService.deleteTask(id)
            .then((res) => {
                if (res?.data?.acknowledged) {
                    setLoading(false);
                    document.getElementById("delete-task").checked = false;
                    toast.success(res?.message, { position: "top-center" });
            }
        })
            .catch((err) => {
                setLoading(false);
                console.log(err.message)
            })
    }
  return (
    <div>
        <input type="checkbox" id="delete-task" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative bg-primary text-white">
            <label htmlFor="delete-task" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-700 text-white hover:bg-red-700 border-0">✕</label>
                  <h3 className="text-lg font-bold text-center">Do you Want to <span className='text-red-500'>DELETE</span> this task ? </h3>
                  <h4 className='text-center text-xl font-semibold'>({title})</h4>
            {loading ? <Loader /> : <div className='flex justify-center items-center mt-4'>
            <button onClick={() => handelDeleteTask(_id)} className='btn btn-primary bg-red-600 hover:bg-red-500 text-white text-lg font-semibold border-0 ho mx-2'>YES</button>
            <label htmlFor="delete-task"  className='btn btn-primary bg-yellow-500 hover:bg-yellow-400 text-white text-lg font-semibold border-0 ho mx-2'>NO</label>
        </div>}
        </div>
        </div>
    </div>
  )
}

export default DeleteModal;
