import React, { useEffect, useRef, useState } from "react";
import tawkTo from "tawkto-react";
import Navigation from "./components/Navigation";
import Hero from "./views/Hero";
import Services from "./views/Services";
import PhoneFab from "./components/PhoneFab";
import ChatFab from "./components/ChatFab";
import ViewContainer from "./components/ViewContainer";
import Contact from "./views/Contact";
import OurPartners from "./components/OurPartners";
import Testimonials from "./views/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const [showNavigationLinks, setShowNavigationLinks] = useState(true);

  const PROPERTY_ID = process.env.REACT_APP_PROPERTY_ID;
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    tawkTo(PROPERTY_ID, KEY);
  }, [PROPERTY_ID, KEY]);

  const refs = {
    heroRef: useRef(null),
    contactRef: useRef(null),
    servicesRef: useRef(null),
  };

  const scrollToView = (ref) =>
    refs[ref].current &&
    refs[ref].current.scrollIntoView({ behavior: "smooth" });

  const views = [
    {
      key: "hero",
      component: <Hero scrollToView={scrollToView} ref={refs.heroRef} />,
      viewProps: {},
    },
    {
      key: "services",
      component: <Services ref={refs.servicesRef} />,
      viewProps: { fullHeight: true },
    },
    {
      key: "ourPartners",
      component: <OurPartners />,
      viewProps: {},
    },
    {
      key: "testiMonials",
      component: <Testimonials />,
      viewProps: { customHeight: "50vh", padding: true },
    },
    {
      key: "contact",
      component: <Contact ref={refs.contactRef} />,
      viewProps: {},
    },
  ];

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
      {views.map(({ key, component, viewProps }) => (
        <ViewContainer key={key} {...viewProps}>
          {component}
        </ViewContainer>
      ))}
      <Footer scrollToView={scrollToView} />
      <PhoneFab />
      <ChatFab />
    </div>
  );
};

export default App;
