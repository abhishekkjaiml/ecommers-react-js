import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { WishlistPage } from "../components/WishlistPage";
import { useWishlist } from "../context/wishlist-context";

export const Wishlist = () => {

  const navigate = useNavigate()
  const { wishlist } = useWishlist();

  return (
    <div>
      <Navbar />
      <div  className="bg-zinc-100">
        {
        wishlist?.length === 0 ? <div className="flex flex-col justify-center mt-5">
            <h2 className="flex justify-center">Wishlist is empty</h2>
            <h2 onClick={() => navigate('/shop')} className="flex justify-center mt-2 underline hover: cursor-pointer hover:text-blue-800">Click here to add more wishlist</h2>
        </div>: <main className="flex justify-center">
        <div  className="border-2 border-zinc-400 w-[80%] flex justify-center m-5 p-5 rounded-md">
          <div>
          {
            wishlist?.length > 0 && wishlist.map((product) => <WishlistPage key={product.id} product={product}/>)
          }
        </div>
        </div>
      </main>
      }
      </div>
    </div>
  );
};
