import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
function ViewSoundDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [soundSpec, setSoundSpec] = useState(null);
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

                const specResponse = await fetch(`http://localhost:8080/sound/getSound/${productId}`);
                if (!specResponse.ok){
                    throw new Error(`HTTP error! Status: ${specResponse.status}`)
                }
                const specData = await specResponse.json();
                setSoundSpec(specData);
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
    if(!soundSpec) {
        return <div>Không tìm thấy cấu hình laptop</div>
    }
    return (
        <div>
            <div className="ctn-laptop">
                <h5>Thông số kĩ thuật</h5>
                <div className="container-laptop">
                    <div>
                        <h6>Màn hình</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Kích thước màn hình</td>
                                <td>{soundSpec.screenSize}</td>
                            </tr>
                            <tr>
                                <td>Công nghệ màn hình</td>
                                <td>{soundSpec.screenTechnology}</td>
                            </tr>
                            <tr>
                                <td>Độ phân giải màn hình</td>
                                <td>{soundSpec.resolution}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Camera</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Camera sau</td>
                                <td>{soundSpec.rearCamera}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{soundSpec.frontCamera}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>GPS & đồ họa</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">GPU</td>
                                <td>{soundSpec.gpu}</td>
                            </tr>
                            <tr>
                                <td>GPS</td>
                                <td>{soundSpec.screenSize}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>RAM & lưu trữ</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Bộ nhớ trong</td>
                                <td>{soundSpec.internalMemory}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{soundSpec.operatingSystem}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Kích thước & Trọng lượng</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Kích thước</td>
                                <td>{soundSpec.size}</td>
                            </tr>
                            <tr>
                                <td>Trọng lượng</td>
                                <td>{soundSpec.weight}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Pin & Cổng sạc</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Cổng sạc</td>
                                <td>{soundSpec.com}</td>
                            </tr>
                            <tr>
                                <td className="td-h">Pin</td>
                                <td>{soundSpec.pin}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Tính năng khác</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Tiện ích khác</td>
                                <td>{soundSpec.feature}</td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


        </div>

    );
}

export default ViewSoundDetail;