import { CiEdit, CiTrash } from 'react-icons/ci';

const ModalTask = ({ task }) => {
  return (
    <div className="overflow-auto w-full max-w-[250px] max-h-[150px] min-h-[150px] relative border-t-green-600 border-solid border-2">
      <div className="  mt-4 mx-2 h-auto w-auto break-all  ">
        <div className="flex absolute right-2 gap-2">
          <div className=" cursor-pointer">
            <CiEdit />
          </div>
          <div className=" cursor-pointer">
            <CiTrash />
          </div>
        </div>
        <h3 className="mb-2 bg-gray-100 inline-block px-2 rounded">
          {task.name}
        </h3>
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default ModalTask;
