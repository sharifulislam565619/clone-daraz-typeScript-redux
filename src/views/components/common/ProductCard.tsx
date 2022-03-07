import React from "react";

const ProductCard = ({ product }: { product: any[] }) => {
  return (
    <div className="p-4 border rounded-lg">
      <div className="relative pb-60">
        <img className="absolute object-cover w-full h-full" alt="" />
      </div>
      <div className="pt-3">
        <h4>{product}</h4>
        <p className="text-lg font-semibold">356 $</p>
      </div>
    </div>
  );
};

export default ProductCard;
