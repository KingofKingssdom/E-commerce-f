import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
function ViewScreenDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [screenSpec, setScreenSpec] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const productResponse = await fetch(`http://localhost:8080/product/${productId}`);
                if (!productResponse.ok) {
                    throw new Error(`HTTP error! Status: ${productResponse.status}`);
                }
                const productData = await productResponse.json();
                setProduct(productData);

                const specResponse = await fetch(`http://localhost:8080/screen/getScreen/${productId}`);
                if (!specResponse.ok){
                    throw new Error(`HTTP error! Status: ${specResponse.status}`)
                }
                const specData = await specResponse.json();
                setScreenSpec(specData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!product) {
        return <div>Không tìm thấy sản phẩm.</div>
    }
    if(!screenSpec) {
        return <div>Không tìm thấy cấu hình Screen</div>
    }
    return (
        <div>
            <div className="ctn-laptop">
                <h5>Thông số kĩ thuật</h5>
                <div className="container-laptop">
                    <div>
                        <h6>Bộ xử lý & Đồ họa</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Loại card đồ họa</td>
                                <td>{screenSpec.gpu}</td>
                            </tr>
                            <tr>
                                <td>Loại CPU</td>
                                <td>{screenSpec.cpu}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Bộ nhớ RAM, Ổ cứng</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Dung lượng RAM</td>
                                <td>{screenSpec.ramCapacity}</td>
                            </tr>
                            <tr>
                                <td>Loại RAM</td>
                                <td>{screenSpec.ram}</td>
                            </tr>
                            <tr>
                                <td>Ổ cứng</td>
                                <td>{screenSpec.hardDrive}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Màn hình</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Công nghệ màn hình</td>
                                <td>{screenSpec.screen}</td>
                            </tr>
                            <tr>
                                <td>Kích thước màn hình</td>
                                <td>{screenSpec.screenSize}</td>
                            </tr>
                            <tr>
                                <td>Độ phân giải màn hình</td>
                                <td>{screenSpec.screenResolution}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Âm thanh & Pin</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Công nghệ âm thanh</td>
                                <td>{screenSpec.sound}</td>
                            </tr>
                            <tr>
                                <td>Pin</td>
                                <td>{screenSpec.pin}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Hệ điều hành & Wifi</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Hệ điều hành</td>
                                <td>{screenSpec.operatingSystem}</td>
                            </tr>
                            <tr>
                                <td>Wi-Fi</td>
                                <td>{screenSpec.source}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Cổng kết nối</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Cổng giao tiếp</td>
                                <td>{screenSpec.gateConnection}</td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


        </div>

    );
}

export default ViewScreenDetail;