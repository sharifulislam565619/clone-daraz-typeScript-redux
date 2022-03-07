import React, { useEffect, useState } from "react";
import ProductService from "services/Product.service";
import { ProductsArray } from "views/components/home/ProductArray";
import DSlider from "../../components/custom/DSlider";

const Home = () => {
  const [products, setProducts] = useState<[] | any[]>([]);

  useEffect(() => {
    ProductService.getAllProducts().then((data) => setProducts(data));
  }, []);
  return (
    <main>
      <div className="py-20">
        <DSlider></DSlider>
      </div>
      <div>
        <ProductsArray products={products} />
      </div>
    </main>
  );
};

export default Home;
