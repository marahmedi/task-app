

const CreateTodo = () => {
  return (
    <div className="bg-white w-400 flex mt-10 mb-10">
        <input className="py-5 px-10 border border-gray-300 rounded-lg w-300" placeholder='Create a new todo...'></input>
        <div className='absolute flex justify-center items-center'>
          <div className="w-8 h-8 bg-white rounded-full border border-darkdgb"></div>
        </div>
    </div>
  )
}

export default CreateTodo