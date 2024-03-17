import React from 'react';

function ProjectForm({ handleSubmit, heading, value, setValue, setShowModal, confirmButtonText }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className='ProjectForm'>
        <h3>{heading}</h3>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='project name...'
          autoFocus
        />
        <button className='cancel' type='button' onClick={() => setShowModal(false)}>
          Cancel
        </button>
        <button className='confirm' type='submit'>
          {confirmButtonText}
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
