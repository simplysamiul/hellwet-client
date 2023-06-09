import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import TaskService from '../../../api/Task.Service';
import { toast } from 'react-hot-toast';
import Loader from '../../custome/Loader';

const CreateTask = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = data => {
    setLoading(true);
    const userInfo = {
      title: data.title,
      email: data.email,
      description: data.description,
      dueDate: data.duedate
    }
    TaskService.createTask(userInfo)
      .then((res) => {
        setLoading(false);
        reset();
      toast.success(res?.message, {position: "top-center"})
      }).catch((err) => {
        setLoading(false);
        console.log(err.message)
      })
  };
  return (
    <div className='lg:h-screen flex flex-1 justify-center items-center text-white w-full'>
      <div className='bg-primary py-8 px-10 w-full xl:w-1/3 shadow-lg rounded'>
        <h2 className='text-center my-4 text-xl font-semibold'>Create A New Task</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center'>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
            type="text"
            placeholder="Title"
            className="input w-full"
            {...register("title", { required: true,maxLength: 50 })}
          />
          </div>

          <div className="w-full max-w-xs">
            <label className="label">
              <span className="label-text">Due-Date</span>
            </label>
            <input
            type="date"
            placeholder="Due-date"
            className="input w-full max-w-xs"
            {...register("duedate")}
          />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            type="email"
            {...register("email", { required: true})}
            className="input w-full max-w-xs"
          />
          </div>
          
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            {...register("description", { required: true})}
          />
          </div>
          {loading ? <Loader />:<input type="submit" className='w-full max-w-xs btn bg-secondary' />}
        </form>
      </div>
    </div>
  )
}

export default CreateTask
