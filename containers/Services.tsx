// Components

import ServiceCard from "@/components/shared/ServiceCard";
import FeaturedSection from "@/components/shared/FeaturedSection";
import VisualBanner from "@/components/shared/VisualBanner";

// Constants
import { serviceCards } from "@/constants/serviceCardsData";
import serviceHeroData from "@/constants/serviceHeroData";

// Helpers
import { generateId } from "@/utils/helpers";

export default function Services() {
  return (
    <section id="service" className="w-full">
      {/* Service Cards */}
      <article className="w-full h-[800px] max-lg:h-[1200px] flex flex-col justify-evenly items-center">
        <h2 className="text-2xl font-kalame font-bold relative after:absolute after:bottom-0 after:left-3 after:h-1 after:w-2/3 after:bg-blue-500">
          خدمات ما
        </h2>
        <div className="w-full h-auto grid grid-cols-2 grid-rows-2 place-items-center gap-y-14 max-lg:grid-cols-1 max-lg:grid-rows-4 max-w-[1200px]">
          {serviceCards.map(({ icon, title, text, unique }) => (
            <ServiceCard
              icon={icon}
              title={title}
              text={text}
              unique={unique}
              key={generateId()}
            />
          ))}
        </div>
      </article>

      {/* Service Heros*/}

      <article className="w-full h-auto flex flex-col justify-between items-center max-md:my-20 ">
        {serviceHeroData.map(
          ({ title, text, buttonText, photo, icon }, index) => (
            <div
              key={generateId()}
              className={`w-full max-w-[1200px] h-auto my-32 max-lg:h-[900px]  max-lg:flex-col-reverse md:px-10  flex justify-evenly items-center relative after:w-[100px] after:h-[100px]  after:rounded-full after:absolute after:left-0 after:backdrop-blur-3xl after:shadow-2xl after:shadow-[bg-blue-600]   ${
                index % 2 !== 0 && "flex-row-reverse "
              } ${index === 0 && ""}`}
            >
              <FeaturedSection
                title={title}
                text={text}
                buttonText={buttonText}
                icon={icon}
              />
              <VisualBanner src={photo} />
            </div>
          )
        )}
      </article>
    </section>
  );
}
