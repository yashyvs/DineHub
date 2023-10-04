const Footer = () => {
  return (
    <div className="px-4 sm:px-[10%] py-10 sm:py-20 flex flex-wrap sm:justify-between items-center bg-primary">
      <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
        <h1 className="mb-4 font-primary text-2xl font-extrabold">DineHub</h1>
        <p className="text-4xl sm:text-6xl font-bold font-primary text-white">
          Delivering deliciousness to your doorstep.
        </p>
        <p className="mb-4 text-lg sm:text-base font-secondary text-light">
          Order food from your nearby favorite restaurants.
        </p>
      </div>

      <div className="w-full sm:w-1/2 flex flex-wrap sm:flex-nowrap justify-between gap-4 sm:gap-2">
        <ul className="w-1/2 sm:w-auto">
          <li className="mb-4 font-bold text-lg sm:text-base font-secondary text-light">
            Company
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            About Us
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Team
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Career
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Dine Plus
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Dine Blog
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Dine Instamart
          </li>
        </ul>
        <ul className="w-1/2 sm:w-auto">
          <li className="mb-4 font-bold text-lg sm:text-base font-secondary text-light">
            Contact
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Help and Support
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Partner with Dine
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Ride with Dine
          </li>
        </ul>
        <ul className="w-1/2 sm:w-auto">
          <li className="mb-4 font-bold text-lg sm:text-base font-secondary text-light">
            Legal
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Terms and Conditions
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Refund Policy
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Offers
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Privacy Policy
          </li>
          <li className="mt-2 font-secondary text-base text-white cursor-pointer hover:opacity-80">
            Cookie Policy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
