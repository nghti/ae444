import classes from "./styles.module.scss";

import {
  menu01,
  menu02,
  menu03,
  menu04,
  menu05,
  menu06,
  menu07,
  menu08,
  menu09,
  menu10,
  menu11,
  menu12,
  menu01_1,
  menu01_2,
  menu01_3,
  menu01_4,
  menu01_5,
  menu02_1,
  menu02_2,
  menu02_3,
  menu02_4,
  menu02_5,
  menu03_1,
  menu03_2,
  menu03_3,
  menu03_4,
  menu03_5,
  menu03_6,
  menu04_1,
  menu04_2,
  menu04_3,
  menu05_1,
  menu05_2,
  menu05_3,
  menu05_4,
  menu05_5,
  menu06_1,
  menu06_2,
  menu06_3,
  menu06_4,
  menu06_5,
  menu07_1,
  menu07_2,
  menu07_3,
  menu07_4,
  menu07_5,
  menu08_1,
  menu08_2,
} from "../Image/menu/menu";

function Header() {
  return (
    <div className="py-4 bg-white relative">
      <div className="w-[1200px] m-auto flex gap-6 justify-center">
        <div className="m-auto block">
          <img
            src="https://img.gashinzo.com/img/static/desktop/brand/ae888/logo.png"
            alt=""
            className="h-[50px]"
          />
        </div>
        <nav className={`flex gap-5 ${classes.nav}`}>
          <ul>
            <li>
              <a href="#">
                <img src={menu01} alt="" width={40} height={40} />
                <span>THỂ THAO</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={menu01_1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu01_2} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu01_3} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu01_4} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu01_5} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src={menu02} alt="" width={40} height={40} />
                <span>SÒNG BÀI</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={menu02_1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu02_2} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu02_3} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu02_4} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu02_5} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src={menu03} alt="" width={40} height={40} />
                <span>SLOTS</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={menu03_1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu03_2} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu03_4} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu03_5} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu03_6} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src={menu04} alt="" width={40} height={40} />
                <span>ĐÁ GÀ</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={menu04_1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu04_2} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu04_3} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src={menu05} alt="" width={40} height={40} />
                <span>GAME BÀI</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={menu05_1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu05_2} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu05_3} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu05_4} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu05_5} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src={menu06} alt="" width={40} height={40} />
                <span>BẮN CÁ</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={menu06_1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu06_2} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu06_3} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu06_4} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu06_5} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src={menu07} alt="" width={40} height={40} />
                <span>XỔ SỐ</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={menu07_1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu07_2} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu07_3} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu07_4} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu07_5} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src={menu08} alt="" width={40} height={40} />
                <span>E-SPORTS</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img src={menu08_1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={menu08_2} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img src={menu09} alt="" width={40} height={40} />
                <span>KHUYẾN MÃI</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={menu10} alt="" width={40} height={40} />
                <span>VIP</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={menu11} alt="" width={40} height={40} />
                <span>ĐẠI LÝ NGOÀI</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={menu12} alt="" width={40} height={40} />
                <span>APP</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <ul className="flex gap-6 justify-center mt-4">
        <div>
          <img
            src="https://img.gashinzo.com/img/static/desktop/brand/ae888/logo.png"
            alt=""
            width={900 / 4}
            height={244 / 4}
          />
        </div>
        <div className="flex gap-5 ">
          <div className={`${classes.dropdown}`}>
            <button className={classes.dropbtn}>
              <img
                src="https://img.gashinzo.com/img/static/ae888/2023/navicon-sports.png"
                alt=""
                width={40}
                height={40}
              />
              <p>THỂ THAO</p>
            </button>
            <div className={classes.dropdownContent}>
              <a href="#">
                <img src="https://img.gashinzo.com/img/static/desktop/sub-menu/sub-sports-saba.png" />
              </a>
              <a href="#">
                <img src="https://img.gashinzo.com/img/static/desktop/sub-menu/sub-sports-saba.png" />
              </a>
              <a href="#">
                <img src="https://img.gashinzo.com/img/static/desktop/sub-menu/sub-sports-saba.png" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-live.png"
              alt=""
              width={40}
              height={40}
            />
            <li>SÒNG BÀI</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-egame.png"
              alt=""
              width={40}
              height={40}
            />
            <li>SLOTS</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-cock.png"
              alt=""
              width={40}
              height={40}
            />
            <li>ĐÁ GÀ</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-chess.png"
              alt=""
              width={40}
              height={40}
            />
            <li>GAME BÀI</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-mpg.png"
              alt=""
              width={40}
              height={40}
            />
            <li>BẮN CÁ</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-lotto.png"
              alt=""
              width={40}
              height={40}
            />
            <li>XỔ SỐ</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="	https://img.gashinzo.com/img/static/ae888/2023/navicon-esports.png"
              alt=""
              width={40}
              height={40}
            />
            <li>E-SPORTS</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-promo.png"
              alt=""
              width={40}
              height={40}
            />
            <li>KHUYẾN MÃI</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-vip.png"
              alt=""
              width={40}
              height={40}
            />
            <li>VIP</li>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.gashinzo.com/img/static/ae888/2023/navicon-daily.png"
              alt=""
              width={40}
              height={40}
            />
            <li>ĐẠI LÝ NGOÀI</li>
          </div>
          <div>
            <img
              src="	https://img.gashinzo.com/img/static/ae888/2023/mobile/navicon-app.png"
              alt=""
              width={40}
              height={40}
            />
            <li>APP</li>
          </div>
        </div>
      </ul> */}
    </div>
  );
}
export default Header;
