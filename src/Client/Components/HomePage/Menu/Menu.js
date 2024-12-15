import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MdPhoneIphone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaTabletAlt, FaHeadphonesAlt, FaLaptop, FaDesktop } from "react-icons/fa";
import { IoWatch } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {Link} from "react-router-dom";
function Menu () {
    return(
        <div>
            <div className="menu-container">
                <div className="menu-tree">
                    <Link to="/phoneCategory" className="label-menu-tree">
                        <div className="left-content">
                            <div className="icon-tree"><MdPhoneIphone /></div>
                            <div className="content-tree">Điện thoại</div>
                        </div>
                        <div className="right-content">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                    <Link to="/tabletCategory" className="label-menu-tree">
                        <div className="left-content">
                            <div className="icon-tree"><FaTabletAlt /></div>
                            <div className="content-tree">Tablet</div>
                        </div>
                        <div className="right-content">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                    <Link to="/soundCategory" className="label-menu-tree">
                        <div className="left-content">
                            <div className="icon-tree"><FaHeadphonesAlt /></div>
                            <div className="content-tree"> Âm thanh</div>
                        </div>
                        <div className="right-content">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                    <Link to="/watchCategory" className="label-menu-tree">
                        <div className="left-content">
                            <div className="icon-tree"><IoWatch /></div>
                            <div className="content-tree">Đồng hồ</div>
                        </div>
                        <div className="right-content">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                    <Link to="/laptopCategory" className="label-menu-tree">
                        <div className="left-content">
                            <div className="icon-tree"><FaLaptop /></div>
                            <div className="content-tree">Laptop</div>
                        </div>
                        <div className="right-content">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                    <Link to="/ScreenCategory" className="label-menu-tree">
                        <div className="left-content">
                            <div className="icon-tree"><FaDesktop /></div>
                            <div className="content-tree">Màn hình</div>
                        </div>
                        <div className="right-content">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                    <Link to="/tvCategory" className="label-menu-tree">
                        <div className="left-content">
                            <div className="icon-tree"><PiTelevisionSimpleBold/></div>
                            <div className="content-tree">Tivi</div>
                        </div>
                        <div className="right-content">
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Menu;