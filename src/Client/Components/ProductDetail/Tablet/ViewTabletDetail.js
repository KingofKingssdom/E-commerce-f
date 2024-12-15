import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
function ViewTabletDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [tabletSpec, setTabletSpec] = useState(null);
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

                const specResponse = await fetch(`http://localhost:8080/tablet/getTablet/${productId}`);
                if (!specResponse.ok){
                    throw new Error(`HTTP error! Status: ${specResponse.status}`)
                }
                const specData = await specResponse.json();
                setTabletSpec(specData);
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
    if(!tabletSpec) {
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
                                <td>{tabletSpec.screenSize}</td>
                            </tr>
                            <tr>
                                <td>Công nghệ màn hình</td>
                                <td>{tabletSpec.screenTechnology}</td>
                            </tr>
                            <tr>
                                <td>Độ phân giải màn hình</td>
                                <td>{tabletSpec.resolution}</td>
                            </tr>
                            <tr>
                                <td>Tính năng màn hình</td>
                                <td>{tabletSpec.screenFeature}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Camera</h6>
                        <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td className="td-h">Camera sau</td>
                                <td>{tabletSpec.rearCamera}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{tabletSpec.frontCamera}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>Đồ họa</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">GPU</td>
                                <td>{tabletSpec.gpu}</td>
                            </tr>
                            </tbody>
                        </table>
                        <h6>RAM & Pin</h6>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td className="td-h">RAM</td>
                                <td>{tabletSpec.ram}</td>
                            </tr>
                            <tr>
                                <td>Pin</td>
                                <td>{tabletSpec.pin}</td>
                            </tr>
                            </tbody>
                        </table>



                    </div>
                </div>
            </div>


        </div>

    );
}

export default ViewTabletDetail;