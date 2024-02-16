import "./experience.scss";
import workList from "../../data/work-list.json";
import { useCallback } from "react";
import { getMonthByName } from "../../helpers/getMonthByName";
import { toFixedNoRounding } from "../../helpers/toFixedNoRounding";

const Experience = () => {
  const calculateDate = useCallback((startDate, endDate) => {
    try {
      let endDateTimestamp = Date.now();
      const startDateArray = startDate.split(" ");
      if (startDateArray.length > 4) {
        endDateTimestamp = new Date(
          startDateArray[4],
          getMonthByName(startDateArray[3])
        ).getTime();
      }
      const startDateTimestamp = new Date(
        startDateArray[1],
        getMonthByName(startDateArray[0])
      ).getTime();
      const year =
        (endDateTimestamp - startDateTimestamp) / 1000 / 60 / 60 / 24 / 365;
      const month =
        (endDateTimestamp - startDateTimestamp) / 1000 / 60 / 60 / 24 / 30;
      const calculatedMonth =
        toFixedNoRounding(month, 0) - toFixedNoRounding(year, 0) * 12;

      if (year >= 1)
        return `(${toFixedNoRounding(year, 0)} year${year >= 2 ? "s" : ""}${
          calculatedMonth !== 0 ? ` ${calculatedMonth} month` : ""
        })`;

      return `(${toFixedNoRounding(month, 0)} month)`;
    } catch (e) {
      console.log(e);
      return "";
    }
  }, []);

  return (
    <div className="container experience-section">
      <div className="wrapper">
        <h2 className="black title">
          Ex<i>p</i>erience
        </h2>
        {workList.map((work, index) => (
          <div key={index} className="work-item flex justify-between">
            <p className="p30 work-title">{work.title}</p>
            <div className="flex description-wrapper justify-between">
              <div>
                <p className="p15">Company: </p>
                <p className="p15">Technology: </p>
                <br />
                <p className="p15">Terms: </p>
              </div>
              <div className="company-description">
                <p className="p15 white-main">{work.company}</p>
                <p className="p15 white-main">{work.description}</p>
                <p className="p15 white-main">{work.technology}</p>
                <p className="p15 white-main">
                  {work.terms} {calculateDate(work.terms)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
