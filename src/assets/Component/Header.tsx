import classes from "./styles.module.scss";

function Header() {
  return (
    <div className="py-4 bg-white relative">
      <div className="w-[1200px] m-auto flex gap-6 justify-center">
        <div>
          <img
            src="https://img.gashinzo.com/img/static/desktop/brand/ae888/logo.png"
            alt=""
            width={900 / 4}
            height={244 / 4}
          />
        </div>
        <nav className={`flex gap-5 ${classes.nav}`}>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://img.gashinzo.com/img/static/ae888/2023/navicon-sports.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <span>THỂ THAO</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://img.gashinzo.com/img/static/ae888/2023/navicon-sports.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <span>THỂ THAO</span>
              </a>
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="https://img.gashinzo.com/img/static/desktop/sub-menu/sub-sports-saba.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://img.gashinzo.com/img/static/desktop/sub-menu/sub-sports-saba.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://img.gashinzo.com/img/static/desktop/sub-menu/sub-sports-saba.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://img.gashinzo.com/img/static/desktop/sub-menu/sub-sports-saba.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://img.gashinzo.com/img/static/desktop/sub-menu/sub-sports-saba.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://img.gashinzo.com/img/static/ae888/2023/navicon-sports.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <span>THỂ THAO</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://img.gashinzo.com/img/static/ae888/2023/navicon-sports.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <span>THỂ THAO</span>
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
