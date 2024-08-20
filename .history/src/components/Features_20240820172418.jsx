function Features() {
  return (
    <div>
      <section
        id="features"
        className=" md:p-8 pt-16 md:pt-24 mb-20 md:mb-40 bg-featuresY h-full w-full md:h-custom16 max-w-screen-2xl justify-center m-auto"
      >
        <div className="">
          <div className="flex flex-col md:flex-row justify-between m-auto px-4 md:px-8 space-y-4 md:space-y-0">
            <h3 className="text-3xl md:text-5xl font-bold w-full md:w-96 h-auto md:h-36 text-white">
              Key features of Jollof Date
            </h3>
            <h2 className="text-xl w-full md:w-custom4 font-normal text-white">
              Discover what sets Jollofdate apart with advanced matching
              algorithms, robust privacy controls, and user-friendly features
              designed to create meaningful connections and enhance your online
              dating experience.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row h-full space-y-4 md:space-y-0 md:space-x-9 pl-0 md:pl-8 pr-0 md:pr-8 mt-8 w-full">
            <div className="bg-white text-center border rounded-3xl">
              <img
                src="/Images/phone1.png"
                alt=""
                className="w-full md:w-auto"
              />
            </div>
            <div className="bg-white text-center border rounded-3xl">
              <a href="">
                <img src="/Images/Phone2.png" alt="" className="w-full" />
              </a>
            </div>
            <div className="bg-white text-center border rounded-3xl">
              <a href="">
                <img src="/Images/Phone3.png" alt="" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
