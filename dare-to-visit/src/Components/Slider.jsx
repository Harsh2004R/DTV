import { useBreakpointValue, Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const slides = [
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P5.avif",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P6.avif",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P8.avif",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P9.avif",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P10.avif",
    },
    {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P5.avif",
    }, {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/PC7.avif",
    }, {
        image:
            "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/PC8.avif",

    }
];

const Slider = () => {
    const imageStyle = {
        width: useBreakpointValue({ base: "90%", md: "80%", lg: "80%" }),
        height: useBreakpointValue({ base: "60vh", md: "80vh", lg: "100vh" }),
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
