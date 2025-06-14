import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" bg-black">
      <Toaster />
      <Navbar />
      <HomePage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
