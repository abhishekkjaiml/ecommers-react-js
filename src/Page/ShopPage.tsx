import { getAllProducts } from "../api/getAllProducts";
import { Navbar } from "../components/Navbar";
import { NavbarLink } from "../components/NavbarLink";
import { use, useEffect, useState } from "react";
import { ShopPageCard } from "../components/PageCards/ShopPageCard";

export const ShopPage = () => {

  const [peoducts, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProducts(data)
    })()
  }, [])
  return (
    <div>
      <Navbar />
      <main>
        <NavbarLink />
      </main>
      <div  className="flex flex-wrap mt-10">
        {
          peoducts?.length > 0 && peoducts.map((product) => <ShopPageCard key={product.id} images={product.images} title={product.title} catogaries={product.catogaries} price={product.price}/>)
        }
      </div>
    </div>
  );
};
