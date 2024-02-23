import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-2 text-5xl font-semibold mb-3">
      <h1>
        Book <span className="text-secondary">Private Chef</span>
      </h1>
      <h1>for your</h1>
      <h1>
        Dinner <span className="text-secondary">Party</span>
      </h1>
      <section className="mt-3 flex flex-col gap-2">
        <p className={"text-[14px] font-[400]"}>
          We’re providing the best Chef booking platform.
        </p>
        <p className={"text-[14px] font-[400]"}>
          Choose a menu and book your Chef instantly
        </p>
      </section>
    </section>
  );
};

export default AboutSection;
