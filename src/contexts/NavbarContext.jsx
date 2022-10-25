// import { createContext, useState } from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// export const NavbarContext = createContext({
//   main: false,
//   setMain: () => {}
// });

// export const NavbarProvider = ({ children }) => {
//   const [main, setMain] = useState(false);
//   const { pathname } = useLocation();

//   const value = {
//     main,
//     setMain
//   };
//   return (
//     <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
//   );
// };
