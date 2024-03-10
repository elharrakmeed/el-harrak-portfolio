import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../partials/header/header";
import Card from "../partials/card/card";
import Navbar from "../partials/navbar/navbar";
import About from '../partials/About/about';
import Resume from '../partials/Resume/resume';
import Works from '../partials/Works/works';
import Contact from '../partials/Contact/contact';
import Footer from "../partials/footer/footer";

export default function AppRouter() {
  const [switchPath, setSwitchPath] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="parentSection">
                  <Card />
                  <div className="parentSectionContentSwitcher">
                  <Navbar onSwitch={(value) => setSwitchPath(value)} />
                  {
                      (() => {
                      switch (switchPath) {
                        case 'about':
                          return <About />;
                          case 'resume':
                              return <Resume />;
                              case 'works':
                                  return <Works />;
                                  case 'contact':
                                      return <Contact />;
                                      default:
                                          return <About />;
                                        }
                                    })()
                                }
                    </div>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
            <Footer />
    </>
  );
}
