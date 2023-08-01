const TaskList = () => {
  return (
    <div className=" absolute top-0 left-0">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-330 h-53 flex items-center">
          <div className="h-20 w-20 rounded-full bg-white">
            <img
              src="../public/images/icon-check.svg"
              className="w-5 h-5"
            ></img>
          </div>
          <p className="font-bold text-30 text-darkvdgb">Task to do</p>
          <img className="w-5 h-5" src="../public/images/icon-cross.svg"></img>
        </div>
        <div className="bg-white w-330 h-53 flex items-center">
          <div className="h-20 w-20 rounded-full bg-white">
            <img
              src="../public/images/icon-check.svg"
              className="w-5 h-5"
            ></img>
          </div>
          <p>Task to do</p>
          <img className="w-5 h-5" src="../public/images/icon-cross.svg"></img>
        </div>
        <div className="bg-white w-330 h-53 flex items-center">
          <div className="h-20 w-20 rounded-full bg-white">
            <img
              src="../public/images/icon-check.svg"
              className="w-5 h-5"
            ></img>
          </div>
          <p>Task to do</p>
          <img className="w-5 h-5" src="../public/images/icon-cross.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
