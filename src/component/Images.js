import arr1 from "../images/arr1.jpg";
import arr2 from "../images/arr2.jpg";
import arr3 from "../images/arr3.jpg";
import arr4 from "../images/arr4.jpg";
import arr5 from "../images/arr5.jpg";
import arr6 from "../images/arr6.jpg";
import arr7 from "../images/arr7.jpg";
import arr8 from "../images/arr8.jpg";
import arr9 from "../images/arr9.jpg";
import arr10 from "../images/arr10.jpg";
import arr11 from "../images/arr11.jpg";
import arr12 from "../images/arr12.jpg";
import arr13 from "../images/arr13.jpg";

const Images = ({ number, className }) => {
  const ImgArr = [
    { src: arr1, title: "Minerva University, CA" },
    { src: arr2, title: "Pine, CA" },
    { src: arr3, title: "Union Square, CA" },
    { src: arr4, title: "UC Berkeley, CA" },
    { src: arr5, title: "Salesforce Tower, CA" },
    { src: arr6, title: "Salesforce Park, CA" },
    { src: arr7, title: "Bus Fountain, CA" },
    { src: arr8, title: "Alemany Farms, CA" },
    { src: arr9, title: "Sao Paulo, CA" },
    { src: arr10, title: "Oakland, CA" },
    { src: arr11, title: "Minerva University, CA" },
    { src: arr12, title: "Winterwalk, CA" },
    { src: arr13, title: "Winterwalk, CA" },
  ];
  return (
    <>
      <img className={className} src={ImgArr[number].src} alt="" />
      <div className="vessel">
        <p>{ImgArr[number].title}</p>
      </div>
    </>
  );
};

export default Images;
