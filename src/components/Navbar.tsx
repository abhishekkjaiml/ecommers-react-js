import "../styles/utils.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();

  return (
    <header className="flex flex-wrap w-auto h-20 border-bs-indigo-50 bg-indigo-50">
      <h2 onClick={() => navigate('/')} className="text-3xl font-bold mt-4 ml-4 hover:cursor-pointer">
        Dummy<span className="text-indigo-600">Store</span>
      </h2>
      <nav className="flex ml-auto">
        <ul className="flex flex-wrap items-center  text-[20px] gap-10 mr-5">
          <li   className="mr-20">
            <div    className="border   rounded-sm">
              <input    className="border outline-none   rounded-tl-sm rounded-bl-sm w-125 h-10 text-[18px] p-5" placeholder="Enter Value" />
              <span className="bg-blue-700 p-2 rounded-r-sm outline-none">
                <SearchOutlinedIcon className="ml-7 mr-7 text-indigo-50"  />
              </span>
            </div>
          </li>
          <li   onClick={() => navigate('/auth')} className="">
            <AccountCircleOutlinedIcon />
            Account
          </li>
          <li   onClick={() => navigate('/cart')}   className="">
            <ShoppingCartOutlinedIcon />
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};
