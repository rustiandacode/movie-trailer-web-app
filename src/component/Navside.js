import { IoIosCompass } from 'react-icons/io'
import { BsFillHeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

const Navside = () => {
  return (
    <nav className="p-10 md:w-1/5  border-r-[1px] border-hitam-card h-screen overflow-y-scroll hidden lg:block">
      <h2 className="text-white text-2xl font-bold cursor-pointer">
        ADZENI <span className="text-red-600">MOVIES</span>
      </h2>

      <div className="pt-12 pb-5 border-b-[1px] border-b-hitam-card">
        <h4 className="pb-5 ">News Feed</h4>
        <div className="flex gap-5 items-center py-3 cursor-pointer">
          <AiFillHome className=" text-red-600 text-2xl" />
          <p className="font-semibold text-md text-white">Home</p>
        </div>
        <div className="flex gap-5 items-center py-3 cursor-pointer">
          <BsFillHeartFill className=" text-xl" />
          <p className="font-semibold text-md text-white">Watchlist</p>
        </div>
        <div className="flex gap-5 items-center py-3 cursor-pointer">
          <IoIosCompass className=" text-2xl" />
          <p className="font-semibold text-md text-white">Browser</p>
        </div>
      </div>
      <div className="pt-5-5">
        <h4 className="pb-5 pt-10">Categories</h4>
        <div>
          <ul>
            <li>
              <p className="font-semibold text-md text-white mb-2">Action</p>
            </li>
            <li>
              <p className="font-semibold text-md text-white mb-2">Horror</p>
            </li>
            <li>
              <p className="font-semibold text-md text-white mb-2">Advanture</p>
            </li>
            <li>
              <p className="font-semibold text-md text-white mb-2">Animation</p>
            </li>
            <li>
              <p className="font-semibold text-md text-white mb-2">Crime</p>
            </li>
            <li>
              <p className="font-semibold text-md text-white mb-2">Cartoon</p>
            </li>
            <li>
              <p className="font-semibold text-md text-white mb-2">War</p>
            </li>
            <li>
              <p className="font-semibold text-md text-white mb-2">Fight</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navside
