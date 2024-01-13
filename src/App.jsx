import { useEffect } from "react";
import Header from "./components/Header";
import Colors from "./components/Colors";
import "./App.css";

function GroupColor() {
  return (
    <div className="m-4">
      {[...Array(5)].map((e, i) => (
        <Colors key={i} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="">
      <Header />
      <GroupColor />
      <button onClick={() => window.location.reload(false)}
      className="button-name text-center m-4"> Regenerate</button>
    </div>
  );
}

export default App;
