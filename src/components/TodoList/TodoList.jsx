import { useState } from 'react';
import CreateTask from '../Modal/CreateTask';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [listTask, setListTask] = useState([]);

  const handleToggle = () => {
    setModal(!modal);
  };
  // console.log(modal);
  const saveTask = (task) => {
    setListTask([...listTask, task]);
  };

  console.log(listTask);
  return (
    <div>
      <div className="text-center w-full bg-gray-100 py-8">
        <h1 className="sm:text-4xl pb-8">TodoList</h1>
        <button
          className="bg-blue-400 py-1 px-2 rounded"
          onClick={handleToggle}
        >
          Create Task
        </button>
      </div>
      <CreateTask isOpen={modal} toggle={handleToggle} saveTask={saveTask} />
    </div>
  );
};

export default TodoList;
