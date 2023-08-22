import { useState } from "react";
import CharInfo from "./components/CharInfo";
import CharList from "./components/CharList";
import Header from "./components/Header";

const App = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row my-10 justify-between gap-8">
          <div className="lg:order-2">
            <CharInfo charId={selectedChar} />
          </div>
          <div className="lg:order-1">
            <CharList onCharSelected={onCharSelected} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
