import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Link
      to={`/product/${id}`}
      onClick={handleClick}
      className="group block bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-75 overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {image[1] && (
          <img
            src={image[1]}
            alt={`${name} alternate`}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-sm font-medium text-gray-700 line-clamp-2 group-hover:text-black transition">
          {name}
        </h3>

        <p className="text-base font-semibold text-gray-900">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;