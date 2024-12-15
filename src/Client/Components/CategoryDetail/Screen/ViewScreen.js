import React, { useState, useEffect } from 'react';
import Item from "../Item";

function ViewScreen({ brandId }) {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState({});
    const pageSize = 8;
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                let url = `http://localhost:8080/product/products/category/6?page=${page}&size=${pageSize}`;
                if (brandId) {
                    url = `http://localhost:8080/product?brandId=${brandId}&categoryId=6&page=${page}&size=${pageSize}`;
                }

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page, brandId]);



    useEffect(() => {
        const fetchImages = async () => {
            if (!products || products.length === 0) {
                return;
            }

            const promises = products.map(async (product) => {
                try {
                    const response = await fetch(`http://localhost:8080/product/productImage/${product.id}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const imageData = await response.blob();
                    const imageSrc = URL.createObjectURL(imageData);
                    return { id: product.id, imageSrc };
                } catch (error) {
                    console.error('Error fetching image:', error);
                    return { id: product.id, imageSrc: null };
                }
            });

            const results = await Promise.all(promises);

            const newImages = {};
            results.forEach((result) => {
                newImages[result.id] = result.imageSrc;
            });
            setImages(newImages);
        };

        fetchImages();
    }, [products]);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };

    const renderItems = () => {
        if (!products || products.length === 0) {
            return <div>No products available</div>;
        }

        return products.map((product) => (
            <div className="col-3" key={product.id}>
                <Item
                    productId={product.id}
                    image={images[product.id]}
                    title={product.productName}
                    priceCurrent={product.priceCurrent}
                    pricePrevious={product.pricePrevious}
                    discount={product.discountPrice}
                    status={product.status}
                    info={product.description}
                    pay="Trả góp 0%"
                />
            </div>
        ));
    };

    return (
        <div>
            {loading && <div>Loading...</div>}
            <div className="row">
                {renderItems()}
            </div>
            {/* Hiển thị phân trang */}
            <div className="pagination">
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 0}>
                    Prev
                </button>
                <span>{page + 1} / {totalPages}</span>
                <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages - 1}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ViewScreen;