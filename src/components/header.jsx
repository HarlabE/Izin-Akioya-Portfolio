import { useEffect, useState } from "react";
import blurDesktopImageUrl from "../img/blurDesktop.webp";
import desktopImageUrl from "../img/CompressedBg.webp";
import mobileImageUrl from "../img/CompressedMobileBg.jpg";
import blurMobileImageUrl from "../img/MobileBlurBg.jpg";

const Header = () => {
  const mobileBreakpoint = 768;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(desktopImageUrl);
  const [blurBackgroundImage, setBlurBackgroundImage] =
    useState(blurDesktopImageUrl);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < mobileBreakpoint) {
        setBackgroundImageUrl(mobileImageUrl);
        setBlurBackgroundImage(blurMobileImageUrl);
      } else {
        setBackgroundImageUrl(desktopImageUrl);
        setBlurBackgroundImage(blurDesktopImageUrl);
      }
    };

    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);

  useEffect(() => {
    setIsImageLoaded(false);
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => setIsImageLoaded(true);
  }, [backgroundImageUrl]);

  const blurStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundImage: `url(${blurBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:
      window.innerWidth < mobileBreakpoint ? "center" : "initial",
    filter: "blur(2px)", // additional blur
    transition: "opacity 400ms ease-in-out",
    opacity: isImageLoaded ? 0 : 1,
    zIndex: 1,
  };

  const mainImageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:
      window.innerWidth < mobileBreakpoint ? "center" : "initial",
    transition: "opacity 400ms ease-in-out",
    opacity: isImageLoaded ? 1 : 0,
    zIndex: 2,
  };

  const containerStyle = {
    height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div
      style={containerStyle}
      id="home"
      data-scroll-index="0"
      data-stellar-background-ratio="0.5"
    >
      <div style={blurStyle} />
      <div style={mainImageStyle} />
      {/* Content of your header */}
    </div>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <div>
//         <header className='header' id="home" data-scroll-index="0" data-stellar-background-ratio="0.5">

//         <div className="wrapper">
//           <div className='content'>
//           <ul>
//             <li><span>Storyteller</span></li>
//             <li><span>Multidisciplinary</span></li>
//             <li><span>Growth Leader</span></li>
//           </ul>
//           </div>
//         </div>
// 			</header>
//     </div>
//   )
// }
