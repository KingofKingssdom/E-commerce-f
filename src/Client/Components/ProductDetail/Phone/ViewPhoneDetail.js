import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
function ViewPhoneDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [phoneSpec, setPhoneSpec] = useState(null);
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

                const specResponse = await fetch(`http://localhost:8080/smartphone/getPhone/${productId}`);
                if (!specResponse.ok){
                    throw new Error(`HTTP error! Status: ${specResponse.status}`)
                }
                const specData = await specResponse.json();
                setPhoneSpec(specData);
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
    if(!phoneSpec) {
        return <div>Không tìm thấy cấu hình laptop</div>
    }
    return (
        <div>
            <div className="ctn-specification">
                <h5>Thông số kĩ thuật</h5>
                <div className="ct-specification">
                    <div>
                        <h6>Màn hình</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Kích thước màn hình</td>
                                <td>{phoneSpec.screenSize}</td>
                            </tr>
                            <tr>
                                <td>Công nghệ màn hình</td>
                                <td>{phoneSpec.screenTechnology}</td>
                            </tr>
                            <tr>
                                <td>Độ phân giải màn hình</td>
                                <td>{phoneSpec.resolution}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Camera</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Camera sau</td>
                                <td>{phoneSpec.rearCamera}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{phoneSpec.frontCamera}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>GPS & đồ họa</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">GPU</td>
                                <td>{phoneSpec.gpu}</td>
                            </tr>
                            <tr>
                                <td>GPS</td>
                                <td>{phoneSpec.screenSize}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>RAM & lưu trữ</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Bộ nhớ trong</td>
                                <td>{phoneSpec.internalMemory}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{phoneSpec.operatingSystem}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Kích thước & Trọng lượng</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Kích thước</td>
                                <td>{phoneSpec.size}</td>
                            </tr>
                            <tr>
                                <td>Trọng lượng</td>
                                <td>{phoneSpec.weight}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Pin & Cổng sạc</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Cổng sạc</td>
                                <td>{phoneSpec.com}</td>
                            </tr>
                            <tr>
                                <td className="td-h">Pin</td>
                                <td>{phoneSpec.pin}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Tính năng khác</h6>
                        <table className="table table-striped table-specification">
                            <tbody>
                            <tr>
                                <td className="td-h">Tiện ích khác</td>
                                <td>{phoneSpec.feature}</td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


        </div>

    );
}

export default ViewPhoneDetail;