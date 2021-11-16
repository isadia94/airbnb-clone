function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  px-8 font-poppins sm:px-16">
      <div className="mb-4">
        <h4 className="font-poppins font-bold">About</h4>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          How Airbnb works
        </p>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Newsroom
        </p>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Airbnb 2021
        </p>
      </div>
      <div className="mb-4">
        <h4 className="font-poppins font-bold">Community</h4>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Investors
        </p>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Airbnb Plus
        </p>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Airbnb Luxe
        </p>
      </div>

      <div className="mb-4">
        <h4 className="font-poppins font-bold">Support</h4>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          HotelTonight
        </p>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Airbnb for Work
        </p>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Made possible by Hosts
        </p>
      </div>
      <div className="mb-4">
        <h4 className="font-poppins font-bold">Covid 19</h4>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Careers
        </p>
        <p className="cursor-pointer hover:underline font-poppins text-sm mt-3">
          Founders' Letter
        </p>
      </div>
    </footer>
  );
}

export default Footer;
