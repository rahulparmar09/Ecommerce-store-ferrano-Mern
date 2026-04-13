import React, { useEffect, useState, useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const DiscountSection = () => {
  const { backendUrl } = useContext(ShopContext);

  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Women",
      products: "0 products",
      image:
        "https://shopirra-ttm.myshopify.com/cdn/shop/files/01_420x.png?v=1736503610",
      offer: "UP TO 50% OFF",
    },
    {
      id: 2,
      title: "Men",
      products: "0 products",
      image:
        "https://shopirra-ttm.myshopify.com/cdn/shop/files/02_420x.jpg?v=1740215399",
      offer: "Flash Sale",
    },
    {
      id: 3,
      title: "Kids",
      products: "0 products",
      image:
        "https://plus.unsplash.com/premium_photo-1697612943857-070975a13692?q=80&w=687&auto=format&fit=crop",
      offer: "Get 50% off",
    },
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/product/list`);

        if (data.success) {
          const women = data.products.filter(p => p.category === "Women").length;
          const men = data.products.filter(p => p.category === "Men").length;
          const kids = data.products.filter(p => p.category === "Kids").length;

          setCategories(prev =>
            prev.map(cat => {
              if (cat.title === "Women") return { ...cat, products: `${women} products` };
              if (cat.title === "Men") return { ...cat, products: `${men} products` };
              if (cat.title === "Kids") return { ...cat, products: `${kids} products` };
              return cat;
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [backendUrl]);

  return (
    <div className="py-5 px-4 sm:px-10">

      <div className="text-center py-8 text-3xl">
        <Title text1={"NEW"} text2={"DISCOUNT OFFER"} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1300px] mx-auto">

        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col">

            <Link to={`/collection/${cat.title}`}>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-3xl">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            <div className="bg-white mt-4 rounded-2xl p-5 text-center">
              <p className="text-xs text-gray-400">{cat.offer}</p>
              <h2 className="text-lg font-semibold text-gray-900 mt-1">
                {cat.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {cat.products}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default DiscountSection;