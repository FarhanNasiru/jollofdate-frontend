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
    {
      question: "What picture should I use on Jollof Date?",
      answer:
        "The answer is simple - pictures of you. A picture can tell a thousand stories and this is what we want you to achieve with the photos you upload. So leave out your friends and do not try to cover your face. Jollof Date frowns at catfish accounts and permanently bans accounts caught",
    },
    {
      question: "What should I put in my bio?",
      answer:
        "This is the place where you sell yourself,  They say action speaks louder than words but sometimes words help too. So tell us about who you are using your bio. Our advise here is to keep it as funny and as short as possible while still trying to capture all the things that make you awesome.",
    },
    {
      question: "How do matching and unmatching work?",
      answer:
        "Two members must have liked each other's profile in order to make a match and this is where the magic begins. If for some reason, you do not wish to continue conversing with a match, you can unmatch them by clicking the three-dot menu on the top right of the chat screen and clicking the unmatch button",
    },
    {
      question: "How does messaging work on Jollof Date?",
      answer:
        "Messaging requires a two-way string which means you can only have a chat with someone that is your match on Jollof Date i.e. you liked the person's profile and they also liked yours.",
    },
    {
      question: "How to Block and Report on Jollof Date?",
      answer: `
      Your safety is our top priority on Jollof Date. If someone makes you feel unsafe or uncomfortable, please don't hesitate to report them. To report a user:
      1. Open the profile on matches to view chat
      2. Click the three-dot menu on the top right
      3. Click on either report or block
      
      If you report a user, you do not unmatch the user. However, Jollof Date takes note of the incident that prompted your report and can punish the user with a suspension or permanent ban on the account depending on the severity and occurrence of the offense. If you block a user, they get unmatched, and they can never find your profile again.
    `,
    },
  ];

  return (
    <section
      id="frequently-asked-questions"
      className="pb-14 sm:px-9 max-w-screen-2xl justify-center m-auto"
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
              <p className="text-xl font-medium">{item.question}</p>
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
                  {item.answer}
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
