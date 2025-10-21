import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Avatar, Preview } from "./components";

const App = () => {
  const [showPreview, setShowPreview] = useState(true);
  
  const handleContinue = () => {
    setShowPreview(false);
  };
  
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      {showPreview ? (
        <Preview onContinue={handleContinue} />
      ) : (
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
            {/* <Avatar /> */}
          </div>
          <About />
          {/* <Experience /> */}
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
