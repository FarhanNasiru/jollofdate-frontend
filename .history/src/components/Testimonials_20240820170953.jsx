import { Carousel } from "antd";

function Testimonials() {
  const contentStyle = {
    height: "auto",
    color: "#fff",
    lineHeight: "40px",
    textAlign: "center",
    background: "transparent",
  };

  const testimonials = [
    {
      quote:
        "“Other dating apps were like shooting fish in a barrel. But my girlfriend and I clicked right away on Jollofdate, and the conversation was effortless. We’ve been together for over a year.”",
      name: "Caitlyn King",
    },
    {
      quote:
        "“Other dating apps were like shooting fish in a barrel. But my girlfriend and I clicked right away on Jollofdate, and the conversation was effortless. We’ve been together for over a year.”",
      name: "Crystabel lyn",
    },
    {
      quote:
        "“Other dating apps were like shooting fish in a barrel. But my girlfriend and I clicked right away on Jollofdate, and the conversation was effortless. We’ve been together for over a year.”",
      name: "David Johnson",
    },
    {
      quote:
        "“Other dating apps were like shooting fish in a barrel. But my girlfriend and I clicked right away on Jollofdate, and the conversation was effortless. We’ve been together for over a year.”",
      name: "King Micheal",
    },
  ];

  return (
    <section id="testimonials" className="p-8 pt-24">
      <div>
        <h2 className="text-5xl font-normal text-center p-2">Testimonials</h2>
        <div className="flex justify-center pb-5 md:pb-6">
          <img src="/Images/love-logo.png" alt="Love Logo" />
        </div>
        <h3 className="text-center text-lg">
          Read what our existing users have to say
        </h3>
      </div>
      <div className="text-center pt-9 pb-16 text-black max-w-7xl">
        <Carousel autoplay>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div style={contentStyle}>
                <h1 className="text-black text-center m-auto font-normal text-2xl text-wrap">
                  {testimonial.quote}
                </h1>
                <div className="flex justify-center py-3">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/Images/Star.svg"
                      alt="Star"
                      className="mx-1"
                    />
                  ))}
                </div>
                <p className="text-center text-black text-lg pb-8">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
