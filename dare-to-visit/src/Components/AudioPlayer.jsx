
import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';
import {
    Box,
    IconButton,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Flex,
    Text,
    Button,
    keyframes,
    Spinner,
    Center,
    Divider,
    Tooltip
} from '@chakra-ui/react';
import axios from 'axios';
import { BE_URL } from '../URL.js';
import { IoMusicalNote } from "react-icons/io5";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";


const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px #E3F2FD; }
  50% { box-shadow: 0 0 0px 5px #E3F2FD; }
  100% { box-shadow: 0 0 0px #B3E5FC; }
`;



// bg images array here.....................................................................

const phoneBGs = [
    {
        url: 'https://img.freepik.com/premium-photo/mummy-wearing-headphones-dark-background_195703-4944.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'Phone Image 1',
    },
    {
        url: "https://cdn.pixabay.com/photo/2017/07/23/05/14/fantasy-2530602_640.jpg",
        alt: 'Phone Image 2',
    },
    {
        url: 'https://img.freepik.com/free-photo/skeleton-s-hand-sticking-out-skull-ground_23-2147898918.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 3',
    },
    {
        url: 'https://img.freepik.com/free-photo/dark-fantasy-scene_23-2151136211.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 4',
    },
    {
        url: 'https://img.freepik.com/free-photo/close-up-scary-doll-with-strings_23-2150872644.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 5',
    },
    {
        url: 'https://img.freepik.com/free-photo/view-scary-clown-face-entity-with-creepy-smile-coming-out-from-curtains_23-2150812497.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 6',
    },
    {
        url: 'https://img.freepik.com/free-photo/close-up-zombie-taking-selfie_23-2150838873.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 7',
    },
    {
        url: 'https://img.freepik.com/free-photo/halloween-banner-with-spooky-skull_23-2149559035.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 8',
    },
    {
        url: 'https://img.freepik.com/free-photo/packed-plastic-bag-skull-illuminated-by-orange-light_23-2147905872.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 9',
    },
    {
        url: 'https://img.freepik.com/free-photo/cranium-with-smoky-hole-nape_23-2147905908.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },
    {
        url: 'https://img.freepik.com/free-photo/halloween-zombie-hand-holding-skull-cemetery_23-2147898832.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },
    {
        url: 'https://img.freepik.com/free-psd/halloween-make-up-woman-triangle_23-2148313632.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },
    {
        url: 'https://img.freepik.com/free-photo/woman-looking-skull-black-background_23-2148275432.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },
    {
        url: 'https://img.freepik.com/free-photo/view-scary-clown-with-creepy-smile_23-2150812576.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },
    {
        url: 'https://img.freepik.com/free-photo/portrait-terrifing-clown_23-2150549664.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },

    {
        url: 'https://img.freepik.com/free-photo/human-skull-with-drink-spiderweb_23-2148273502.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },

    {
        url: 'https://img.freepik.com/free-photo/skull-makeup-portrait-young-man_158595-3258.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },

    {
        url: 'https://img.freepik.com/free-photo/cartoon-style-character-wearing-headphones_23-2151056749.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },

    {
        url: 'https://img.freepik.com/free-photo/front-view-scary-character-posing_23-2150701014.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },
    {
        url: 'https://img.freepik.com/free-photo/close-up-portrait-witch-from-indigenous-african-tribe-wearing-traditional-costume-make-up-concept-isolated-dark-background_613910-6139.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },




];

const pcBGs = [
    {
        url: "https://cdn.pixabay.com/photo/2017/07/23/05/14/fantasy-2530602_640.jpg",
        alt: 'PC Image 1',
    },
    {
        url: 'https://img.freepik.com/free-photo/hand-sticking-out-ground-near-heavy-fog_23-2147898935.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 2',
    },
    {
        url: 'https://img.freepik.com/free-photo/view-people-addicted-their-smartphone-looking-scrolling-through-screens_23-2151487183.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 3',
    },
    {
        url: 'https://img.freepik.com/free-vector/rock-music-poster-with-therapy-label-design-t-shirts-greeting-cards_1284-49233.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 4',
    },
    {
        url: 'https://img.freepik.com/free-photo/scary-skull-plastic-bag_23-2147905868.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 5',
    },
    {
        url: 'https://img.freepik.com/free-photo/two-skulls-book-red-light_23-2147905810.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 6',
    },
    {
        url: 'https://img.freepik.com/free-psd/sideways-woman-with-skull-glitch-effect_23-2148313629.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 7',
    },
    {
        url: 'https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxob3Jyb3IlMjBzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 8',
    },
    {
        url: 'https://img.freepik.com/free-photo/creepy-skull-books-pile-smoke_23-2147905849.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 9',
    },
    {
        url: 'https://img.freepik.com/free-photo/scary-zombie-hand-from-ground-night_23-2149105929.jpg?uid=R110013667&ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740',
        alt: 'PC Image 10',
    },


];



const AudioPlayer = () => {
    const [getUrl, setGetUrl] = useState([])
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [phoneBGIndex, setPhoneBGIndex] = useState(0);
    const [pcBGIndex, setPcBGIndex] = useState(0);
    const [clickCount, setClickCount] = useState(1);
    const [error, setError] = useState(null);
    const audioRef = useRef(null);
    const [pageno, setPageno] = useState(1);
    const [limitno, setLimitTo] = useState(2);
    const [totalPages, setTotalPages] = useState("")


    const fetchPodCastUrl = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${BE_URL}api/get/podcast/urls?page=${pageno}&limit=${limitno}`);
            setGetUrl(res.data.data)
            setTotalPages(res.data.totalPages || 1); 
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(`${error.response.data.msg}`)
            console.log(error)
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchPodCastUrl()
    }, [pageno])

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const handleNextTrack = () => {
        const nextTrack = (currentTrack + 1) % getUrl.length;
        setCurrentTrack(nextTrack);

        audioRef.current.pause();

        audioRef.current.src = getUrl[nextTrack].url;

        audioRef.current.oncanplaythrough = () => {
            audioRef.current.play();
            setIsPlaying(true);
            audioRef.current.oncanplaythrough = null;
        };

    };

    const handlePreviousTrack = () => {
        const prevTrack = currentTrack === 0 ? getUrl.length - 1 : currentTrack - 1;
        setCurrentTrack(prevTrack);

        audioRef.current.pause();

        audioRef.current.src = getUrl[prevTrack].url;

        audioRef.current.oncanplaythrough = () => {
            audioRef.current.play();
            setIsPlaying(true);
            audioRef.current.oncanplaythrough = null;
        };
    };
    const handleChangeAfterClick = (changedURL) => {
        audioRef.current.src = changedURL;
        audioRef.current.play();
        setIsPlaying(true);
    }
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleSliderChange = (value) => {
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    const handlePlaybackSpeedChange = (speed) => {
        setPlaybackSpeed(speed);
        audioRef.current.playbackRate = speed;
    };

    const handleChangeBG = () => {
        setPhoneBGIndex((prevIndex) => (prevIndex + 1) % phoneBGs.length);
        setPcBGIndex((prevIndex) => (prevIndex + 1) % pcBGs.length);
        setClickCount((prevCount) => (prevCount % phoneBGs.length) + 1);
    };
    const phoneBG = phoneBGs[phoneBGIndex].url;
    const pcBG = pcBGs[pcBGIndex].url;
    if (loading) return <Center><Spinner color="#fff" size="xl" /></Center>
    if (error) return <Center><Text color="#fff">{"{error in api} :-"} {error}</Text></Center>
    if (getUrl.length === 0) {
        return (
            <Center bg="#000" w="100%" h="100vh">
                <Text color="#fff">No podcast fetched from server...😪</Text>
            </Center>
        );
    }


    return (

        <>
            <Box>
                <Box
                    m="auto"
                    w={{ base: '92%', md: '60%' }}
                    mt="2%"
                    p={{ base: "3%", md: "3%" }}
                    backgroundImage={{
                        base: `url(${phoneBG})`,
                        md: `url(${pcBG})`,
                    }}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    borderRadius="md"
                >
                    <audio
                        ref={audioRef}
                        src={getUrl[currentTrack].url}
                        onTimeUpdate={handleTimeUpdate}
                    />

                    <Flex align="center"
                        //  border={"1px solid red"}
                        w="100%" justify="space-between">
                        <IconButton
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                            icon={isPlaying ? <FaPause /> : <FaPlay />}
                            onClick={handlePlayPause}
                            mr={{ base: "15px", md: "15px" }}
                            color="#FF0000"
                            h={{ base: "20px", md: "40px" }}
                            bg="transparent"
                            _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }}
                        />
                        <Slider
                            value={isNaN(currentTime) ? 0 : currentTime}
                            max={
                                audioRef.current && !isNaN(audioRef.current.duration)
                                    ? audioRef.current.duration
                                    : 0
                            }
                            onChange={handleSliderChange}
                        >

                            <SliderTrack animation={`${glowAnimation} 1s infinite`} bg="black" h="1px">
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb bg="#fff" />
                        </Slider>
                    </Flex>

                    {/* next && prev buttons here */}
                    <Flex w="100%" h="auto" align="center" justify="space-between" mt="4">
                        <IconButton
                            aria-label="Previous Track"
                            icon={<FaStepBackward />}
                            onClick={handlePreviousTrack}
                            colorScheme="gray"
                            variant="outline"
                            border={{ base: "none", md: "0.5px solid #FFFFFF" }}
                            _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000', color: "#FFFFFF" }}
                            m={{ base: '0%', md: '3%' }}
                            w={{ base: "15%", md: "5.6%" }} height={{ base: "6vh", md: "6vh" }}
                            borderRadius={"50%"}
                            color={{ base: "#fff", md: "#fff" }}
                            fontSize={{ base: '12px', md: '18px' }}
                        />
                        <IconButton
                            aria-label="Next Track"
                            icon={<FaStepForward />}
                            onClick={handleNextTrack}
                            colorScheme="gray"
                            variant="outline"
                            border={{ base: "none", md: "0.5px solid #FFFFFF" }}
                            _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000', color: "#FFFFFF" }}
                            m={{ base: '0%', md: '3%' }}
                            w={{ base: "15%", md: "5.6%" }} height={{ base: "6vh", md: "6vh" }}
                            borderRadius={"50%"}
                            color={{ base: "#fff", md: "#fff" }}
                            fontSize={{ base: '12px', md: '18px' }}
                        />
                    </Flex>

                    <Flex align="center" justify="space-between" mt="20px">
                        <Button color="blue" border={{ base: "none", md: "1px solid transparent" }} textColor={{ base: "#fff", md: "#fff" }} _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000', transform: 'scale(0.9)' }} borderRadius={"50%"} bg="transparent" w={{ base: "15%", md: "6.7%" }} height={{ base: "6vh", md: "7vh" }} fontSize={{ base: "10px", md: "14px" }} onClick={() => handlePlaybackSpeedChange(1)}>Normal</Button>
                        <Button border={{ base: "none", md: "1px solid transparent" }} textColor={{ base: "#fff", md: "#fff" }} bg="transparent" _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000', transform: 'scale(0.9)' }} borderRadius={"50%"} w={{ base: "15%", md: "6.7%" }} height={{ base: "6vh", md: "7vh" }} fontSize={{ base: "12px", md: "14px" }} onClick={() => handlePlaybackSpeedChange(1.5)}>1.5x</Button>
                        <Button border={{ base: "none", md: "1px solid transparent" }} textColor={{ base: "#fff", md: "#fff" }} _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000', transform: 'scale(0.9)' }} bg="transparent" borderRadius={"50%"} w={{ base: "15%", md: "6.7%" }} height={{ base: "6vh", md: "7vh" }} fontSize={{ base: "12px", md: "14px" }} onClick={() => handlePlaybackSpeedChange(2)}>2x</Button>
                        <Text color="#FFFFFF"
                            fontSize={{ base: "12px", md: "xl" }} fontWeight={"500"}>{formatTime(currentTime)}</Text>
                    </Flex>

                </Box>
                <Box
                    w={{ base: "96%", md: "60%" }}
                    h="100px"
                    //  border="1px solid red"
                    m="auto" display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"} alignItems={"center"}

                >
                    <Button onClick={handleChangeBG} color="#FF0000" bg="transparent" border="0.5px solid red" _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000', transform: 'scale(0.9)' }} w={{ base: "20%", md: "10%" }} h="3vh" fontSize={{ base: "12px", md: "13px" }} >
                        Change UI
                    </Button> <Text pt="10px" color="#FFFFFF" fontSize={"14px"}>UI :- <span style={{ color: "#FF0000", fontSize: "14px", fontWeight: "bold" }}>{clickCount}</span> / {phoneBGs.length}</Text></Box>
                <Box w={{ base: "96%", md: "60%" }} m="auto" h="auto" ><Text style={{ textAlign: "left" }} mt="20px" mb="20px" color="#fff" fontSize={{ base: "18px", md: "27px" }}>{getUrl[currentTrack].title}<span style={{ color: "#FF0000" }}>{" "} #</span></Text></Box>
            </Box>

            {/* pagination starts here -----------------------------------------pagination starts here---------------------------------------------------------------------------pagination starts here*/}




            <Box position={"relative"} w={{ base: "99%", md: "80%", lg: "80%" }} m="auto" borderRadius={"xl"} minH="80vh" border="1px solid #424242" >
                <Box w="100%" h="auto" p={{ base: "2", md: "8", lg: "10" }}
                // border={"1px solid lime"}
                >

                    {
                        getUrl.map((el, idx) => (

                            <Flex
                                borderBottom="0.5px solid #4DD0E1"
                                key={idx} gap="3" p="2" mt="5px" mb="5">
                                <Center key={idx}>
                                    <Box w="30px" h="30px" borderRadius={"100%"} border="2px solid white">
                                        <IoMusicalNote p="2" color="white" size="25px" />
                                    </Box>
                                </Center>
                                <Box _hover={{ cursor: "pointer" }} onClick={() => handleChangeAfterClick(el.url)} w="100%" display={"flex"} alignContent={"center"} h="auto">
                                    <Text fontSize={{ base: "14px", md: "15px", lg: "16px" }} color="#fff">{el.title}</Text>
                                </Box>
                            </Flex>

                        ))
                    }


                </Box>

                <Center p={1} borderBottomRadius={"xl"} flexDir={"column"} bottom={"0"} w={"100%"} bg="#212121" position={"absolute"} >
                    <Center w={{ base: "220px", md: "300px", lg: "350px" }} justifyContent={"space-between"} h="100%" >
                        <Tooltip label="Previous Page" hasArrow placement="top">
                            <Button
                                borderRadius="full"
                                width="40px"
                                height="40px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                p={0}
                                isDisabled={pageno === 1}

                                onClick={() => {
                                    if (pageno > 1) {
                                        setPageno(prev => prev - 1);
                                        setCurrentTrack(0); // Reset to first track on new page
                                    }
                                }}
                            >
                                <FcPrevious size={18} />
                            </Button>
                        </Tooltip>
                        <Text fontFamily={"monospace"} fontSize={{ base: "xs", md: "sm", lg: "sm" }} color="#fff">Page {pageno} of {totalPages}</Text>
                        <Tooltip label={pageno === totalPages ? "Last Page 😪" : "Next"} hasArrow placement="top">
                            <Button
                                borderRadius="full"
                                width="40px"
                                height="40px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                p={0} // removes extra padding
                                isDisabled={pageno === totalPages}
                                onClick={() => {
                                    setPageno(prev => prev + 1);
                                    setCurrentTrack(0); // Reset to first track on new page
                                }}
                            >
                                <FcNext size={18} />
                            </Button>
                        </Tooltip>
                    </Center>
                </Center>



            </Box>

            {/* pagination ends here --------------------------------pagination ends here-----------------------------------------------------------pagination ends here- */}
        </>
    );
};

// Helper function to format time in minutes:seconds
const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};




export default AudioPlayer;




