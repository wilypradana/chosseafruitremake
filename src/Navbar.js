import { openSidebar } from "./Handler.js";
export default function Navbar({ cash, Point }) {
  return (
    <>
      <div className="bg-purple-800 flex items-center justify-between">
        <h1 className="py-3 text-3xl font-bold text-white">Tebak Buah</h1>
        <span
          className="navbar-icon text-white text-4xl cursor-pointer"
          onClick={openSidebar}
        >
          <i className="bi bi-filter-right px-2 bg-purple-800 rounded-md"></i>
        </span>
      </div>
      <div className="bg-purple-800 flex items-center justify-between p-4">
        <h1 className="font-semibold text-xs text-white">Hi username</h1>
        <h1 className="font-semibold text-xs text-white">Your cash: {cash}</h1>
        <h1 className="font-semibold text-xs text-white">
          Your Point: {Point}
        </h1>
      </div>
      {/* navbar */}
      <div className="sidebar hidden fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Kalkoadev
            </h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={openSidebar}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-gift"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Reward
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-coin"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Cash</span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
        {/* akhir navbar */}
      </div>
    </>
  );
}
