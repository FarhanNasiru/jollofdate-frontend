function Community() {
  return (
    <div>
      <section
        id="Community"
        className="bg-custom-radial flex flex-col items-center justify-center mb-28 px-6 pt-8"
      >
        <div className="space-y-8 text-center text-black">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Join the
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Jollof Date Community
            </h2>
          </div>
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-custom9 mx-auto">
            <h3 className="text-sm sm:text-base font-normal">
              Download the app from your store and begin your journey to a
              lifetime of happiness, success, progress, and bliss.
            </h3>
          </div>
          <div className="text-center justify-center m-auto gap-3 flex-col flex-wrap md:flex space-y-6">
            <a href="" className="w-32 md:w-40 ">
              <img
                src="/Images/Applestore-dark.png"
                alt="Download on the App Store"
                className="m-auto"
              />
            </a>
            <a href="" className="w-32 md:w-40">
              <img
                src="/Images/Googleplay-Dark.png"
                alt="Get it on Google Play"
                className="m-auto"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <img
            src="/Images/threephones.png"
            alt="Three phones showing the app"
            className="w-full sm:w-4/5 md:w-3/5 lg:w-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Community;
