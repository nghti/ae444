import React, { Component } from "react";
import Slider from "react-slick";
import Icon_pre from "../Image/icon/pre.png";
import Icon_next from "../Image/icon/next.png";
import Img1 from  "../Image/Slide/img1.jpg"


function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "29px",
        zIndex: 9,
        backgroundImage: `url(${Icon_next})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "70px",
        height: "70px",
        opacity: 0.6,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "29px",
        zIndex: 9,
        backgroundImage: `url(${Icon_pre})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "70px",
        height: "70px",
        opacity: 0.6,
      }}
      onClick={onClick}
    />
  );
}

function Content1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="flex justify-between bg-black items-center absolute w-full">
        <div className="flex ml-32 items-center gap-2">
          <img src="src/assets/Image/menu-4-16.png" alt="" width={25} />
        </div>
        <div className="flex gap-2 mr-32">
          <button className="bg-[#ed642d]">Đăng nhập</button>
          <button className="bg-[#b7281d]">Đăng ký</button>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <img
            src={Img1}
            alt=""
          />
        </div>
        <div>
          <img
            src="https://img.gashinzo.com/img/ae888/ads/661f5077-df1a-4d19-a853-c5f7d975d525.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://img.gashinzo.com/img/ae888/ads/661f5077-df1a-4d19-a853-c5f7d975d525.jpg"
            alt=""
          />
        </div>
      </Slider>
    </>
  );
}
export default Content1;
