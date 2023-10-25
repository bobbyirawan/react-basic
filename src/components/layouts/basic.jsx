import Button1 from "../atoms/Button";
import Button2 from "../atoms/Button2";
import Header from "../atoms/Header";

const BasicReact = () => {
  let names = ["bobby", "natasya", "pricillia", "irawan"];

  return (
    <>
      <Header name={"irawan"} />
      <div className="flex flex-col  gap-y-3">
        <ul>
          {names.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>

        <Button1 />
        <Button2 />
        <Button2 text={"buy two"} bgColor={"bg-[#50d71e]"} />
        <Button2 text={"buy three"} bgColor={"bg-sky-500"} />
      </div>
    </>
  );
};

export default BasicReact;
