const Navbar = () => {
  return (
    <div className="navbar bg-neutral shadow-sm flex justify-between items-center fixed w-full z-10">
      <div className="ml-5">
        <span className="text-3xl text-base-300">Portfolio</span>
      </div>
      <div className="flex justify-center items-center space-x-5 me-5">
        <a
          href="#home"
          className="text-sm text-base-300 cursor-pointer hover:text-white"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-sm text-base-300 cursor-pointer hover:text-white"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="text-sm text-base-300 cursor-pointer hover:text-white"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
