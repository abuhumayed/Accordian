import Accordian from "./Accordian";
import data from "../data";

const FAQ = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      {data.map((dataItem) => (
        <Accordian
          question={dataItem.question}
          answer={dataItem.answer}
          key={dataItem.id}
        />
      ))}
    </div>
  );
};

export default FAQ;
