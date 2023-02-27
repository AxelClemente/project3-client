//********* TRANSPARENT HEADER ON SCROLL */

// import { useContext } from "react";
// import css from "./Header.module.scss";
// import { motion } from "framer-motion";
// import { headerVariants } from "../../utils/motion";
// import { getMenuStyles } from "../../utils/motion";
// import { BiMenuAltRight } from "react-icons/bi";
// import { useState, useRef } from "react";
// import useHeaderShadow from "../../hooks/useHeaderShadow";
// import useOutsideAlerter from "../../hooks/useOutsideAlerter";
// import { Link, useLocation } from "react-router-dom";
// import { AuthContext } from "../../context/auth.context";

// const Header = () => {
//   const [menuOpened, setMenuOpened] = useState(false);
//   const headerShadow = useHeaderShadow();
//   const menuRef = useRef();
//   const { isLoggedIn, logOutUser } = useContext(AuthContext);
//   const { pathname } = useLocation();

//   useOutsideAlerter({
//     menuRef,
//     setMenuOpened,
//   });

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="show"
//       variants={headerVariants}
//       viewport={{ once: false, amount: 0.25 }}
//       className={`paddings ${css.wrapper}`}
//       style={{ boxShadow: headerShadow }}
//     >
//       <div className={`flexCenter mb-4 innerWidth ${css.container}`}>
//         <Link to="/strolls">
//           <img src="images/Stroll2.png" alt="logo" width="100" height="100"/>
//         </Link>
      
//         <ul
//           ref={menuRef}
//           style={getMenuStyles(menuOpened)}
//           className={`flexCenter ${css.menu}`}
//         >
//           {pathname === '/' && (
//             <a href="/strolls">
//               <span className='text-customPrimary'>Enter App</span>
//             </a>
//           )}
//           {pathname === '/stroll' && (
//             <a href="/">
//               <span className='text-customPrimary'>Home</span>
//             </a>
//           )}

//           {isLoggedIn && (
//             <>
//               <Link to={"/"}>
//                 {" "}
//                 <button>Home</button>{" "}
//               </Link>

//               <Link to={"/users"}>
//                 {" "}
//                 <button>Profile</button>{" "}
//               </Link>

//               <Link to={"/"}>
//                 {" "}
//                 <button onClick={logOutUser}>Log out</button>
//               </Link>

//               <div className='flex items-center gap-6'>
//                 <Link to={"/users/:id/create"} className='bg-customBlue hover:bg-customSecondary px-4 py-3 rounded-lg transition' style={{ color: 'white' }}>Create</Link>
//               </div>
//             </>
//           )}
//           {!isLoggedIn && (
//             <>
//               {/* <Link to={"/"}>
//                 {" "}
//                 <button>Home</button>{" "}
//               </Link> */}

//               <div className='flex items-center gap-6'>
//                 <Link to={"/login"} className='hover:text-custom transition'>Log In</Link>
//                 <Link to={"/signup"} className='bg-customPrimary hover:bg-customSecondary px-4 py-3 rounded-lg transition' style={{ color: 'white' }}>Sign up</Link>
//               </div>
//             </>
//           )}
//         </ul>

//         <div
//           className={css.menuIcon}
//           onClick={() => setMenuOpened((prev) => !prev)}
//         >
//           <BiMenuAltRight size={30} />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Header;




//********* WHITE HEADER ON SCROLL */

import { useContext } from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import { getMenuStyles } from "../../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, useRef } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { headerShadow, headerBackground } = useHeaderShadow();
  const menuRef = useRef();
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const { pathname } = useLocation();
  const { boxShadow } = useHeaderShadow();
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow, backgroundColor: headerBackground }}
    >
      <div className={`flexCenter mb-4 innerWidth ${css.container}`}>
        <Link to="/strolls">
          <img src="images/Stroll.png" alt="logo" width="100" height="100"/>
        </Link>
      
        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          {pathname === '/' && (
            <a href="/strolls">
              <span className='text-customPrimary'>Enter App</span>
            </a>
          )}
          {pathname === '/stroll' && (
            <a href="/">
              <span className='text-customPrimary'>Home</span>
            </a>
          )}
          {isLoggedIn && (
            <>
              <Link to={"/"}>
                {" "}
                <button>Home</button>{" "}
              </Link>
              <Link to={"/users"}>
                {" "}
                <button>Profile</button>{" "}
              </Link>
              <Link to={"/"}>
                {" "}
                <button onClick={logOutUser}>Log out</button>
              </Link>
              <div className='flex items-center gap-6'>
                <Link to={"/users/:id/create"} className='bg-customBlue hover:bg-customSecondary px-4 py-3 rounded-lg transition' style={{ color: 'white' }}>Create</Link>
              </div>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to={"/"}>
                {" "}
                <button>Home</button>{" "}
              </Link>
              <div className='flex items-center gap-6'>
                <Link to={"/login"} className='hover:text-custom transition'>Log In</Link>
                <Link to={"/signup"} className='bg-customPrimary hover:bg-customSecondary px-4 py-3 rounded-lg transition' style={{ color: 'white' }}>Sign up</Link>
              </div>
            </>
          )}
        </ul>
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};
export default Header;


