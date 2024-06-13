// npm i react-headroom

// import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <ul className="menu menu-horizontal px-1 lg:flex gap-1 space-x-2 hidden">
        <NavLink
          to={"/"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white px-6 py-3 rounded-full text-[16px] font-bold"
              : isActive
              ? "px-5 py-3 bg-[#F63E7B] text-[#fff] rounded-full text-[16px] font-bold border-none"
              : "px-5 py-3 rounded-full hover:bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[16px] font-bold"
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/aboutMe"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white px-5 py-3 rounded-full text-[16px] font-bold"
              : isActive
              ? "px-5 py-3 bg-[#F63E7B] text-[#fff] rounded-full text-[16px] font-bold border-none"
              : "px-5 py-3 rounded-full hover:bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[16px] font-bold"
          }
        >
          About Me
        </NavLink>

        <NavLink
          to={"/contact"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white px-5 py-3 rounded-full text-[16px] font-bold"
              : isActive
              ? "px-5 py-3 bg-[#F63E7B] text-[#fff525] rounded-full text-[16px] font-bold border-none"
              : "px-5 py-3 rounded-full hover:bg-[#617b73c1] border-none hover:bg-[#2d3434] text-white text-[16px] font-bold"
          }
        >
          Contact
        </NavLink>
      </ul>
    </>
  );

  const navLinkMd = (
    <>
      <ul className="menu flex flex-col gap-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white">
        <NavLink
          to={"/"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold"
              : isActive
              ? "btn bg-[#F63E7B] text-white text-[14px] font-semibold border-none"
              : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/availableFoods"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold"
              : isActive
              ? "btn bg-[#F63E7B] text-white text-[14px] font-semibold border-none"
              : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"
          }
        >
          Available Foods
        </NavLink>

        <NavLink
          to={"/addFood"}
          className={({ isPending, isActive }) =>
            isPending
              ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold"
              : isActive
              ? "btn bg-[#F63E7B] text-white text-[14px] font-semibold border-none"
              : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"
          }
        >
          Add Food
        </NavLink>
      </ul>
    </>
  );

  return (
    <div className="bg-[#FFF8F5] pt-10">
      {/* <Headroom className="top-0 right-0 left-0">  */}
      {/**absolute  */}
      <div className="max-w-screen-2xl px-8 mx-auto">
        <div className="navbar flex justify-between px-6 lg:px-0">
          <div className="lg:navbar-start lg:w-auto w-3/2">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="dropdown">
                  <label tabIndex={0} className="btn-ghost bg-white lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="22"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </label>
                  {navLinkMd}
                </div>
              </div>
              <div className="pl-16 lg:pl-0">
                
              </div>
            </div>
          </div>
          <div>{navLink}</div>
        </div>
      </div>
      {/* </Headroom> */}
    </div>
  );
};

export default Navbar;
