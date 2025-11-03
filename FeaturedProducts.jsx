import { motion } from "framer-motion";
import ProductCard from "./ProductCard"; // pastikan ada ini juga!

const FeaturedProducts = ({ products, onAddToCart }) => {
  if (!products || !Array.isArray(products)) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
        <h2 className="text-xl text-gray-500 dark:text-gray-400">
          Loading featured products...
        </h2>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mamz-black dark:text-mamz-white mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover our most popular items
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; // ✅ tambahkan ini
