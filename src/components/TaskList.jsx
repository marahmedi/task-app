const TaskList = () => {
  return (
    <div className="flex flex-col items-center justify-center w-100 bg-white">
      <div className="bg-white  h-53 flex items-center">
        <div className="h-20 w-20 rounded-full bg-white">
          <img src="/images/icon-check.svg" className="w-5 h-5"></img>
        </div>
        <p className="font-bold text-30 text-darkvdgb">Task to do</p>
        <img className="w-5 h-5" src="/images/icon-cross.svg"></img>
      </div>
    </div>
  );
};

export default TaskList;
