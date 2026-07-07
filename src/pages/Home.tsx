import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div    className="   bg-purple-500">
        <span className="flex flex-col absolute w-120  p-5 mt-20   text-neutral-100">
            <h3 className=" font-bold mt-5">NEW COLLECTION</h3>
            <h1 className="text-5xl font-bold mt-5  text-sky-200">SHOP THE LATEST 
                <span   className="text-neutral-100"> TRENDS</span>
            </h1>
            <p  className="mt-5">Discover trending products at best price</p>
          </span>
          <img
            src="https://images.unsplash.com/photo-1674027392887-751d6396b710?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product"
            className="h-110 rounded-tl-full ml-auto"
          />
          
        </div>

        <section className="h-100 bg-neutral-400">
            <div    className="m-5 flex flex-wrap">
                <h3 className="font-bold text-[18px]">Papular Categories</h3>
                <h3 className="font-bold text-[18px] flex ml-auto text-blue-600">See All</h3>
            </div>
        </section>
      </main>
    </div>
  );
};
