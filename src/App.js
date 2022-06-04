import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateDay from "./components/CreateDay";
import CreateWord from "./components/CreateWord";

import Day from "./components/Day";
import DayList from "./components/DayList";
import EmptyPage from "./components/EmptyPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/createWord" element={<CreateWord />} />
          <Route path="/createDay" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
