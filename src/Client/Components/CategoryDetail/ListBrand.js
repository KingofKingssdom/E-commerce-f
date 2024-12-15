import React from "react";

function ListBrand(props) {
    const brands = [
        { id: 1, logo: props.logoBrand1 },
        { id: 2, logo: props.logoBrand2 },
        { id: 3, logo: props.logoBrand3 },
        { id: 4, logo: props.logoBrand4 },
        { id: 5, logo: props.logoBrand5 },
        { id: 6, logo: props.logoBrand6 },
        { id: 7, logo: props.logoBrand7 },
        { id: 8, logo: props.logoBrand8 },
    ];

    return (
        <div>
            <div className="container-logoBrand">
                <div className="row">
                    {/* Sử dụng map để tạo các thẻ a chỉ khi logo tồn tại */}
                    {brands.map((brand, index) => (
                        brand.logo ? (  // Kiểm tra xem logo có tồn tại không
                            <a
                                href="#a"
                                className="col logoBrandItem"
                                key={index}
                                onClick={() => props.onBrandClick(brand.id)} // Gọi hàm callback khi click
                            >
                                <img src={brand.logo} alt={`LogoBrand${brand.id}`} />
                            </a>
                        ) : null  // Nếu không tồn tại, không render gì
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListBrand;