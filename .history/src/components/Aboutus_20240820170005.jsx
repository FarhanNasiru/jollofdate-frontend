function Aboutus() {
  return (
    <div>
      <section id="about-us" className="pt-16 md:pt-20">
        <div className="px-4 md:px-24">
          <h2 className="text-5xl font-normal text-center p-2">About Us</h2>
          <div className="flex justify-center pb-4">
            <img src="/Images/love-logo.png" alt="" className="md:14" />
          </div>
          <h3 className="text-center text-lg font-normal pb-8 md:pb-12">
            Why Jollof Date? What makes us different?
          </h3>
          <div className="flex flex-col xl:flex-row gap-4 lg:gap-8 px-2 lg:px-8 pb-16 lg:pb-32 justify-center">
            <img
              src="/Images/Lovers.png"
              alt=""
              className="max-w-xl max-h-3px"
            />
            <div className="tracking-wide bg-white p-4 md:pt-28 font-normal text-base md:text-xl">
              <p>
                Dating, whether in the real world or online, can be cumbersome
                and time-consuming. Meeting someone of your origin, nationality,
                or ethnicity is a daunting task.
              </p>
              <br />
              <p>
                JollofDate was created to solve a simple problem – improving how
                Africans meet in the Diaspora. We make it easy for you to find
                singles and filter individual profiles based on your
                preferences. JollofDate makes finding your potential partner
                feasible using a well-defined algorithm that allows you to
                search matches based on your current location or in a different
                location. Hope you enjoy your JollofDate experience and find
                your favorite Jollof.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-20 lg:space-x-48 px-16 pb-14 w-11/12">
          <div className="flex items-center">
            <img src="/Images/person.png" alt="Person Icon" className="mr-4" />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-4xl">360</h1>
              <h2 className="text-xs font-medium">Global Downloads</h2>
            </div>
          </div>

          <div className="flex items-center">
            <img src="/Images/people.png" alt="People Icon" className="mr-4" />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-4xl">350</h1>
              <h2 className="text-xs font-medium">Active Users</h2>
            </div>
          </div>

          <div className="flex items-center">
            <img src="/Images/world-o.png" alt="World Icon" className="mr-4" />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-4xl">100</h1>
              <h2 className="text-xs font-medium">Countries</h2>
            </div>
          </div>

          <div className="flex items-center">
            <img src="/Images/Star2.png" alt="Star Icon" className="" />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-4xl">100</h1>
              <h2 className="text-xs font-medium">4 star + ratings</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
