import { motion } from "framer-motion";
import { discountedPrice } from "../data/products";
import DiscountTag from "./DiscountTag";

const ProductCard = ({ product = {}, onAddToCart = () => {} }) => {
  const safePrice = Number(product.price) || 0;
  const safeDiscount = Number(product.discount) || 0;
  const finalPrice = discountedPrice ? discountedPrice(safePrice, safeDiscount) : safePrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-mamz-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/assets/placeholder.jpg"}
          alt={product.name || "Product"}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => (e.target.src = "/assets/placeholder.jpg")}
        />

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        {product.discount ? <DiscountTag discount={safeDiscount} /> : null}

        {product.badge && (
          <div className="absolute top-2 left-2 bg-mamz-red text-white px-3 py-1 rounded-full text-xs font-bold">
            {product.badge}
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-mamz-red text-white px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add to Cart
        </motion.button>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-mamz-black dark:text-mamz-white mb-2">
          {product.name || "Unnamed Product"}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {product.description || "No description available."}
        </p>

        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-mamz-red">
            ${finalPrice.toFixed(2)}
          </span>

          {safeDiscount > 0 && (
            <span className="text-lg text-gray-500 line-through">
              ${safePrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
