function Howitworks() {
  return (
    <div>
      <section id="how-it-works" className="pt-16 md:pt-72 pb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-24 md:mt-44 p-2">
          How it works
        </h2>
        <div className="flex justify-center pb-4 md:pb-2">
          <img src="/Images/love-logo.png" alt="" className=" md:w-auto" />
        </div>
        <h3 className="text-center text-sm md:text-base pb-4 md:pb-6">
          A step-by-step guide on how to get started on Jollof Date
        </h3>
        <div className="flex flex-col xl:flex-row p-4 md:p-8 space-y-8 md:space-y-0">
          <div id="picture" className="flex justify-center   space-x-3 ">
            <img
              src="/Images/f-and-j-frame.png"
              alt=""
              className="w-full md:w-auto"
            />
          </div>
          <div className="icon space-y-8 md:space-y-11 md:ml-11">
            <div className="flex gap-4 md:gap-6">
              <img
                src="/Images/sign up.png"
                alt=""
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <h1 className="font-bold text-xl md:text-2xl">Sign Up</h1>
                <h2 className="font-normal text-sm md:text-xl">
                  Begin your journey to a lifetime of happiness, success,
                  progress, and bliss.
                </h2>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <img
                src="/Images/create.png"
                alt=""
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <h1 className="font-bold text-xl md:text-2xl">
                  Create Profile and Add Preferences
                </h1>
                <h2 className="font-normal text-sm md:text-xl">
                  Share your interests, hobbies, and a bit about yourself to
                  help us find your perfect match.
                </h2>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <img
                src="/Images/browse.png"
                alt=""
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <h1 className="font-bold text-xl md:text-2xl">
                  Browse and Match
                </h1>
                <h2 className="font-normal text-sm md:text-xl">
                  Use our advanced filters to find people who share your
                  interests and values. Start connecting today.
                </h2>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <img
                src="/Images/chat.png"
                alt=""
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <h1 className="font-bold text-xl md:text-2xl">Chat and Call</h1>
                <h2 className="font-normal text-sm md:text-xl">
                  Get to know your matches better and build connections in a
                  safe and private environment.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Howitworks;
