import React, { useContext, useEffect, useState } from 'react'
import TaskService from '../../../../api/Task.Service';
import { AuthContext } from '../../../../context/AuthProvider';
import { AiFillEye, AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import DeleteModal from '../../../components/crudModal/DeleteModal'
import DetailsModal from '../../../components/crudModal/DetailsModal';

const ShowAllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    TaskService.getAllTasks()
      .then((res) => {
        setLoading(false);
        setTasks(res?.data)
      }).catch((err) => {
        setLoading(false)
        console.log(err?.message)
      })
  }, [tasks]);


  return (
    <>
      <div className="overflow-x-auto">
    <table className="table w-11/12 mx-auto my-8">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Title</th>
        <th className='text-center'>Due-Date</th>
        <th className='text-center'>Action</th>
      </tr>
        </thead>
        {
          tasks.map((task, index) => {
            const { _id, title, email } = task;
            return (
              <tbody key={_id}>
                {/* row 1 */}
                <tr className='hover:bg-slate-100 cursor-pointer'>
                  <th>{index+1}</th>
                  <th>{email}</th>
                  <th>{title}</th>
                  <th className='text-center'>{task?.dueDate ? `${task?.dueDate}` : "--/--"}</th>
                  <th>
                    <div className='flex justify-between items-center'>
                      <div className="tooltip hover:tooltip-open tooltip-success" data-tip="view">
                      <label onClick={() => setSelectedTask(task)} htmlFor="task-details" className='mx-2 cursor-pointer text-green-600 bg-green-200 p-[4px] rounded-full flex justify-center items-center text-md'><AiFillEye/></label>
                      </div>
                      <div className="tooltip hover:tooltip-open tooltip-warning" data-tip="Edit">
                      <span className='mx-2 cursor-pointer text-golden bg-lightG p-[4px] rounded-full flex justify-center items-center'><AiFillEdit /></span>
                      </div>
                      <div className="tooltip hover:tooltip-open tooltip-error" data-tip="Delete">
                      <label onClick={() => setSelectedTask(task)} htmlFor="delete-task" className='mx-2 cursor-pointer text-red-700 bg-red-200 p-[4px] rounded-full flex justify-center items-center text-sm'><RiDeleteBin6Fill /></label>
                      </div>
                    </div>
                  </th>
                </tr>
              </tbody>
            )
          })
        }
      </table>
      </div>
      <DetailsModal selectedTask={selectedTask} />
      <DeleteModal selectedTask={selectedTask} />
    </>
  )
}

export default ShowAllTasks;
