import Title from "./Title";
import { servicesIcons } from "../data";
import Icons from "./Icons";

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {servicesIcons.map((service) => {
          return (
            <Icons
              icon={service.icon}
              h4Name={service.title}
              text={service.text}
            />
          );
        })}
      </div>
    </section>
  );
};
