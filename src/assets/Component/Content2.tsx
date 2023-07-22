import Slider from "react-slick";
import Bghome from "../Image/bg-home-sports.jpg";

import { slide_2_1, slide_2_2, slide_2_3, slide_2_4 } from "../Image";
import classes from "./styles.module.scss";

function Content2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-[1200px] m-auto">
        <Slider
          className={`flex gap-4 justify-center ${classes.slider2}`}
          {...settings}
        >
          <div>
            <img src={slide_2_1} alt="" />
          </div>
          <div>
            <img src={slide_2_2} alt="" />
          </div>
          <div>
            <img src={slide_2_3} alt="" />
          </div>
          <div>
            <img src={slide_2_4} alt="" />
          </div>
        </Slider>
      </div>
      <div className={`flex flex-col ${classes.bgRace}`}>
        <div className="flex w-[1200px] ml-auto mr-auto mb-4 gap-4 h-[100%] items-end">
          <div
            className={`bg-red-500 border rounded shadow-sm p-4 ${classes.bg3}`}
          >
            <div>
              <h3 className="text-sm mt-2 font-normal text-black">*WNBA</h3>
            </div>
            <div>
              <div className="flex items-end gap-2 mt-4">
                <div>
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src="https://cmbi.licimg.com/TeamImg/team_flag_home.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                    <p className="text-xs">Minnesota Lynx (W)</p>
                    <button className="text-white bg-black w-[90px] h-[30px] p-0">
                      73
                    </button>
                  </div>
                </div>
                <div className="">
                  <p>07/21 07:00(GMT +7:00)</p>
                  <h3 className="text-[21px] font-bold text-black mt-4 mb-4">
                    VS
                  </h3>
                  <button className="text-white bg-[#ed642d] w-[90px] h-[30px] p-0">
                    Cược Ngay
                  </button>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://cmbi.licimg.com/TeamImg/team_flag_away.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                    <p className="text-xs">Los Angeles Sparks (W)</p>
                    <button className="text-white bg-black w-[90px] h-[30px] p-0">
                      70
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-red-500 border rounded shadow-sm p-4 ${classes.bg3}`}
          >
            <div>
              <h3 className="text-sm mt-2 font-normal text-black">*WNBA</h3>
            </div>
            <div>
              <div className="flex items-end gap-2 mt-4">
                <div>
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src="https://cmbi.licimg.com/TeamImg/team_flag_home.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                    <p className="text-xs">Minnesota Lynx (W)</p>
                    <button className="text-white bg-black w-[90px] h-[30px] p-0">
                      73
                    </button>
                  </div>
                </div>
                <div className="">
                  <p>07/21 07:00(GMT +7:00)</p>
                  <h3 className="text-[21px] font-bold text-black mt-4 mb-4">
                    VS
                  </h3>
                  <button className="text-white bg-[#ed642d] w-[90px] h-[30px] p-0">
                    Cược Ngay
                  </button>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://cmbi.licimg.com/TeamImg/team_flag_away.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                    <p className="text-xs">Los Angeles Sparks (W)</p>
                    <button className="text-white bg-black w-[90px] h-[30px] p-0">
                      70
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-red-500 border rounded shadow-sm p-4 ${classes.bg3}`}
          >
            <div>
              <h3 className="text-sm mt-2 font-normal text-black">*WNBA</h3>
            </div>
            <div>
              <div className="flex items-end gap-2 mt-4">
                <div>
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src="https://cmbi.licimg.com/TeamImg/team_flag_home.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                    <p className="text-xs">Minnesota Lynx (W)</p>
                    <button className="text-white bg-black w-[90px] h-[30px] p-0">
                      73
                    </button>
                  </div>
                </div>
                <div className="">
                  <p>07/21 07:00(GMT +7:00)</p>
                  <h3 className="text-[21px] font-bold text-black mt-4 mb-4">
                    VS
                  </h3>
                  <button className="text-white bg-[#ed642d] w-[90px] h-[30px] p-0">
                    Cược Ngay
                  </button>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://cmbi.licimg.com/TeamImg/team_flag_away.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                    <p className="text-xs">Los Angeles Sparks (W)</p>
                    <button className="text-white bg-black w-[90px] h-[30px] p-0">
                      70
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[1200px] m-auto justify-between mt-8">
        <p className="text-2xl">Hot Games</p>
        <p className="text[#333] font-semibold text-sm">Nhấn xem chi tiết </p>
      </div>
      <div>
        <p className="text-[#c30d01] text-[25px] font-semibold mt-3 mb-4">
          CHÀO MỪNG ĐẾN VỚI AE888
        </p>
      </div>
      <div className="flex w-[1200px] m-auto justify-between relative">
        <div>
          <img
            src="https://img.gashinzo.com/img/static/ae888/2023/btmb-01.jpg"
            alt=""
            width={261}
            height={201}
          />
          <h3 className={`${classes.Deposits} text-[#f6ae1f]`}>
            TẠO TÀI KHOẢN
          </h3>
        </div>
        <div>
          <img
            src="https://img.gashinzo.com/img/static/ae888/2023/btmb-02.jpg"
            alt=""
            width={261}
            height={201}
          />
          <h3 className={`${classes.Deposits}  text-[#f8721b]`}>
            TIẾN HÀNH NẠP TIỀN
          </h3>
        </div>
        <div>
          <img
            src="https://img.gashinzo.com/img/static/ae888/2023/btmb-03.jpg"
            alt=""
            width={261}
            height={201}
          />
          <h3 className={`${classes.Deposits}  text-[#f93517]`}>
            BẮT ĐẦU KIẾM TIỀN
          </h3>
        </div>
        <div>
          <img
            src="https://img.gashinzo.com/img/static/ae888/2023/btmb-04.jpg"
            alt=""
            width={261}
            height={201}
          />
          <h3 className={`${classes.Deposits}  text-[#fa0012]`}>
            TIẾN HÀNH NHẬN THƯỞNG
          </h3>
        </div>
      </div>
    </>
  );
}
export default Content2;
