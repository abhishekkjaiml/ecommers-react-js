import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getAllCategories } from "../api/getAllCategories";
import { useCart } from "../context/cart-context";
import { CategoryPage } from "../components/CategoryPage";
// import { productCategories } from "../api/dummyData";

export const Categries = () => {

  const { cart } = useCart()

  

  const [categories, setCategories] = useState()
  useEffect(() => {
    (async () => {
      const data = await getAllCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <section className="absolute ml-50 ">
          <div  className="flex flex-wrap gap-3.5  ml-1">
            {
              categories?.length > 0 && categories.map(category => <CategoryPage  key={category.id} category={category} />)
            }
          </div>
        </section>
        <main>
          <Sidebar />
        </main>
      </div>
    </div>
  );
};
