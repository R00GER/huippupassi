import { useEffect, useState } from "react";
import Camper from "./components/Camper";
import Navigation from "./components/Navigation";
import Main from "./views/Main";
import ServicesContainer from "./views/ServicesContainer";

const App = () => {
  const [showNavigationLinks, setShowNavigationLinks] = useState(true);

  const getScrollPosition = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    if (scrolled > 0) {
      setShowNavigationLinks(false);
    } else {
      setShowNavigationLinks(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPosition);

    return () => window.removeEventListener("scroll", getScrollPosition);
  });

  return (
    <div className="App">
      <Navigation
        showNavigationLinks={showNavigationLinks}
        setShowNavigationLinks={setShowNavigationLinks}
      />
      <Main />
      <div style={{ width: "100%", height: "4rem", background: "#fff" }} />
      <ServicesContainer />
    </div>
  );
};

export default App;
