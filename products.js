export const products = [
  { id: 1, name: 'Old Skool Classic', price: 65, discount: 0, emoji: '👟', category: 'men', badge: 'NEW', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Iconic skate shoe with timeless style', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 2, name: 'Sk8-Hi Platform', price: 80, discount: 20, emoji: '👟', category: 'women', badge: 'BEST SELLER', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Elevated high-top platform sneaker', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 3, name: 'Authentic Pro', price: 70, discount: 0, emoji: '👟', category: 'new', badge: 'LIMITED', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', description: 'Pro performance for serious skaters', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 4, name: 'Era Classic', price: 55, discount: 30, emoji: '👟', category: 'sale', badge: 'SALE', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Timeless low-top design', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 5, name: 'Slip-On Pro', price: 60, discount: 0, emoji: '👟', category: 'women', badge: 'NEW', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', description: 'Easy-on laceless convenience', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 6, name: 'Kyle Walker Pro', price: 85, discount: 15, emoji: '👟', category: 'men', badge: 'PRO', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', description: 'Signature pro model', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 7, name: 'Kids Classic', price: 45, discount: 0, emoji: '👟', category: 'kids', badge: 'NEW', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', description: 'Perfect for young skaters', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 8, name: 'UltraRange', price: 90, discount: 10, emoji: '👟', category: 'new', badge: 'NEW', gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)', description: 'Maximum comfort technology', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 9, name: 'ComfyCush Era', price: 75, discount: 0, emoji: '👟', category: 'new', badge: 'COMFORT', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', description: 'Cloud-like cushioning', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 10, name: 'BMX Sk8-Mid', price: 72, discount: 25, emoji: '👟', category: 'men', badge: 'SPORT', gradient: 'linear-gradient(135deg, #f77062 0%, #fe5196 100%)', description: 'Built for BMX riders', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 11, name: 'Style 36', price: 68, discount: 0, emoji: '👟', category: 'women', badge: 'TRENDY', gradient: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)', description: 'Modern retro styling', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 12, name: 'Half Cab Pro', price: 78, discount: 0, emoji: '👟', category: 'men', badge: 'CLASSIC', gradient: 'linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)', description: 'Legendary mid-top', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 13, name: 'Checkerboard Slip', price: 62, discount: 30, emoji: '👟', category: 'sale', badge: '30% OFF', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Iconic checkerboard pattern', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 14, name: 'Animal Print Pack', price: 82, discount: 20, emoji: '👟', category: 'women', badge: 'LIMITED', gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'Wild fashion statement', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 15, name: 'Rainbow Era', price: 58, discount: 0, emoji: '👟', category: 'kids', badge: 'COLORFUL', gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)', description: 'Vibrant colors for kids', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
  { id: 16, name: 'Leather Sk8-Hi', price: 95, discount: 15, emoji: '👟', category: 'men', badge: 'PREMIUM', gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', description: 'Premium leather construction', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' }
];

export const discountedPrice = (price, discount) => {
  return price - (price * (discount / 100));
};

export const infoPages = {
  contact: {
    title: '📞 Contact Us',
    content: `<h3>Get In Touch</h3><p>Customer Service: 1-800-MAMZ-SHOP</p><p>Email: support@mamz.com</p><p>Live Chat: Available 24/7</p>`
  },
  shipping: {
    title: '🚚 Shipping',
    content: `<h3>Shipping Options</h3><p>Standard: 5-7 days - $10</p><p>Express: 2-3 days - $20</p><p>FREE shipping on orders $50+</p>`
  },
  returns: {
    title: '↩️ Returns',
    content: `<h3>Easy Returns</h3><p>30-day return policy</p><p>Free return shipping</p><p>Full refund guaranteed</p>`
  },
  faq: {
    title: '❓ FAQ',
    content: `<h3>Common Questions</h3><p><strong>How do I track my order?</strong><br>Check your email for tracking info</p><p><strong>What's your return policy?</strong><br>30 days, no questions asked</p>`
  },
  story: {
    title: '📖 Our Story',
    content: `<h3>Off The Wall Since 1966</h3><p>Founded in Southern California, MAMZ has been a pioneer in skateboarding culture and street fashion for over 50 years.</p>`
  },
  careers: {
    title: '💼 Careers',
    content: `<h3>Join Our Team</h3><p>We're always looking for passionate people. Email careers@mamz.com</p>`
  },
  sustainability: {
    title: '🌱 Sustainability',
    content: `<h3>Our Commitment</h3><p>Carbon neutral by 2030</p><p>Sustainable materials</p><p>Recycling program</p>`
  },
  locator: {
    title: '📍 Store Locator',
    content: `<h3>Find a Store</h3><p>Los Angeles, New York, Miami, Chicago, San Francisco</p><p>Visit mamz.com/stores for full list</p>`
  },
  giftcards: {
    title: '🎁 Gift Cards',
    content: `<h3>Perfect Gift</h3><p>Available: $25, $50, $100, $250</p><p>No expiration date</p>`
  },
  student: {
    title: '🎓 Student Discount',
    content: `<h3>15% Off for Students</h3><p>Verify with .edu email</p><p>Valid student ID required</p>`
  }
};
