
import './Common.css'
function Footer () {
    return(
        <div>
            <footer>
                <div className="cps-container">
                    <div className="row">
                        <div className="col support">
                            <h6>Tổng đài hỗ trợ miễn phí</h6>
                            <p>Gọi mua hàng <b>1800.2097</b> (7h30 - 22h00)</p>
                            <p>Gọi khiếu nại <b>1800.2063</b> (8h00 - 21h30)</p>
                            <p>Gọi bảo hành <b>1800.2064</b> (8h00 - 21h00)</p>
                            <h6>Phương thức thanh toán</h6>
                            <div className="imagePay">
                                <img src="image/Apple_Pay-Logo.wine.png" alt="applePay"/>
                                <img src="image/vnpay.png" alt="vnPay"/>
                                <img src="image/MoMoPay.png" alt="momoPay"/>
                                <img src="image/onepay.jpg" alt="onePay"/>
                                <img src="image/alepay.png" alt="alePay"/>
                            </div>
                        </div>
                        <div className="col">
                            <h6>Thông tin và chính sách</h6>
                            <div className='list-f'>
                                <p>Mua hàng và thanh toán Online</p>
                                <p>Mua hàng và trả góp Online</p>
                                <p>Mua hàng và trả góp bằng thẻ tín dụng</p>
                                <p>Chính sách giao hàng</p>
                                <p>Tra điểm tại app Hmember</p>
                                <p>Xem ưu đãi tại app Hmember</p>
                                <p>Tra thông tin bảo hành</p>
                                <p>Tra cứu hóa đơn điện tử</p>
                                <p>Tra cứu hóa đơn mua hàng</p>
                                <p>Trung tâm bảo hàng chính hãng</p>
                            </div>
                        </div>
                        <div className="col">
                            <h6>Dịch vụ và các  thông tin khác</h6>
                            <div className='list-f'>
                                <p>khách hàng doanh nghiệp</p>
                                <p>Ưu đãi thanh toán</p>
                                <p>Quy chế hoạt động</p>
                                <p>Chính sách bảo mật thông tin cá nhân</p>
                                <p>Chính sách bảo hành</p>
                                <p>Liên hệ hợp tác kinh doanh</p>
                                <p>Tuyển dụng</p>
                                <p>Dịch vụ bảo hành mở rộng</p>

                            </div>
                        </div>
                        <div className="col">
                            Kết nối với chúng tôi
                        </div>

                    </div>
                </div>
            </footer>



        </div>
    )
}
export default Footer;