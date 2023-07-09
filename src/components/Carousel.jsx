import React from "react";

const Carousel = ({ images }) => {

    return (
        <div
            className="slideTrack"
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        marginLeft: "10px",
                        transition: "translate 3000ms ease 0ms",
                    }}
                >
                    <img
                        src={image.image}
                        className='h-[60px] my-[12px] mx-[30px]'
                        alt="logo"
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;