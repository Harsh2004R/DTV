import { useBreakpointValue, Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const slides = [
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/blackEye.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/bali.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/bloody_eye.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/deadmen.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/zombiee.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/eat.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/gere.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/hand.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/joker.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/HomeSlider/shadow1.jpg?raw=true",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P9.avif",
    },
];


const Slider = () => {
    const imageStyle = {
        width: useBreakpointValue({ base: "100%", md: "80%", lg: "80%" }),
        height: useBreakpointValue({ base: "70vh", md: "80vh", lg: "100vh" }),
        objectFit: "cover",
        margin: "auto"
    };

    return (
        <Carousel infiniteLoop showThumbs={false}
            autoPlay
            interval={3000}  //seconds
            stopOnHover={false}
        >
            {slides.map((slide, index) => (
                <Box key={index} position="relative">
                    <Image style={imageStyle} src={slide.image} />
                </Box>
            ))}
        </Carousel>
    );
};

export default Slider;
