import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { getTotalCartAmmount } from "../utils/getTotalCartAmmount";

export const PriceDetails = () => {

  const navigate = useNavigate()
  const { cart } = useCart();
  const totalCartAmmount = getTotalCartAmmount(cart);
  const actualPrice = (totalCartAmmount * 95.23).toFixed(2);
  const deliveryCharge = 49;


  return (
    <div>
      <div className="w-86 bg-slate-50 p-4 border rounded ml-10 m-5  h-72.5">
        <p className="text-2xl border-b p-2 font-bold">Price Details</p>
        <div className="flex flex-col gap-5 border-b p-2">
          <div className="flex">
            <p>Price ({cart.length}) items</p>
            <p className="ml-auto">Rs. {actualPrice}</p>
          </div>
          <div className="flex">
            <p>Delivery Charge</p>
            <p className="ml-auto">Rs. {deliveryCharge}</p>
          </div>
        </div>
        <div className="flex border-b p-2">
          <p>Total Ammount</p>
          <p className="ml-auto">Rs. {Number(actualPrice) + Number(deliveryCharge)}</p>
        </div>
        <div>
          <button onClick={() => navigate("/place_Order")} className="mt-5 h-10 w-full border text-[15px] justify-center rounded-md cursor-pointer text-indigo-50    bg-zinc-800 border-indigo-50 hover:bg-zinc-700">
              PLACE ORDER
            </button>
        </div>
      </div>
    </div>
  );
};
