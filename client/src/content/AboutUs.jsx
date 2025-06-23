function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section id="About" className="bg-center bg-no-repeat bg-[url('/images/IntroPage.jpg')] bg-gray-600 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Fashion Gyrl
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Fashion Gyrl is your go-to destination for bold, expressive fashion that celebrates confidence, individuality, and style. 
          From trendy streetwear to elegant essentials, we offer a wide range of clothing designed for the modern woman who’s not afraid to stand out. 
          Whether you're dressing up for the spotlight or keeping it casual chic, Fashion Gyrl brings you the latest looks with attitude.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              About Us
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
        
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-fuchsia-100 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          {/* Main card */}
          {/* <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
              </svg>
              About Us
            </a>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              How to quickly deploy a static website
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              Static websites are now used to bootstrap lots of websites and are becoming the
              basis for a variety of tools that even influence both web designers and developers.
            </p>
            <a
              href="#"
              className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div> */}

          {/* Grid Cards */}
          <div className="grid md:grid-cols-2 gap-8">
  {/* Mission Card */}
  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    <div className="bg-green-100 text-green-800 text-2xl font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
      <svg
        className="w-3 h-3 me-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 18"
      >
        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
      </svg>
      Mission
    </div>
    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
      Affordable Style, Exceptional Quality
    </h2>
    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
      At Fashion Gyrl, our mission is to provide stylish, high-quality clothing at prices everyone can afford. We believe fashion should be accessible without compromising on quality, allowing our customers to express themselves confidently every day.
    </p>
    <a
      href="#"
      className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
    >
      Read more
      <svg
        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>

  {/* Vision Card */}
  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    <div className="bg-purple-100 text-purple-800 text-2xl font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
      <svg
        className="w-3 h-3 me-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
        />
      </svg>
      Vision
    </div>
    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
      A Brand That Grows with You
    </h2>
    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
      Our vision is to grow Fashion Gyrl into a globally recognized fashion brand, opening more branches and building lifelong relationships with our customers through quality, support, and trust. We aim to be your go-to brand for every fashion moment.
    </p>
    <a
      href="#"
      className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
    >
      Read more
      <svg
        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>

        </div>
      </section>
    </>
  );
}

export default AboutUs;
