import data from "../../data/data.json";
import { OverviewCard, OverviewTodayCard } from "./OverviewCard";

const convertNumberToK = (number) => {
  if (number >= 10000) {
    return Math.floor(number / 1000) + "k";
  } else {
    return number;
  }
};
export const OverviewContainer = () => {
  return (
    <section className="max-w-[1440px] flex flex-wrap absolute left-0 right-0 mx-auto top-[191px] place-content-center">
      {data.overview.map((object) => (
        <OverviewCard
          key={object.id}
          user={object.user}
          network={object.network}
          audience={convertNumberToK(object.audience)}
          audienceType={object.audienceType}
          today={object.today}
          isUp={object.isUp}
        />
      ))}
    </section>
  );
};

console.log(data["overview-today"]);
export const OverviewTodayContainer = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-[27px] text-dark-grayish-blue ml-[60px]">
        Overview Today
      </h2>
      <div className="flex flex-wrap">
        {data["overview-today"].map((object) => (
          <OverviewTodayCard
            key={object.id}
            network={object.network}
            statsType={object.statsType}
            stats={convertNumberToK(object.stats)}
            porcentage={object.porcentage}
            isUp={object.isUp}
          />
        ))}
      </div>
    </section>
  );
};
