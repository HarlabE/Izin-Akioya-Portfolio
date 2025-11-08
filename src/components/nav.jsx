// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';

// const Nav = () => {
//   useEffect(() => {
//     $(document).ready(function() {
//       if (typeof $.scrollIt !== 'undefined') {
//         $.scrollIt({
//           upKey: 38,         // key code to navigate to the next section
//           downKey: 40,       // key code to navigate to the previous section
//           easing: 'linear',  // the easing function for animation
//           scrollTime: 600,   // how long (in ms) the animation takes
//           activeClass: 'active', // class given to the active nav element
//           onPageChange: null, // function(pageIndex) that is called when page is changed
//           topOffset: 0     // offset (in px) for fixed top navigation
//         });
//       }
//     });
//   }, []);

//   return (
//     <div>
//        <nav className="navbar navbar1 navbar-expand navbar-light">
//           <div className='container'>
//             <div style={{ marginRight:"4rem"}} className="navbar-header">
//               <a className="navbar-brand" href="/">IZIN AKIOYA</a>
//             </div>
//             <button
// 					  type="button"
// 					  className="navbar-toggle collapsed"
// 					  data-toggle="collapse"
// 					  data-target="#bs-example-navbar-collapse-1"
// 					  aria-expanded="false"
// 					>
            
// 					  <span className="sr-only">Toggle navigation</span>
// 					  <span className="icon-bar"></span>
// 					  <span className="icon-bar"></span>
// 					  <span className="icon-bar"></span>
// 					</button>
//             <div
// 					className="collapse navbar-collapse"
// 					id="bs-example-navbar-collapse-1">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link to="/"
//                    className="nav-link active" data-scroll-nav="0" >Home
//                </Link>
//                 </li>
                
//                 <li className="nav-item">
//                   <Link to="/about"className="nav-link">About</Link>
//                 </li>
                
//                 <li className="nav-item">
//                   <a className="nav-link" href="https://www.linkedin.com/in/izinakioya/" aria-label="LinkedIn">
//                     <i className="fab fa-linkedin"></i>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="https://x.com/AkioyaIzin" aria-label="X (Twitter)">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//     </div>
//   );
// };

// export default Nav;







// {/* <nav className="navbar navbar1 navbar-expand-lg navbar-light">
//           <div className='container'>
//             <div style={{ marginRight: "66rem" }} className="navbar-header">
//               <a className="navbar-brand" href="/">IZIN AKIOYA</a>
//             </div>
//             <button
//               className="navbar-toggle"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
            
//               <span className="navbar-toggle-icon icon-bar"></span>
//               <span className="icon-bar"></span>
//               <span className="icon-bar"></span>
//               <span className="icon-bar"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link to="/"
//                    className="nav-link active" data-scroll-nav="0" >Home
//                </Link>
//                 </li>
                
//                 <li className="nav-item">
//                   <Link to="/about"className="nav-link">About</Link>
//                 </li>
                
//                 <li className="nav-item">
//                   <a className="nav-link" href="https://www.linkedin.com/in/izinakioya/" aria-label="LinkedIn">
//                     <i className="fab fa-linkedin"></i>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="https://x.com/AkioyaIzin" aria-label="X (Twitter)">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav> */}
