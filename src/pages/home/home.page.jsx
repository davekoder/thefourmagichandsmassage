import React from "react";
import Landing from "../../components/landing/landing.component";
import BackgroundSlider from "react-background-slider";

const Home = () => {
  const image1 = "https://gdurl.com/edg2";
  const image2 = "https://gdurl.com/VwWG";
  const image3 = "https://gdurl.com/yUFz";
  const image4 = "https://gdurl.com/dmEX";
  const image5 = "https://gdurl.com/AKgA";
  const image6 = "https://gdurl.com/wjuD";
  return (
    <div className='landing'>
      <BackgroundSlider
        images={[image1, image2, image3, image4, image5, image6]}
        duration={5}
        transition={1}
      />
      <Landing />
    </div>
  );
};

export default Home;
