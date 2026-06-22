import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';

export const ShopPageCard = (product) => {
  return (
    <div className="border w-60 h-110 p-4 m-auto mt-5 rounded-md">
      <div>
        <img src={product.images} alt="Product Image" className="w-60 h-60 rounded-sm" />
      </div>
      <div>
        <p>{product.title}</p>
      </div>
      <div>
        <p>{product.catogaries}</p>
      </div>
      <div>
        <p>Rs. {product.price}</p>
      </div>
      <div>
        <div>
          <button className="bg-indigo-700 text-amber-50 border  w-50 p-1 mt-2 rounded-sm font-bold">
            <ShoppingCartOutlinedIcon />
            Add to Cart
          </button>
        </div>
        <div>
          <button className="bg-indigo-700 text-amber-50 border  w-50 p-1 mt-2 rounded-sm font-bold">
            <FlashOnOutlinedIcon />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
