import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', path: '/new' },
        { name: 'Women', path: '/women' },
        { name: 'Men', path: '/men' },
        { name: 'Kids', path: '/kids' },
        { name: 'Sale', path: '/sale' },
        { name: 'Gift Cards', path: '/gift-cards' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Shipping Info', path: '/shipping' },
        { name: 'Returns', path: '/returns' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Track Order', path: '/track' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About MAMZ', path: '/about' },
        { name: 'Our Story', path: '/story' },
        { name: 'Careers', path: '/careers' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Store Locator', path: '/locator' },
        { name: 'News', path: '/news' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'Accessibility', path: '/accessibility' },
        { name: 'Student Discount', path: '/student' },
        { name: 'Affiliate Program', path: '/affiliate' },
      ]
    }
  ];

  return (
    <footer className="bg-mamz-black text-mamz-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-mamz-red mb-4">MAMZ</h3>
            <p className="text-gray-300 text-sm">
              Bold style, quality craftsmanship. Redefining streetwear fashion.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-mamz-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-300 text-sm">
            © 2024 MAMZ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-mamz-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-300 hover:text-mamz-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-300 hover:text-mamz-white transition-colors">
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
