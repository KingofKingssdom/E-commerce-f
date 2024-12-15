import React from "react";
import './CommonAdmin.css'
import { BiCategory } from "react-icons/bi";
import { FaProductHunt, FaBorderAll,FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <div className="container-nav">
                <div className="content-nav">
                    <h4> Quản lý bán hàng</h4>
                    <hr/>
                    <Link to="/admin/dashboard">
                        <div className="select-nav">
                            <div className="icon-nav">
                                <BiCategory/>
                            </div>
                            <h5>Dashboard</h5>
                        </div>
                    </Link>
                    <Link to="/admin/productManager">
                        <div className="select-nav">
                            <div className="icon-nav">
                                <FaProductHunt/>
                            </div>
                            <h5>Quản lý sản phẩm</h5>
                        </div>
                    </Link>
                    <div className="select-nav">
                        <div className="icon-nav">
                            <FaBorderAll/>
                        </div>
                        <h5>Quản lý đơn hàng</h5>
                    </div>
                    <div className="select-nav">
                        <div className="icon-nav">
                            <FaRegUser/>
                        </div>
                        <h5>Quản lý user</h5>
                    </div>
                    <Link to="/messenger">
                        <div className="select-nav">
                            <div className="icon-nav">
                                <FaRegUser/>
                            </div>
                            <h5>Thông báo tin nhắn</h5>
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default Navbar;