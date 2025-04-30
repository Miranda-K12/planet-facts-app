import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Planet from "./Components/Planets/Planet";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.app_container}>
      <Header />
      <Routes>
        {/* Planet route */}
        <Route path="/planet/:planetName" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
