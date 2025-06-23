import { ShoppingBag } from 'lucide-react';
function IntroPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        id="Home"
        className="w-full min-h-screen bg-[url('/images/IntroPage.jpg')] bg-cover bg-center flex items-center justify-center px-4 py-12"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="w-full max-w-5xl flex flex-col items-center gap-12 relative z-10">
          <div className="w-full text-center bg-amber-50/90 border border-gray-200 rounded-lg shadow-lg p-6 sm:p-8 dark:bg-gray-800/80 dark:border-gray-700 backdrop-blur-md">
            <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              Welcome to Fashion Gyrl
            </h5>
            <p className="mb-5 text-lg font-semibold text-gray-950 sm:text-xl dark:text-white">
            Unleash your confidence with striking, fashion-forward styles crafted for empowered women. From edgy streetwear to standout statement pieces, Fashion Gyrl is your ultimate destination for trendsetting looks.
            </p>
          </div>

          {/* Button Section */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-2">

                 {/* Shop Now Button */}
                 <a
              href="#Products"
              className="inline-flex items-center gap-3 bg-pink-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </a>

          </div>
        </div>
      </div>
    </>
  );
}

export default IntroPage;
