import React, { useContext, useEffect, useState } from 'react'
import TaskService from '../../../../api/Task.Service';
import { AuthContext } from '../../../../context/AuthProvider';
import Task from '../Task/Task';

const ShowAllTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const userTasks = tasks.filter((item) => item?.email === user?.email);
  useEffect(() => {
    setLoading(true);
    TaskService.getAllTasks()
      .then((res) => {
        setTasks(res?.data)
        setLoading(false);
      }).catch((err) => {
        setLoading(false)
        console.log(err?.message)
      })
  }, []);


  return (
    <div className="overflow-x-auto">
  <table className="table table-zebra w-11/12 mx-auto my-8">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Title</th>
        <th>Due-Date</th>
        <th>Action</th>
      </tr>
        </thead>
        {
          userTasks.map((task, index) => {
            const { _id, title, email, dueDate } = task;
            console.log(task)
            return (
              <tbody key={_id}>
                {/* row 1 */}
                <tr>
                  <th>{index+1}</th>
                  <th>{email}</th>
                  <th>{title}</th>
                  <th>{dueDate ? {email} : "--/--"}</th>
                  <th>{dueDate ? {email} : "--/--"}</th>
                </tr>
              </tbody>
            )
          })
        }
  </table>
</div>
  )
}

export default ShowAllTasks;
