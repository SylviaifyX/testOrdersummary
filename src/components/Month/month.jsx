import { useEffect } from "react";

function Month({ handleChange, handleFilter, period }) {
  useEffect(() => {
    handleFilter();
  }, [period]);

  return (
    <div className="flex pl-[10px] pr-[10px]  p-2.5 items-center flex-wrap justify-start gap-x-2 gap-y-3 bg-red-50  md:pl-5 md:pr-8">
      <Button handler={() => handleChange("")}>All</Button>
      <Button handler={() => handleChange("thisWeek")}>A week</Button>
      <Button handler={() => handleChange("lastThreeMonths")}>1-3 month</Button>
      <Button handler={() => handleChange("lastSixMonths")}> Last 6 months</Button>
    </div>
  );
}

export default Month;

const Button = ({ handler, children }) => {
  return (
    <button className="text-white bg-cyan-900 py-1 px-2 rounded-sm hover:bg-gray-600" onClick={handler}>
      {children}
    </button>
  );
};
