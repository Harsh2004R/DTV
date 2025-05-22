
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
    Spinner
} from '@chakra-ui/react';
import axios from 'axios';
import { BE_URL } from '../URL.js';
// const audioSources1 = [
//     {
//         url: "https://play.hubhopper.com/b4a88eee4db21e102da0edef1621c3e7.mp3?s=rss-feed",
//         title: "Kya wo sach tha -#Heighway ka bhoot"
//     },
//     {
//         url: "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/autoAudio/DWsong1.mp3",
//         title: "auto tune added via google"
//     },
// ];

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px #E3F2FD; }
  50% { box-shadow: 0 0 0px 5px #E3F2FD; }
  100% { box-shadow: 0 0 0px #B3E5FC; }
`;



// bg images array here.....................................................................

const phoneBGs = [
    {
        url: "https://cdn.pixabay.com/photo/2017/07/23/05/14/fantasy-2530602_640.jpg",
        alt: 'Phone Image 1',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2018/08/27/10/11/radio-cassette-3634616_640.png',
        alt: 'Phone Image 2',
    },
    {
        url: 'https://images.unsplash.com/photo-1504903271097-d7e7c7f5f7ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 3',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2015/02/04/09/20/skulls-623532_640.jpg',
        alt: 'PC Image 4',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2017/03/09/20/53/microphone-2130806_640.jpg',
        alt: 'PC Image 5',
    },
    {
        url: 'https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGJhbm5lciUyMG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 6',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2018/03/18/15/26/villa-3237114_640.jpg',
        alt: 'PC Image 7',
    },
    {
        url: 'https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 8',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_640.jpg',
        alt: 'PC Image 9',
    },
    {
        url: 'https://images.unsplash.com/photo-1627389955646-6596047473d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGlsbHVzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 10',
    },


];

const pcBGs = [
    {
        url: "https://cdn.pixabay.com/photo/2017/07/23/05/14/fantasy-2530602_640.jpg",
        alt: 'PC Image 1',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1664195074951-fe91ec456eed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 2',
    },
    {
        url: 'https://images.unsplash.com/photo-1663775635512-c60be8b302b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 3',
    },
    {
        url: 'https://images.unsplash.com/photo-1663847709955-a2f171c7b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0ZmxpeCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 4',
    },
    {
        url: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 5',
    },
    {
        url: 'https://images.unsplash.com/photo-1663568714479-9cccbd410076?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxob3Jyb3IlMjBzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 6',
    },
    {
        url: 'https://images.unsplash.com/photo-1686285961779-5070bdb03036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxob3Jyb3IlMjBzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 7',
    },
    {
        url: 'https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxob3Jyb3IlMjBzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 8',
    },
    {
        url: 'https://images.unsplash.com/photo-1617743220812-6522d771846c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGVhcnBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'PC Image 9',
    },
    {
        url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV0ZmxpeCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
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
    const audioRef = useRef(null);


    const fetchPodCastUrl = async () => {
        try {
            const res = await axios.get(`${BE_URL}api/get/podcast/urls`);
            setGetUrl(res.data.data)
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log("error in fetching---------podcast=>", error.message)
        }

    }

    useEffect(() => {
        fetchPodCastUrl()
    }, [])

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
    if (loading) return <Spinner />
    if (getUrl.length === 0) {
        <Box bg="#000" w="100%" h="100vh">
            <Text color="#fff">No podcast fetched from server...😪</Text>
        </Box>
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




