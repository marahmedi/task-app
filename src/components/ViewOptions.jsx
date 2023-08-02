

const ViewOptionsMobile = () => {
  return (
    <div className="mt-auto">
    <div>
      <div>no. of items left</div>
      <button>Clear completed</button>
    </div>
    <div>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    </div>
  )
};


const ViewOptionsDesktop = () => {
  return (
    <div className="mt-auto">
      <div>no. items left</div>
      <button>All</button>
      <button>Active</button>
      <button>completed</button>
      <button>clear completed</button>
    </div>
  );
};

const ViewOptions = () => {
  return <ViewOptionsMobile />;
};

export default ViewOptions;
