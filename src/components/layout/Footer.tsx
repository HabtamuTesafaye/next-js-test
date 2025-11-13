const Footer = () => {
  return (
    <footer className='bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          <div>
            <h3 className='text-base sm:text-lg font-semibold mb-4 text-neutral-900 dark:text-white'>
              LocalEvents
            </h3>
            <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400'>
              Revolutionizing local event management with cutting-edge technology.
            </p>
          </div>
          <div>
            <h4 className='font-medium mb-4 text-sm sm:text-base text-neutral-900 dark:text-white'>
              Product
            </h4>
            <ul className='space-y-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400'>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium mb-4 text-sm sm:text-base text-neutral-900 dark:text-white'>
              Company
            </h4>
            <ul className='space-y-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400'>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium mb-4 text-sm sm:text-base text-neutral-900 dark:text-white'>
              Support
            </h4>
            <ul className='space-y-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400'>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-neutral-900 dark:hover:text-white transition-colors'
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t border-neutral-300 dark:border-neutral-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-400'>
          <p>&copy; 2024 LocalEvents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
