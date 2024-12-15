import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

function ViewTvDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [tvSpec, setTvSpec] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);


                const productResponse = await fetch(`http://localhost:8080/product/${productId}`);
                if (!productResponse.ok) {

                    try {
                        const errorData = await productResponse.json();
                        throw new Error(`Lỗi từ server: ${productResponse.status} - ${errorData.message || JSON.stringify(errorData)}`);
                    } catch (jsonError) {

                        throw new Error(`Lỗi từ server: ${productResponse.status}`);
                    }
                }
                const productData = await productResponse.json();
                setProduct(productData);


                const specResponse = await fetch(`http://localhost:8080/tv/getTv/${productId}`);
                if (!specResponse.ok){

                    try {
                        const errorData = await specResponse.json();
                        throw new Error(`Lỗi từ server: ${specResponse.status} - ${errorData.message || JSON.stringify(errorData)}`);
                    } catch (jsonError) {

                        throw new Error(`Lỗi từ server: ${specResponse.status}`);
                    }
                }
                const specData = await specResponse.json();
                setTvSpec(specData);

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
        return <div>Không tìm thấy sản phẩm.</div>;
    }

    if(!tvSpec) {
        return <div>Không tìm thấy cấu hình TV</div>;
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
                                <td>{tvSpec?.screenSize}</td>
                            </tr>
                            <tr>
                                <td>Công nghệ màn hình</td>
                                <td>{tvSpec?.screenTechnology}</td>
                            </tr>
                            <tr>
                                <td>Độ phân giải màn hình</td>
                                <td>{tvSpec?.resolution}</td>
                            </tr>
                            <tr>
                                <td>Tính năng màn hình</td>
                                <td>{tvSpec?.screenFeature}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Camera</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">Camera sau</td>
                                <td>{tvSpec?.rearCamera}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{tvSpec?.frontCamera}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Đồ họa</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">GPU</td>
                                <td>{tvSpec?.gpu}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>RAM & Pin</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">RAM</td>
                                <td>{tvSpec?.ram}</td>
                            </tr>
                            <tr>
                                <td>Pin</td>
                                <td>{tvSpec?.pin}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTvDetail;