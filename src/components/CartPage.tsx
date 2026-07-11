import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { useCart } from "../context/cart-context";

export const CartPage = ({ product }) => {
  const { cartDispatch } = useCart();

  const actualPrice = (product.price * 95.23).toFixed(0);

  const onAddToCartBtnClick = (product) => {
    cartDispatch({
        type: 'REMOVE_FROM_CART',
        payload: {
            id: product.id
        }
    })
  }

  return (
    <div className="flex justify-center m-5">
      <div className="border flex   w-160 p-2 rounded-md">
        <img 
            src={product.images} 
            alt="product" 
            className="w-40 h-40 rounded " />
        <div    className="ml-5">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">{product.title}</h4>
            <h4 className="font-bold">Rs. {actualPrice}</h4>
          </div>
          <div  className="mt-14 flex gap-4">
            <button onClick={() => onAddToCartBtnClick(product)} className=" h-10 w-50 border text-[15px] justify-center rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 text-indigo-50 border-indigo-50">
              <RemoveShoppingCartOutlinedIcon />
              Remove To Cart
            </button>
            <button className=" h-10 w-50 border text-[15px] justify-center rounded-md cursor-pointer text-indigo-50    bg-zinc-800  hover:bg-zinc-700 border-indigo-50">
              <BoltOutlinedIcon />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
