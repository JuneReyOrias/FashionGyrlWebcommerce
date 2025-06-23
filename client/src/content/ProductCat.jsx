import { useState } from "react";

const ProductCategory = [
  { src: "/Tops/Cloth1.png", alt: "Cloth1", category: "Tops", title: "Top 1", price: "Php 29.99", link: "/product/cloth1" },
  { src: "/Tops/cloth2.png", alt: "Cloth2", category: "Tops", title: "Top 2", price: "Php 34.99", link: "/product/cloth2" },
  { src: "/Tops/cloth3.png", alt: "Cloth3", category: "Tops", title: "Top 3", price: "Php 39.99", link: "/product/cloth3" },
  { src: "/Tops/cloth4.png", alt: "Cloth4", category: "Tops", title: "Top 4", price: "Php 44.99", link: "/product/cloth4" },
  { src: "/Bottoms/Bottoms1.jpg", alt: "Bottoms1", category: "Bottoms", title: "Bottom 1", price: "Php 49.99", link: "/product/bottoms1" },
  { src: "/Bottoms/Bottoms2.jpg", alt: "Bottoms2", category: "Bottoms", title: "Bottom 2", price: "Php 54.99", link: "/product/bottoms2" },
  { src: "/Bottoms/Bottoms3.jpg", alt: "Bottoms3", category: "Bottoms", title: "Bottom 3", price: "Php 59.99", link: "/product/bottoms3" },
  { src: "/Bottoms/Bottoms4.jpg", alt: "Bottoms4", category: "Bottoms", title: "Bottom 4", price: "Php 64.99", link: "/product/bottoms4" },
  { src: "/Outerwear/Outerwear1.jpg", alt: "Outerwear1", category: "Outerwear", title: "Outerwear 1", price: "Php 79.99", link: "/product/outerwear1" },
  { src: "/Outerwear/Outerwear2.jpg", alt: "Outerwear2", category: "Outerwear", title: "Outerwear 2", price: "Php 84.99", link: "/product/outerwear2" },
  { src: "/Outerwear/Outerwear3.jpg", alt: "Outerwear3", category: "Outerwear", title: "Outerwear 3", price: "Php 89.99", link: "/product/outerwear3" },
  { src: "/Formalwear/Formalwear.jpg", alt: "Formalwear1", category: "Formalwear", title: "Formalwear 1", price: "Php 99.99", link: "/product/formalwear1" },
  { src: "/Formalwear/Formalwear2.jpg", alt: "Formalwear2", category: "Formalwear", title: "Formalwear 2", price: "Php 104.99", link: "/product/formalwear2" },
  { src: "/Formalwear/Formalwear3.jpg", alt: "Formalwear3", category: "Formalwear", title: "Formalwear 3", price: "Php 109.99", link: "/product/formalwear3" },
  { src: "/Accessories/Acessories1.jpg", alt: "Accessories1", category: "Accessories", title: "Accessories 1", price: "Php 14.99", link: "/product/accessories1" },
  { src: "/Accessories/Accessories2.jpg", alt: "Accessories2", category: "Accessories", title: "Accessories 2", price: "Php 19.99", link: "/product/accessories2" },
];

function ProductCat() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems =
    activeFilter === "all"
      ? ProductCategory
      : ProductCategory.filter((item) => item.category === activeFilter);

  return (
    <div id="Products"  className="mb-1 bg-fuchsia-100 pb-8" data-animate>
      <p className="mb-4 pt-14 text-2xl tracking-tight text-center text-gray-950 opacity-90">
        These are the products available in various categories
      </p>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap" id="Project" data-animate>
        {["all", "Tops", "Bottoms", "Outerwear", "Formalwear", "Accessories"].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`filter-btn ${activeFilter === filter ? "bg-gray-400/90 text-gray-950" : "text-gray-950 border border-slate-400 hover:border-gray-200"} focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
          >
            {filter === "all" ? "All Categories" : filter}
          </button>
        ))}
      </div>

      {/* Filtered Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4" id="categories" data-animate>
        {filteredItems.map((item, index) => (
          <div key={index} className="category-item p-2 flex flex-col justify-center items-center text-center">
            <a href={item.link} className="block">
              <img className="w-40 h-40 object-contain" src={item.src} alt={item.alt} />
              <h3 className="mt-2 text-lg font-medium text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCat;
