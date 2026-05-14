const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          {/* Right Section */}
          <div className="border-b border-gray-100 py-8 lg:order-last lg:border-s lg:border-b-0 lg:py-16 lg:ps-16 dark:border-gray-800">
            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded-sm bg-teal-500 lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Request a Demo
                </h2>

                <p className="mt-4 max-w-lg text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, harum deserunt nesciunt praesentium, repellendus
                  eum perspiciatis ratione pariatur a aperiam eius numquam
                  doloribus asperiores sunt.
                </p>
              </div>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>

                <div className="rounded-md border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white"
                  />

                  <button
                    type="submit"
                    className="mt-1 w-full rounded-sm bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Left Section */}
          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Services */}
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Services
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  {[
                    "1on1 Coaching",
                    "Company Review",
                    "Accounts Review",
                    "HR Consulting",
                    "SEO Optimisation",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Company
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  {["About", "Meet the Team", "Accounts Review"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Helpful Links */}
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Helpful Links
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  {["Contact", "FAQs", "Live Chat"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
              <ul className="flex flex-wrap gap-4 text-xs">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Cookies",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
                © 2022. Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;