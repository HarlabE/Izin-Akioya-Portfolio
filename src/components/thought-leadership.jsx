import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import image1 from "../img/ss/a2.jpg";
import image2 from "../img/ss/c1.jpg";
import image3 from "../img/ss/c2.jpg";
import image4 from "../img/ss/c3.jpg";
import image5 from "../img/ss/c4.jpg";
import image6 from "../img/ss/c5.jpg";
import image7 from "../img/ss/c6.jpg";
import image8 from "../img/ss/c7.jpg";
import image9 from "../img/ss/c8.jpg";
import image10 from "../img/ss/c9.jpg";

const Leadership = () => {
  const posts = [
    {
      id: 1,
      image: image5,
      link: "https://finance.yahoo.com/izin-akioya-revolutionizing-africa-logistics-102835186.html",
    },
    {
      id: 2,
      image: image2,
      link: "https://www.vanguardngr.com/2024/11/why-african-startups-need-mergers-acquisitions-to-succeed-entrepreneur-izin-akioya/",
    },
    {
      id: 3,
      image: image4,
      link: "https://businessday.ng/technology/article/mergers-acquisitions-key-to-unlocking-startups-potential-expert/",
    },
    {
      id: 4,
      image: image9,
      link: "https://daybreak.ng/nigerias-izin-akioya-launches-debut-books/",
    },
    {
      id: 5,
      image: image8,
      link: "https://www.vanguardngr.com/2024/11/why-african-startups-need-mergers-acquisitions-to-succeed-entrepreneur-izin-akioya/",
    },
    {
      id: 6,
      image: image7,
      link: "https://www.prunderground.com/izin-akioya-launches-two-books-mum-find-love-again-and-lili-based-on-the-science-of-identity-2/00257079/",
    },
    {
      id: 7,
      image: image3,
      link: "https://www.thisdaylive.com/index.php/2024/11/19/africas-startup-success-hinges-on-strategic-mergers-and-acquisitions-says-izin-akioya/",
    },
    {
      id: 8,
      image: image1,
      link: "https://businessday.ng/opinion/article/why-logistics-will-power-afcfta-and-africas-e-commerce-export-potential/",
    },
    {
      id: 9,
      image: image6,
      link: "https://lawire.com/izin-akioya-on-the-emerging-role-of-logistics-in-africa/",
    },
    {
      id: 10,
      image: image10,
      link: "https://www.vcare.international/podcast/episode/1d8fc7b2/169-export-and-trade-facilitation-in-africa",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    autoplayHoverPause: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="cont">
      <div className="section-head text-center">
        <h5 className="tit" style={{ marginBottom: "5rem;" }}>
          Thought Leadership
        </h5>
      </div>
      <Slider {...settings}>
        {posts.map((post, index) => (
          <div key={post.id} className="carousel-item">
            <a href={post.link}>
              <img src={post.image} alt={`Post ${post.id}`} loading="lazy" />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Leadership;
