import logo from "../assets/DataTable-logo.png"; 

const Sidebar = () => {
  return (
    <aside className="bg-gray-600 text-white h-screen w-60 p-4">
      
      <div className="flex items-center justify-center mb-4">
        <img src={logo} alt="Logo" className="h-29 w-auto" />
      </div>
      <ul className="mt-4">
        <li className="py-2 ml-4 font-semibold">Details</li>
      </ul>
    </aside>
  );
};

export default Sidebar;