import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="flex flex-wrap h-17 bg-neutral-50">
        <div
          className="text-3xl font-bold   ml-5 mt-3 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h2>
            SH<span className="text-blue-600">Bazaar</span>
          </h2>
        </div>
        <nav className="ml-auto  gap-8 flex  mr-5">
          <div className="mr-40 mt-3">
            <input
              className="outline-none w-120 p-2 border rounded-tl-md rounded-bl-md"
              placeholder="search product"
            />
            <span className="w-5 bg-blue-600 hover:bg-sky-500 p-2.5 rounded-br rounded-tr text-white hover:cursor-pointer">
              <SearchOutlinedIcon />
            </span>
          </div>
          <span
            className="text-5xl hover:cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/wishlist")}
          >
            <FavoriteBorderOutlinedIcon />
          </span>
          <span
            className="text-5xl hover:cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/myCart")}
          >
            <ShoppingCartOutlinedIcon />
          </span>
          <span
            className="text-5xl hover:cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/auth")}
          >
            <PermIdentityOutlinedIcon />
          </span>
        </nav>
      </header>
      <header className="flex flex-wrap h-12 bg-neutral-50 justify-center gap-5 font-bold">
        <h2
          className="mt-3 hover:cursor-pointer hover:text-blue-600"
          onClick={() => navigate("/")}
        >
          HOME
        </h2>
        <h2
          className="mt-3 hover:cursor-pointer hover:text-blue-600"
          onClick={() => navigate("/shop")}
        >
          SHOP
        </h2>
        <h2
          className="mt-3 hover:cursor-pointer hover:text-blue-600"
          onClick={() => navigate("/catogary")}
        >
          CATEGORIES
        </h2>
        <h2
          className="mt-3 hover:cursor-pointer hover:text-blue-600"
          onClick={() => navigate("/deals")}
        >
          DEALS
        </h2>
        <h2
          className="mt-3 hover:cursor-pointer hover:text-blue-600"
          onClick={() => navigate("/contact")}
        >
          CONTACT{" "}
        </h2>
      </header>
    </div>
  );
};
