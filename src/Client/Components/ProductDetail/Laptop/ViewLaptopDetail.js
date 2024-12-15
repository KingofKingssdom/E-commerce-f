import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
function ViewLaptopDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [laptopSpec, setLaptopSpec] = useState(null);
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

                const specResponse = await fetch(`http://localhost:8080/laptop/getLaptop/${productId}`);
                if (!specResponse.ok){
                    throw new Error(`HTTP error! Status: ${specResponse.status}`)
                }
                const specData = await specResponse.json();
                setLaptopSpec(specData);
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
    if(!laptopSpec) {
        return <div>Không tìm thấy cấu hình laptop</div>
    }
    return (
        <div>
            <div className="ctn-specification">
                <h5>Thông số kĩ thuật</h5>
                <div className="ct-specification">
                    <div>
                        <h6>Bộ xử lý & Đồ họa</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Loại card đồ họa</td>
                                <td>{laptopSpec.gpu}</td>
                            </tr>
                            <tr>
                                <td>Loại CPU</td>
                                <td>{laptopSpec.cpu}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Bộ nhớ RAM, Ổ cứng</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Dung lượng RAM</td>
                                <td>{laptopSpec.ramCapacity}</td>
                            </tr>
                            <tr>
                                <td>Loại RAM</td>
                                <td>{laptopSpec.ram}</td>
                            </tr>
                            <tr>
                                <td>Ổ cứng</td>
                                <td>{laptopSpec.hardDrive}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Màn hình</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Công nghệ màn hình</td>
                                <td>{laptopSpec.screen}</td>
                            </tr>
                            <tr>
                                <td>Kích thước màn hình</td>
                                <td>{laptopSpec.screenSize}</td>
                            </tr>
                            <tr>
                                <td>Độ phân giải màn hình</td>
                                <td>{laptopSpec.screenResolution}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Âm thanh & Pin</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Công nghệ âm thanh</td>
                                <td>{laptopSpec.sound}</td>
                            </tr>
                            <tr>
                                <td>Pin</td>
                                <td>{laptopSpec.pin}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Hệ điều hành & Wifi</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Hệ điều hành</td>
                                <td>{laptopSpec.operatingSystem}</td>
                            </tr>
                            <tr>
                                <td>Wi-Fi</td>
                                <td>{laptopSpec.source}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Cổng kết nối</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Cổng giao tiếp</td>
                                <td>{laptopSpec.gateConnection}</td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


        </div>

    );
}

export default ViewLaptopDetail;