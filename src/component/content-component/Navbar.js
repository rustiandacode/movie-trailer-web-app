import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto md:px-10 flex items-center justify-between gap-10">
        <div className=" lg:hidden mt-2 cursor-pointer">
          <div className="bg-slate-400 h-1 rounded-lg w-8 mb-[8px]"></div>
          <div className="bg-slate-400 h-1 rounded-lg w-8 mb-[8px]"></div>
          <div className="bg-slate-400 h-1 rounded-lg w-8 mb-[8px]"></div>
        </div>
        <h2 className="text-white text-2xl text-center font-bold cursor-pointer block md:hidden">
          ADZENI <span className="text-red-600">MOVIES</span>
        </h2>
        <div className="lg:ml-32 md:flex hidden gap-2 md:px-5 px-0 p-1 justify-center items-center lg:w-1/2 w-full shadow rounded-lg">
          <FaSearch className="text-2xl" />
          <input
            className="mx-2 py-2 text-md w-full px-3 bg-transparent outline-none hidden md:block"
            type="text"
            placeholder="search any movies..."
          />
        </div>
        <div className="hidden md:flex gap-5">
          <button className="font-semibold text-md text-white">Movie</button>
          <button className="font-semibold text-md">TV Show</button>
        </div>
        <FaSearch className="text-3xl md:hidden cursor-pointer" />
      </div>
    </>
  )
}

export default Navbar
