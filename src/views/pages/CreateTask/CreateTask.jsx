import React from 'react'
import { useForm } from "react-hook-form";

const CreateTask = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='h-screen flex justify-center items-center text-white'>
      <div>
        <h2>Create A New Task</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text"
            placeholder="Title"
            className="input w-full max-w-xs"
            {...register("title", { required: true, maxLength: 20 })}
          />
            <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default CreateTask
