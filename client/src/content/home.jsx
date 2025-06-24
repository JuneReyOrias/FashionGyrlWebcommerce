import { useState, useEffect } from "react";
import TopProduct from "./TopProduct";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const images = [
    {
      src: "/Tops/Cloth1.png",
      title: "Tops",
      description: "Fresh, stylish tops for every occasion.",
    },
    {
      src: "/Bottoms/Bottoms3.jpg",
      title: "Bottoms",
      description: "Comfortable and versatile bottoms for any activity.",
    },
    {
      src: "/Outerwear/Outerwear3.jpg",
      title: "Outerwear",
      description: "Stay warm and trendy with our premium outerwear.",
    },
    {
      src: "/Formalwear/Formalwear2.jpg",
      title: "Formalwear",
      description: "Elegant formalwear for the most sophisticated events.",
    },
    {
      src: "/Accessories/Accessories2.jpg",
      title: "Accessories",
      description: "Complete your look with our unique accessories.",
    },
  ];

  const products = [
    { category: "tops", name: "White Tee", description: "Soft cotton t-shirt", image: "/Tops/Cloth1.png", price: 80 },
    { category: "tops", name: "Cloth Red", description: "Soft cotton t-shirt", image: "/Tops/cloth2.png", price: 70 },
    { category: "tops", name: "Gray Sleeves", description: "Soft cotton t-shirt", image: "/Tops/cloth3.png", price: 90 },
    { category: "tops", name: "Polo Blue", description: "Soft cotton t-shirt", image: "/Tops/cloth4.png", price: 60 },
    { category: "bottoms", name: "Denim Jeans ", description: "Slim fit blue jeans", image: "/Bottoms/Bottoms1.jpg", price: 70 },
    { category: "bottoms", name: "Denim Jeans 2", description: "Slim fit blue jeans", image: "/Bottoms/Bottoms2.jpg", price: 60 },
    { category: "bottoms", name: "Denim Jeans 3", description: "Slim fit blue jeans", image: "/Bottoms/Bottoms3.jpg", price: 90 },
    { category: "bottoms", name: "Denim Jeans 4", description: "Slim fit blue jeans", image: "/Bottoms/Bottoms4.jpg", price: 80 },
    { category: "outerwear", name: "Puffer Jacket", description: "Warm and stylish", image: "/Outerwear/Outerwear1.jpg", price: 90 },
    { category: "outerwear", name: "Puffer Jacket 2", description: "Warm and stylish", image: "/Outerwear/Outerwear2.jpg", price: 70 },
    { category: "outerwear", name: "Puffer Jacket 3", description: "Warm and stylish", image: "/Outerwear/Outerwear3.jpg", price: 80 },
    { category: "formalwear", name: "Blazer", description: "Perfect for formal occasions", image: "/Formalwear/Formalwear.jpg", price: 100 },
    { category: "formalwear", name: "Blazer 2", description: "Perfect for formal occasions", image: "/Formalwear/Formalwear2.jpg", price: 100 },
    { category: "formalwear", name: "Blazer 3", description: "Perfect for formal occasions", image: "/Formalwear/Formalwear3.jpg", price: 100 },
    { category: "accessories", name: "Fashion Eyeglasses", description: "Elegant timepiece", image: "/Accessories/Acessories1.jpg", price: 70 },
    { category: "accessories", name: "HeadBand", description: "Elegant timepiece", image: "/Accessories/Accessories2.jpg", price: 80 },
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(autoplay);
  }, [isHovered, images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>s
      {/* Hero + Carousel Section */}
      <div className="min-h-screen bg-fuchsia-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-10">
        {/* LEFT: Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Offer
            </span>{" "}
            Fashion.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 max-w-xl">
            {images[currentIndex].description}
          </p>
        </div>

        {/* RIGHT: Carousel */}
        <div
          id="indicators-carousel"
          className="relative w-full md:w-1/2 h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-xl overflow-hidden shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-full transition-all duration-500 ease-in-out">
            {images.map((image, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out absolute w-full h-full ${index === currentIndex ? "block opacity-100" : "hidden opacity-0"} transition-opacity`}
              >
                <img
                  src={image.src}
                  className="absolute top-0 left-1/2 w-full h-full object-cover rounded-xl transform -translate-x-1/2 transition-transform duration-700 hover:scale-110"
                  alt={`Carousel Image ${index + 1}`}
                />
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-6 bg-black/50 text-white rounded-lg shadow-xl max-w-xs">
                  <h2 className="text-2xl font-bold mb-4">{image.title}</h2>
                  <span
                    className="text-lg font-semibold text-sky-400 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(image.title.toLowerCase());
                      setShowModal(true);
                    }}
                  >
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-sky-500 scale-125" : "bg-gray-300 hover:bg-sky-400"}`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          {/* Controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group hover:bg-black/30"
            onClick={handlePrev}
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white group-hover:bg-black/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 6 10">
                <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group hover:bg-black/30"
            onClick={handleNext}
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white group-hover:bg-black/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 6 10">
                <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* BOTTOM: Top Product Section */}
      <div className="bg-fuchsia-100 py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Top Picks Just for You</h2>
        <TopProduct />
      </div>

{/* CATEGORY MODAL */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full relative overflow-hidden">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-bold"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6 capitalize text-gray-800">
        {selectedCategory} products
      </h2>
      <div className="overflow-y-auto max-h-[70vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category === selectedCategory)
            .map((product, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl p-4 shadow hover:shadow-lg flex flex-col justify-between h-full"
              >
                {/* Top: Image */}
                <img
                  src={product.image}
                  alt=" "
                  className="w-50 h-48 object-contain rounded mb-3"
                />

                {/* Bottom: Info and Controls */}
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="font-semibold text-lg text-gray-700">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="text-sky-500 font-bold">PHP {product.price.toFixed(2)}</p>
                  {/* Price, Size, Quantity, Button */}
                  <div className="mt-auto">
                    {/* Size */}
                    <select className="mt-1 ml-1 border rounded px-3 py-2 text-sm text-gray-700 w-18">
                      <option value="">Size</option>
                      <option value="S">S-M</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>

                    {/* Quantity */}
                    <label className="mt-4 p-3 text-sm font-medium text-gray-600">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      defaultValue="1"
                      className="mt-1 border rounded px-3 py-2 text-sm text-gray-700 w-15"
                    />

                    {/* Add to Cart Button */}
                    <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition-all w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Home;
