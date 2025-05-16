import pro_1 from "./images/pro-1.jpg";
import pro_2 from "./images/pro-2.jpg";
import pro_3 from "./images/pro-3.jpg";
import pro_4 from "./images/pro-4.jpg";
import pro_5 from "./images/pro-5.jpg";
import pro_6 from "./images/pro-6.jpg";
import pro_7 from "./images/pro-7.jpg";
import pro_8 from "./images/pro-8.jpg";
import pro_9 from "./images/pro-9.jpg";
import pro_10 from "./images/pro-10.jpg";
let navItem = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "About",
    path: "/about",
  },
];

let registerField = [
  {
    type: "text",
    placeholder: "Name",
    name: "name",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
  },
  {
    type: "password",
    placeholder: "Confirm Password",
    name: "confirmPassword",
  },
];
let loginField = [
  {
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
  },
];
let allProducts = [
  {
    id: "Vibrant_Red_Nike_Free_Flyknit_Performance",
    style: "Flyknit Upper",
    title: "Vibrant Red Nike Free Flyknit Performance",
    decription:
      "Experience the ultimate in natural movement and lightweight performance with this striking red Nike Free Flyknit running shoe. Engineered for athletes who demand flexibility and breathability, the Flyknit upper molds to your foot like a second skin, providing exceptional support without added bulk. The iconic white Nike Swoosh leaps from the vibrant red canvas, a symbol of quality and athletic prowess. Beneath, the innovative Nike Free sole is designed to flex and expand with your foot's natural motion, delivering a barefoot-like feel while still offering crucial cushioning and impact absorption. Whether you're logging serious miles, hitting the track for speed work, or simply seeking unparalleled comfort for your daily runs, these shoes are built to elevate your experience. The subtle 'Free Nike' branding on the sole signifies its commitment to natural performance. This isn't just a shoe; it's a fusion of cutting-edge technology and bold aesthetics, ready to empower your every step.",
    price: "$145",
    image: pro_1,
  },
  {
    id: "Pristine_White_Nike_Air_Force_1_High",
    style: "Elevated Style",
    title: "Pristine White Nike Air Force 1 High",
    decription:
      "Step into timeless style with these immaculate white Nike Air Force 1 High sneakers. A true icon of streetwear and basketball heritage, the AF1 High commands attention with its classic silhouette and premium details. The crisp white leather upper exudes a clean and sophisticated aesthetic, making it a versatile choice for any occasion. The iconic Swoosh is subtly textured, adding a touch of understated elegance.The high-top design provides ankle support and a bold, retro-inspired look. Notice the adjustable ankle strap, a hallmark of the AF1 High, allowing for a customized fit and added flair. Perforations on the toe box enhance breathability, while the durable rubber outsole ensures long-lasting wear and traction. The luxurious tan lining adds a touch of unexpected refinement. More than just a shoe, the Air Force 1 High is a statement piece, a symbol of enduring style and urban culture.",
    price: "$130",
    image: pro_2,
  },
  {
    id: "Carhartt_WIP_x_Nike_Air_Force_1_Low",
    style: "Rugged Style",
    title: "Carhartt WIP x Nike Air Force 1 Low",
    decription:
      "The Carhartt WIP x Nike Air Force 1 Low. The shoe features a durable canvas upper in a rich brown hue, reminiscent of Carhartt's workwear heritage. The iconic Nike Swoosh blends seamlessly with the design, while the white midsole provides a clean contrast. A Carhartt WIP logo is subtly placed on the tongue, signifying the collaboration. The black heel panel adds a touch of sophistication, and the tan laces complement the overall earthy tones. This sneaker is a fusion of streetwear cool and workwear practicality, perfect for those who appreciate both style and durability.",
    price: "$150 - $170",
    extra: "(collaborations often command a slightly higher price point)",
    image: pro_3,
  },
  {
    id: "Nike_Air_Force_1_Shadow",
    style: "Dreamy Pastels",
    title: "Nike Air Force 1 Shadow",
    design: "Step into Spring Style",
    decription:
      "Embrace a fresh and playful vibe with these captivating Nike Air Force 1 Shadow sneakers. This isn't just the iconic AF1; it's a modern reimagining with a delightful pastel palette of soft pink, dreamy lavender, sunny yellow, and serene blue. The deconstructed design features multiple layers – from the doubled Swooshes and eyestays to the stacked heel – creating a unique and eye-catching visual depth. Crafted with premium leather and synthetic overlays, these shoes offer both durability and a stylish texture. The classic Air cushioning in the sole ensures all-day comfort, while the subtle branding details maintain the heritage of the Air Force 1. Perfect for adding a touch of whimsical charm to any outfit, these sneakers are a must-have for those who dare to be different and appreciate a contemporary twist on a timeless classic.",
    price: "$120 - $150",
    extra: "(Considering it's a fashion-oriented iteration of a popular model)",
    image: pro_4,
  },
  {
    id: "New Balance 247",
    style: "Urban Ready:",
    title: "New Balance 247",
    design: "Effortless Style & Comfort",
    decription:
      "Elevate your everyday look with the versatile New Balance 247. This sneaker blends a sleek, modern silhouette with the comfort and quality you expect from New Balance. The olive green upper features a mix of breathable mesh and synthetic overlays, providing both style and durability. The iconic New Balance 'N' logo stands out in a contrasting black. Designed for all-day wear, the lightweight REVlite midsole delivers responsive cushioning and a comfortable ride. Whether you're navigating city streets or keeping it casual, the 247 offers a perfect balance of style and functionality. Its understated design makes it easy to pair with a variety of outfits, making it a staple in any modern wardrobe.",
    price: "$80 - $110",
    image: pro_5,
  },
  {
    id: "Nike_Air_Max_1",
    style: "OG Reimagined",
    title: "Nike Air Max 1",
    design: "Bold White & Vibrant Orange",
    decription:
      "Step into a legend with a fresh perspective. This Nike Air Max 1 retains the timeless silhouette that revolutionized sneaker culture, now presented in a striking white and vibrant orange colorway. The classic combination of mesh and synthetic overlays provides breathability and durability, while the visible Air unit in the heel continues to deliver the signature cushioning that made the original so iconic. The bold orange accents on the mudguard, Swoosh, and eyelets inject a modern energy into this retro runner. Whether you're a seasoned sneakerhead or new to the Air Max legacy, this iteration offers a perfect blend of heritage style and contemporary flair, ready to elevate your everyday look.",
    price: "$120 - $150",
    extra: "(Depending on the specific materials and release)",
    image: pro_6,
  },
  {
    id: "Adidas_Yeezy_Boost_350_V2",
    style: "Rare Find",
    title: "Adidas Yeezy Boost 350 V2",
    design: "Iconic Style & Comfort",
    decription:
      "Own a piece of sneaker history with these coveted Adidas Yeezy Boost 350 V2 sneakers. Designed in collaboration with Kanye West, this silhouette has become a cultural phenomenon. The Primeknit upper offers a snug, sock-like fit and a unique aesthetic with its intricate pattern and side stripe (if present on this specific colorway). The full-length Boost midsole provides unparalleled cushioning and energy return for all-day comfort. These sneakers are more than just shoes; they're a statement of style and exclusivity, instantly recognizable and highly desirable within the sneaker community. Whether you're a seasoned collector or looking to elevate your streetwear game, the Yeezy Boost 350 V2 delivers on both looks and feel.",
    price: "$280 - $400+",
    extra:
      "(Depending heavily on the specific colorway, condition, and market demand. Some rare or highly popular colorways can fetch significantly higher prices on the resale market.)",
    image: pro_7,
  },
  {
    id: "Nike_Air_Jordan_1_Mid",
    style: "Timeless Style",
    title: "Nike Air Jordan 1 Mid ",
    design: "Iconic Design, Fresh Colors",
    decription:
      "Own a piece of basketball and sneaker history with the Nike Air Jordan 1 Mid. This iconic silhouette, inspired by Michael Jordan's legendary first signature shoe, offers a perfect blend of heritage and contemporary style. The upper features a classic combination of leather panels in black, white, and vibrant red suede on the heel. The signature Nike Swoosh stands out in black, while the Air Jordan Wings logo is prominently displayed on the ankle. Built for both style and comfort, it features a cushioned midsole with encapsulated Air-Sole unit for all-day wear. Whether you're a seasoned sneaker enthusiast or looking to add a touch of legendary style to your wardrobe, the Air Jordan 1 Mid delivers a timeless look with a modern edge.",
    price: "$110 - $140",
    extra: "(Depending on the specific colorway and retailer)",
    image: pro_8,
  },
  {
    id: "Nike_Air_Force_1_Low",
    style: "Clean & Bold",
    title: "Nike Air Force 1 Low",
    design: "Fresh White with Dynamic Details",
    decription:
      "Step into timeless style with a contemporary edge in this Nike Air Force 1 Low. The crisp white leather upper provides a clean and versatile foundation, while bold black and red accents inject a dynamic energy. The iconic Nike Swoosh stands out in black, outlined with a subtle white detail. A striking red stripe wraps around the midsole, featuring the 'AIR' branding, highlighting the shoe's signature cushioning. Perforations on the toe box ensure breathability, and the classic Air-Sole unit delivers all-day comfort. Whether you're a longtime fan of the AF1 or discovering its iconic appeal, this iteration offers a fresh take on a legendary silhouette, perfect for elevating your everyday style.",
    price: "$110 - $130",
    extra: "(Depending on the specific materials and release)",
    image: pro_9,
  },
  {
    id: "Clean_White_Minimalist_Sneakers",
    style: "Effortless Cool",
    title: "Clean White Minimalist Sneakers",
    design: "Your Everyday Essential",
    decription:
      "Embrace understated style with these clean white minimalist sneakers. Designed for versatile wear, these shoes feature a crisp white upper with subtle textural contrasts and delicate detailing. The low-top silhouette offers a classic and adaptable look, perfect for pairing with a wide range of outfits. Notice the thoughtful design elements, such as the perforated detailing on the toe box for breathability and the subtle branding tag on the tongue. Crafted for comfort as well as style, these sneakers are an ideal choice for everyday wear, providing a refined touch to your casual ensemble. If you appreciate simplicity and quality, these minimalist sneakers are a must-have addition to your footwear collection",
    price: "$70 - $100",
    extra: "(Depending on the brand and materials used)",
    image: pro_10,
  },
];
let showCase = [
  {
    id: "Vibrant_Red_Nike_Free_Flyknit_Performance",
    title: "Vibrant Red Nike Free Flyknit Performance",
    decription:
      "Experience the ultimate in natural movement and lightweight performance with this striking red Nike Free Flyknit running shoe. Engineered for athletes who demand flexibility and breathability, the Flyknit upper molds to your foot like a second skin, providing exceptional support without added bulk. The iconic white Nike Swoosh leaps from the vibrant red canvas, a symbol of quality and athletic prowess. Beneath, the innovative Nike Free sole is designed to flex and expand with your foot's natural motion, delivering a barefoot-like feel while still offering crucial cushioning and impact absorption. Whether you're logging serious miles, hitting the track for speed work, or simply seeking unparalleled comfort for your daily runs, these shoes are built to elevate your experience. The subtle 'Free Nike' branding on the sole signifies its commitment to natural performance. This isn't just a shoe; it's a fusion of cutting-edge technology and bold aesthetics, ready to empower your every step.",
    image: pro_1,
  },
  {
    id: "Pristine_White_Nike_Air_Force_1_High",
    title: "Pristine White Nike Air Force 1 High",
    decription:
      "Step into timeless style with these immaculate white Nike Air Force 1 High sneakers. A true icon of streetwear and basketball heritage, the AF1 High commands attention with its classic silhouette and premium details. The crisp white leather upper exudes a clean and sophisticated aesthetic, making it a versatile choice for any occasion. The iconic Swoosh is subtly textured, adding a touch of understated elegance.The high-top design provides ankle support and a bold, retro-inspired look. Notice the adjustable ankle strap, a hallmark of the AF1 High, allowing for a customized fit and added flair. Perforations on the toe box enhance breathability, while the durable rubber outsole ensures long-lasting wear and traction. The luxurious tan lining adds a touch of unexpected refinement. More than just a shoe, the Air Force 1 High is a statement piece, a symbol of enduring style and urban culture.",
    image: pro_2,
  },
  {
    id: "Carhartt_WIP_x_Nike_Air_Force_1_Low",
    title: "Carhartt WIP x Nike Air Force 1 Low",
    decription:
      "The Carhartt WIP x Nike Air Force 1 Low. The shoe features a durable canvas upper in a rich brown hue, reminiscent of Carhartt's workwear heritage. The iconic Nike Swoosh blends seamlessly with the design, while the white midsole provides a clean contrast. A Carhartt WIP logo is subtly placed on the tongue, signifying the collaboration. The black heel panel adds a touch of sophistication, and the tan laces complement the overall earthy tones. This sneaker is a fusion of streetwear cool and workwear practicality, perfect for those who appreciate both style and durability.",
    image: pro_3,
  },
  {
    id: "Nike_Air_Force_1_Shadow",
    title: "Nike Air Force 1 Shadow",
    decription:
      "Embrace a fresh and playful vibe with these captivating Nike Air Force 1 Shadow sneakers. This isn't just the iconic AF1; it's a modern reimagining with a delightful pastel palette of soft pink, dreamy lavender, sunny yellow, and serene blue. The deconstructed design features multiple layers – from the doubled Swooshes and eyestays to the stacked heel – creating a unique and eye-catching visual depth. Crafted with premium leather and synthetic overlays, these shoes offer both durability and a stylish texture. The classic Air cushioning in the sole ensures all-day comfort, while the subtle branding details maintain the heritage of the Air Force 1. Perfect for adding a touch of whimsical charm to any outfit, these sneakers are a must-have for those who dare to be different and appreciate a contemporary twist on a timeless classic.",
    image: pro_4,
  },
];
let reviews = [
  { name: "Ayesha K.", text: "Best online purchase I’ve made this year!" },
  { name: "Liam J.", text: "Top-notch quality and the shoes are super comfy!" },
  { name: "Meera S.", text: "Affordable and fashionable — I love it." },
  { name: "David R.", text: "Looks even better in person. 5 stars!" },
  { name: "Fatima N.", text: "Fast delivery and premium packaging." },
  { name: "Zayn A.", text: "Perfect fit. Will shop again without a doubt." },
  { name: "Noor B.", text: "Customer support was very helpful!" },
  { name: "Ethan W.", text: "Good experience from checkout to delivery." },
];
let brandPartners = [
  "Nike",
  "Adidas",
  "Puma",
  "Reebok",
  "Sketchers",
  "Fila",
  "Vans",
];
let faqsData = [
  {
    id: 1,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and [mention any other accepted methods like Apple Pay, Google Pay]. All transactions are secure and encrypted.",
  },
  {
    id: 2,
    question: "What is your shipping policy?",
    answer:
      "We offer fast and reliable shipping within 7/15 business days. Shipping costs vary depending on your location and the weight of your order. You can find detailed shipping information on our Shipping Policy page.",
  },
  {
    id: 3,
    question: "What is your return and exchange policy?",
    answer:
      "We want you to be completely satisfied with your purchase. If you are not, you can return or exchange unworn shoes within 7 days of receiving your order. Please see our Return Policy page for detailed instructions and conditions.",
  },
  {
    id: 4,
    question: "How do I track my order?",
    answer:
      "Once your order has been shipped, you will receive a confirmation email containing a tracking number and a link to track your package. You can also track your order in your account on our website.",
  },
  {
    id: 5,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to select international destinations. Shipping costs and delivery times vary depending on the country. Please check our Shipping Policy page for a list of countries we ship to.",
  },
  {
    id: 6,
    question: "How do I know what size to order?",
    answer:
      "We provide a detailed size chart on each product page to help you find the perfect fit. We recommend measuring your feet and comparing them to our chart. If you have any questions, our customer support team is happy to assist you.",
  },
  {
    id: 7,
    question: "Are your shoes authentic?",
    answer:
      "Yes, we guarantee that all shoes sold at LuxeShoes ETC are 100% authentic and sourced directly from trusted manufacturers and authorized distributors.",
  },
  {
    id: 8,
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at [Your Customer Support Email Address] or by phone at [Your Phone Number] during our business hours [Your Business Hours]. You can also use the contact form on our Contact Us page.",
  },
];

export {
  allProducts,
  navItem,
  registerField,
  loginField,
  showCase,
  reviews,
  brandPartners,
  faqsData
};
