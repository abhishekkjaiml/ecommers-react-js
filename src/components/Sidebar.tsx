import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export const Sidebar = () => {
  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <aside className="flex flex-col gap-3 border-r-2 border-neutral-100 w-50 h-screen p-3">
      <div>
        <h2 className="text-[15px] font-bold">Filter</h2>
        <div className="mt-5 pb-3 border-b">
          <h2   className="text-[15px] font-bold">Price</h2>
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
          <div  className="flex gap-3">
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

        <div    className="mt-5 pb-3 border-b">
            <h2 className="text-[15px] font-bold">Brand</h2>
            <input 
                type="text"
                placeholder="Search brand" 
                className="border-b outline-none mt-2 w-43.5"
                />
        </div>

        <div    className="mt-5 pb-3 border-b">
            <h2 className="text-[15px] font-bold">Categories</h2>
            {/* <input 
                type="text"
                placeholder="Search brand" 
                className="border-b outline-none mt-2"
                /> */}
        </div>
      </div>
    </aside>
  );
};
