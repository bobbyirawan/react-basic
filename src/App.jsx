import Button1 from "./components/Button";
import Header from "./components/Header";

function App() {
  let names = ["bobby", "natasya", "pricillia", "irawan"];

  return (
    <>
      <Header name={"irawan"} />
      <ul>
        {names.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>

      <Button1 />
    </>
  );
}

export default App;
