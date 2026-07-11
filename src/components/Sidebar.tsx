import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { getAllCategories } from "../api/getAllCategories";
import { useEffect } from "react";
import { useState } from "react";
import { brands } from "../api/dummyData";

export const Sidebar = () => {
  
  const valuetext = (value: number) => {
    return `${value}°C`;
  };

  const [productBrand, setProductBrand] = useState(brands)

  const [categories, setCategories] = useState()
    useEffect(() => {
      (async () => {
        const data = await getAllCategories();
        setCategories(data);
      })();
    }, []);

  return (
    <aside className="flex flex-col gap-3 border-r-2 border-neutral-100 w-50 h-fit p-3 absolute">
      <div>
        <h2 className="text-[15px] font-bold">Filter</h2>
        <div className="mt-5 pb-3 border-b">
          <h2 className="text-[15px] font-bold">Price</h2>
          <Box sx={{ width: 165 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              shiftStep={30}
              step={10}
              marks
              min={10}
              max={110}
            />
            {/* <Slider
              defaultValue={30}
              step={10}
              marks
              min={10}
              max={110}
              disabled
            /> */}
          </Box>
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="min Rs. 499"
              min="499"
              max="4999"
              className="w-20 text-[12px] border rounded"
            />

            <input
              type="number"
              placeholder="max Rs. 4999"
              min="499"
              max="4999"
              className="w-20 text-[12px] border rounded"
            />
          </div>
        </div>

        <div className="mt-5 pb-3 border-b">
          <h2 className="text-[15px] font-bold">Brand</h2>
          <input
            type="text"
            placeholder="Search brand"
            className="border-b outline-none mt-2 w-43.5"
          />
          <div  className="mt-2">
            {
              productBrand?.length > 0 && productBrand.map((brands) => <p className="hover:cursor-pointer flex mt-2">{brands.name}</p>)
            }
          </div>
        </div>

        <div className="mt-5 pb-3 border-b">
          <h2 className="text-[15px] font-bold">Categories</h2>
          <div  className="text-[15px] mt-2 ">
            {
              categories?.length > 0 && categories.map(category => <p className="hover:cursor-pointer flex mt-2">{category.name}</p>)
            }
          </div>
        </div>
      </div>
    </aside>
  );
};
