import { CartPage } from "../components/CartPage";
import { Navbar } from "../components/Navbar";
import { PriceDetails } from "../components/PriceDetails";
import { useCart } from "../context/cart-context";

export const Cart = () => {

    const { cart } = useCart()
  return (
    <div>
      <Navbar />
      <main className="">
        <div    className="flex flex-wrap   justify-center bg-zinc-100">
            <div>
                {
                cart?.length > 0 ? cart.map((product) => <CartPage key={product.id} product={product} />) : <div>
                    <p  className="text-[20px] m-5">Cart is empty</p>
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
