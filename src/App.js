import { Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ChooseWhoScreen from "./components/ChooseWhoScreen";
import ProjectionScreen from "./components/ProjectionScreen";
import SecondScreen from "./components/SecondScreen";
import Layout from "./UI/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/choosewho" exact element={<ChooseWhoScreen />} />
        <Route path="/secondScreen" exact element={<SecondScreen />} />
        <Route path="/projection" exact element={<ProjectionScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;
