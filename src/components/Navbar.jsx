const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-700 text-white flex justify-center py-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Jobs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Add Jobs
            </a>
          </li>      
        </ul>
        
      </nav>
      <hr className="border-t border-gray-200 w-full" />

    </>
  );
};

export default Navbar;
