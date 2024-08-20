function Aboutus() {
  return (
    <div>
      <section id="about-us" className="pt-16 md:pt-24">
        <div className="px-4 md:px-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center p-2">
            About Us
          </h2>
          <div className="flex justify-center pb-4">
            <img src="/Images/love-logo.png" alt="" className="md:14" />
          </div>
          <h3 className="text-center text-base md:text-lg pb-8 md:pb-12">
            Why Jollof Date? What makes us different?
          </h3>
          <div className="flex flex-col xl:flex-row gap-4 lg:gap-8 px-2 lg:px-8 pb-16 lg:pb-32 justify-center">
            <img
              src="/Images/Lovers.png"
              alt=""
              className="w-full xl:w-custom11 h-auto lg:h-custom12 shrink-0"
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
        <div className="flex flex-wrap text-center space-y-8 pb-12 lg:pb-28 justify-evenly px-8">
          <div className="flex space-x-3 mt-8">
            <div>
              <img src="/Images/person.png" alt="" />
            </div>
            <div className="">
              <h1 className="font-bold text-4xl">360</h1>
              <h2 className="text-xs">Global Downloads</h2>
            </div>
          </div>
          <div className="flex space-x-3">
            <div>
              <img src="/Images/people.png" alt="" />
            </div>
            <div className="">
              <h1 className="font-bold text-4xl">350</h1>
              <h2 className="text-xs">Active Users</h2>
            </div>
          </div>
          <div className="flex space-x-3">
            <div>
              <img src="/Images/world-o.png" alt="" />
            </div>
            <div className="">
              <h1 className="font-bold text-4xl">100</h1>
              <h2 className="text-xs">Countries</h2>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src="/Images/Star2.png" alt="" className="" />
            </div>
            <div className="">
              <h1 className="font-bold text-4xl">100</h1>
              <h2 className="text-xl">4 star + ratings</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
