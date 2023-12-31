import { useEffect, useState } from 'react';

const ModalEditTask = ({ task, index, isOpen, editModal, updateTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTaskName(task.name);
    setDescription(task.description);
  }, [task, index]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updata = { ...task, name: taskName, description: description };

    updateTask(updata, index);

    editModal();
  };

  if (isOpen) {
    return (
      <div className="fixed bg-gray-100 top-0 left-0 right-0 bottom-0 z-10">
        <div className="w-4/5 sm:w-1/2 bg-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <form className="flex flex-col p-4 bg-white">
            <label className="flex flex-col">
              Task Name
              <input
                type="text"
                className="border"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </label>
            <label className="flex flex-col">
              Description
              <textarea
                rows="5"
                className="border"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </form>
          <div className="bg-white flex gap-2 justify-center pb-4">
            <button
              className="bg-blue-400 py-1 px-2 rounded"
              onClick={handleEditSubmit}
            >
              Save
            </button>
            <button
              className="bg-red-500 py-1 px-2 rounded"
              onClick={editModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalEditTask;
