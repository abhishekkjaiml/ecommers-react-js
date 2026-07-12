import { useNavigate } from "react-router-dom";
import { CartPage } from "../components/CartPage";
import { Navbar } from "../components/Navbar";
import { PriceDetails } from "../components/PriceDetails";
import { useCart } from "../context/cart-context";

export const Cart = () => {

    const navigate = useNavigate()
    const { cart } = useCart()
  return (
    <div>
      <Navbar />
      <main className="">
        <div    className="flex flex-wrap   justify-center bg-zinc-100">
            <div>
                {
                cart?.length > 0 ? cart.map((product) => <CartPage key={product.id} product={product} />) : <div className="flex flex-col justify-center mt-5">
            <h2 className="flex justify-center">Cart is empty</h2>
            <h2 onClick={() => navigate('/shop')} className="flex justify-center mt-2 underline hover: cursor-pointer hover:text-blue-800">Click here to add more cart</h2>
        </div>
            }
            </div>
            {
                cart?.length > 0 && <PriceDetails /> 
            } 
        </div>
        
      </main>
    </div>
  );
};
