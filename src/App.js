// import { Routes, Route, useLocation } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
// import { lightTheme } from "./components/Themes";
// import { AnimatePresence } from "framer-motion";
// import GlobalStyle from "./globalStyles";

// //Components
// import Main from "./components/Main";
// import AboutPage from "./components/AboutPage";
// import BlogPage from "./components/BlogPage";
// import WorkPage from "./components/WorkPage";
// import MySkillsPage from "./components/MySkillsPage";
// import PricePage from "./components/PricePage";
// import RestaurantPage from "./worktemplates/RestaurantPage";


// // import SoundBar from "./subComponents/SoundBar";

// function App() {
//   const location = useLocation();
//   return (
//     <>
//       <GlobalStyle />

//       <ThemeProvider theme={lightTheme}>
//         {/* <SoundBar /> */}

//         {/* For framer-motion animation on page change! */}
//         {/* Changed prop from exitBefore to mode */}
//         <AnimatePresence mode='wait'>
//           {/* Changed Switch to Routes */}

//           <Routes key={location.pathname} location={location} >
//             {/* Changed component to element */}

//             <Route path="/" element={<Main />} />

//             <Route path="/about" element={<AboutPage />} />

//             <Route path="/price" element={<PricePage />} />

//             <Route path="/work" element={<WorkPage />} />

//             <Route path="/skills" element={<MySkillsPage />} />

//             <Route path="/restaurant" component={RestaurantPage} />
//             {/* Below is to catch all the other routes and send the user to main component,
// you can add custom 404 component or message instead of Main component*/}
//             <Route path="*" element={<Main />} />
//           </Routes>
//         </AnimatePresence>
//       </ThemeProvider>``
//     </>
//   );
// }

// export default App;



import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

// Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
// import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import PricePage from "./components/PricePage";
import RestaurantPage from "./worktemplates/RestaurantPage";
import FurniturePage from "./worktemplates/FurniturePage";
import FitnessPage from "./worktemplates/FitnessPage";
import EcommercePage from "./worktemplates/EcommercePage";
import BakeryPage from "./worktemplates/BakeryPage";
import ElectronicsPage from "./worktemplates/ElectronicsPage";


// import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        {/* <SoundBar /> */}

        {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        <AnimatePresence mode='wait'>
          {/* Changed Switch to Routes */}
          <Routes key={location.pathname} location={location}>
            {/* Changed component to element */}
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/furniture" element={<FurniturePage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/ecommerce" element={<EcommercePage />} />
            <Route path="/bakery" element={<BakeryPage/>} />
            <Route path="/electronics" element={<ElectronicsPage/>} />
            {/* Below is to catch all the other routes and send the user to main component,
            you can add custom 404 component or message instead of Main component */}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
