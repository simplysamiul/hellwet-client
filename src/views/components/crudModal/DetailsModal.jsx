import React from 'react'

const DetailsModal = ({ selectedTask }) => {
  const { title, description } = selectedTask;
  return (
    <div>
        <input type="checkbox" id="task-details" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative bg-primary">
            <label htmlFor="task-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold text-center">{title}</h3>
          <p className="py-4"><span className='text-lg font-semibold mr-2'>Description :</span> {description}</p>
        </div>
        </div>
    </div>
  )
}

export default DetailsModal
