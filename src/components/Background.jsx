// eslint-disable-next-line react/prop-types
const Background = ({children}) => {
  return (
    <div className="bg-vlg w-screen h-screen">
      
        <div className="bg-gray bg-mobile-light bg-no-repeat bg-cover md:bg-desktop-light h-72">
        <div className="flex flex-col px-10 md:px-85 h-screen">
          {children}
          </div>
        </div>
      
    </div>
  );
};

export default Background;
