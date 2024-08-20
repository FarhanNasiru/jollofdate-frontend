import { useState } from "react";

function Faq() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDropdown = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const faqItems = [
    "How can I create my profile on the app?",
    "How can I create my profile on the app?",
    "How can I create my profile on the app?",
    "How can I create my profile on the app?",
    "How can I create my profile on the app?",
    "How can I create my profile on the app?",
  ];

  return (
    <section
      id="frequently-asked-questions"
      className="pb-14 sm:px-9 max-w-7xl justify-center m-auto"
    >
      <div className="sm:pb-20 md:pb-12">
        <h2 className="text-5xl font-normal text-center pt-5">
          Frequently Asked Questions
        </h2>
        <div className="flex justify-center py-4">
          <img src="/Images/love-logo.png" alt="" className=" md:w-auto" />
        </div>
        <h3 className="text-center text-lg">
          You have questions? Check here for answers
        </h3>
      </div>
      <div className="text-left sm:text-wrap px-4">
        {faqItems.map((item, index) => (
          <div key={index} className=" mx-auto mt-3">
            <div
              className={`flex pt-7 pl-16 pr-12 pb-6 justify-between cursor-pointer ${
                openIndexes.includes(index)
                  ? "bg-customYellow1 font-bold text-black text-xl rounded-t-md"
                  : "bg-bright text-black text-lg border-solid border rounded-lg border-customYellow1"
              }`}
              onClick={() => toggleDropdown(index)}
            >
              <p className="text-xl font-medium">{item}</p>
              {openIndexes.includes(index) ? (
                <div className="h-6 w-6">
                  <img src="/Images/add.svg" alt="" />
                </div>
              ) : (
                <div className="h-6 w-6">
                  <img src="/Images/add2.svg" alt="" className="bg-white" />
                </div>
              )}
            </div>
            {openIndexes.includes(index) && (
              <div className="p-4 bg-customYellow1 rounded-b-md shadow pt-7 pl-16 pr-12 pb-8">
                <p className=" xl:w-custom3text-xl md:text-wrap sm:text-balance">
                  Begin your journey to a lifetime of happiness, success,
                  progress and bliss. Begin your journey to a lifetime of
                  happiness, success, progress and bliss. Begin your journey to
                  a lifetime of happiness, success, progress and bliss. Begin
                  your journey to a lifetime of happiness, success, progress and
                  bliss. Begin your journey to a lifetime of happiness, success,
                  progress and bliss. Begin your journey to a lifetime of
                  happiness, success, progress and bliss. Begin your journey to
                  a lifetime of happiness, success, progress and bliss.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
