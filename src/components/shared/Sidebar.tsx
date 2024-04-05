import { RiHome6Fill } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="bg-tamarillo-700 fixed left-0 top-0 w-28 h-full">
      <h1 className="text-2xl text-[var(--color-text-primary-invert)] uppercase font-bold text-center my-5">
        Logo
      </h1>
      <ul className="bg-slate-400 p-4 text-center">
        <li className="bg-white p-4 rounded-xl">
          <a href="#" className="bg-yellow-300 p-4 block rounded-xl text-center">
            <RiHome6Fill className="text-2xl"/>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
