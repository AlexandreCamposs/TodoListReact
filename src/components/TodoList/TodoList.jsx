import { useEffect, useState } from 'react';
import CreateTask from '../ModalCreateTask/ModalCreateTask';
import ModalTask from '../ModalTask';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [listTask, setListTask] = useState([]);

  const handleToggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let data = localStorage.getItem('taskList');

    if (data) {
      let res = JSON.parse(data);

      setListTask(res);
    }
  }, []);

  const saveTask = (task) => {
    const saveTask = [...listTask, task];

    localStorage.setItem('taskList', JSON.stringify(saveTask));
    setListTask(saveTask);

    setModal(false);
  };

  const deleteTask = (index) => {
    listTask.splice(index, 1);

    localStorage.setItem('taskList', JSON.stringify(listTask));
    setListTask([...listTask]);
  };

  const updateTask = (task, index) => {
    const updateTask = [...listTask];

    console.log(updateTask);
    updateTask[index] = task;
    console.log(updateTask);

    localStorage.setItem('taskList', JSON.stringify(updateTask));

    setListTask(updateTask);
  };

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
      <div className="flex gap-4 flex-wrap justify-center mt-4">
        {listTask.map((task, index) => (
          <ModalTask
            task={task}
            key={index}
            index={index}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
