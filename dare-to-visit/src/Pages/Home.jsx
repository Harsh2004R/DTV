
import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Button, Flex, keyframes, UnorderedList, ListItem, useBreakpointValue, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { Divider } from "@chakra-ui/react"
// import Nav from "../Components/Nav";
import CustomAlert from "../Components/CustomAlert";
import AI from '../Components/AI';
import VideoComponent from '../Components/VideoComponent ';
import Navbar2 from "../Components/Navbar2";
import Topper from "../Components/Topper.jsx";
import Footer from "../Components/Footer";
import DummyScareOnClip from "../Templates/DummyScareOnCard";
import DummyScareOnCard from "../Templates/DummyScareOnClip";






const AudioPlayerIMG = "https://i.ibb.co/NrpFM76/Audio-Player-IMG.png";
const Mid2 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/Mid.avif";
const HauntedBG = "https://i.ibb.co/CBySFbV/Haunted-BG.jpg";
const Hashima = "https://i.ibb.co/w0yVJ1y/Hashima.png";
const Hacker = "https://i.ibb.co/BGG6zVh/Hacker.jpg";
const HauntedHouse = "https://i.ibb.co/YWJF3PP/Haunted-House.jpg";
const GirlHacker = "https://i.ibb.co/R7KJ65v/Girl-Hacker.jpg";
const SkullImg = "https://i.ibb.co/YjQ36Tn/SkullImg.jpg";






const SideNavImg = "https://i.ibb.co/wKKC1xd/Side-Nav-Img.png";
const MainNavImg = "https://i.ibb.co/0jM03Sy/Main-Nav-Img.png";
const PhoneMenuimg = "https://i.ibb.co/Ptb8cLQ/Phone-Menuimg.jpg";






const P1 = "https://i.ibb.co/HKJHyPx/PC1.png";
const P2 = "https://i.ibb.co/jbGdrr2/P2.jpg";
const P3 = "https://i.ibb.co/pz7qWCg/P3.jpg";
const P4 = "https://i.ibb.co/D5H7vZh/P4.jpg";
const P5 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P5.avif";
const P6 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P6.avif";
const P7 = "https://i.ibb.co/KVYxznd/P7.png";
const P8 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P8.avif";
const P9 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P9.avif";
const P10 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/P10.avif";
const P11 = "https://i.ibb.co/Xbg29Gk/P11.jpg";
const P12 = "https://i.ibb.co/L0fPnc6/P12.jpg";
const P13 = "https://i.ibb.co/Y7KF32r/P13.jpg";






const PC1 = "https://i.ibb.co/HKJHyPx/PC1.png";
const PC2 = "https://i.ibb.co/dr2zz8m/PC2.jpg";
const PC3 = "https://i.ibb.co/r795fd4/PC3.jpg";
const PC4 = "https://i.ibb.co/CVx8mYY/PC4.webp";
const PC5 = "https://i.ibb.co/S3hZsSt/PC5.webp";
const PC6 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/PC6.avif";
const PC7 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/PC7.avif";
const PC8 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/PC8.avif";






const Phone_slider = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13]; // Images for PC
const PC_slider = [PC1, PC2, PC3, PC4, PC5, PC6, PC7, PC8]; // Images for Phones






const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;





const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  20%, 50%, 80% {
    transform: translateY(+20px);
  }
  40%, 60% {
    transform: translateY(-10px);
  }
`;






const gradient1 = `linear-gradient(to right, #000000, #37474F, #000000)`;
const gradient2 = `linear-gradient(to right, #000000, #100001, #000000)`;






function Home() {
  const Navigate = useNavigate();
  const message = [
    '▁▂▃▄▅▆▇ `',
    '▂▁▂▃▄▅▆` ',
    '▃▂▁▂▃▄▅ `',
    '▄▃▂▁▂▃▄` ',
    '▅▄▃▂▁▂▃ `',
    '▆▅▄▃▂▁▂` ',
    '▇▆▅▄▃▂▁ `',
    '▆▇▆▅▄▃▂` ',
    '▅▆▇▆▅▄▃ `',
    '▄▅▆▇▆▅▄` ',
    '▃▄▅▆▇▆▅ `',
    '▂▃▄▅▆▇▆` ',
  ];



  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  // all useState Hooks here.


  const [index, setIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);











  useEffect(() => {
    document.title = message[index];
  }, [index]);

  useEffect(() => {

    setShowAlert(true);

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % message.length);
    }, 50);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const hideAlertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 10000);

    return () => clearTimeout(hideAlertTimeout);
  }, [showAlert]);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };


  // slider Part starting from here. ------------------------- slider Part starting from here. ------------------------- slider Part starting from here. ------------------------- slider Part starting from here. ------------------------- slider Part starting from here. ------------------------->>>


  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % Phone_slider.length);
    }, 2500);

    const interval2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % PC_slider.length);
    }, 2500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);





  const handleVideoPage = () => {
    Navigate("/videos")
  }

  const handlePodcastPage = () => {
    Navigate("/podcast")
  }

  const handleScareOnPage = () => {
    Navigate("/scareon")
  }

  const handle3DviewPage = () => {
    Navigate("/React3DView")
  }

  const handleDW = () => {
    Navigate("/darkweb")
  }

  return (
    <>


      {/* importing Navbar & Navbar2 here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}





      {/* <Nav /> */}
      <Topper />
      <Navbar2 />



      {/* Banner Slider Starts here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


      <Box h={{ base: "70vh", md: "100vh" }} w="100%" bg={gradient1} >
        {showAlert && <CustomAlert message={message[index]} />}
        <Box
          backgroundImage={{ base: `url(${Phone_slider[currentImageIndex1]})`, md: `url(${PC_slider[currentImageIndex2]})` }}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          width={{ base: "90%", md: "85%" }}
          height={{ base: "100%", md: "100%" }}
          m="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        // border="2px solid cyan"
        >

          <CustomAlert isOpen={showAlert} onClose={handleCloseAlert} />
        </Box>

      </Box>




      {/* NavBar instructions part starts here -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



      <Box
        //  border="2px solid red" 
        w="100%"
        h="auto"
        pt={{ base: "50px", md: "70px" }}
        bg="#000000"
      >

        <Text
          transition="transform 1s"
          _hover={{
            transform: 'scale(0.9)',
            cursor: 'pointer'
          }}
          fontFamily={"just-die-already"} color="#FFFFFF" textAlign={"center"} fontSize={{ base: "2xl", md: "5xl" }} mb="10px">"Explore via":<span style={{ color: "#FF0000" }} >Navbar</span></Text>

        <UnorderedList
          // border="1px solid red"
          w={{ base: "90%", md: "95%" }} m='auto'

        >


          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            fontFamily={"just-die-already"} fontSize={{ base: "12px", md: "25px" }} color="yellow.500">"Unlock Our World: Navigating the Journey via Navbar!</Text>

          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontSize={{ base: "8px", md: "17px" }} color="#fff">Embark on an effortless exploration of our site through the intuitive navbar, whether you're on your phone or PC. Here's your guide to seamless navigation:</Text>





          <ListItem
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="15px" pb="15px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "18px", md: "27px" }} color="#FF0000">Main Nav: // PC</ListItem>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FFFFFF"><span style={{ color: "#FF0000" }}>1. Navigation Bar: </span>  Find the navigation bar at the top of the screen. It showcases all the key sections neatly.</Text>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FFFFFF"><span style={{ color: "#FF0000" }}>2. Hover & Reveal: </span>  Hover your cursor over each link to reveal a dropdown menu, presenting sub-sections and more.</Text>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FFFFFF"><span style={{ color: "#FF0000" }}>3. Direct Access: </span>  Click on the links to access the pages directly. Whether it's 'Blog,' 'Gallery,' or any other exciting destination, the navbar is your shortcut.</Text>
          <Box transition="transform 0.5s" _hover={{ boxShadow: '0 0 10px #B0BEC5', transform: 'scale(0.98)', cursor: 'pointer' }} mt="15px" mb="15px" w={{ base: "100%", md: "90%" }} h={{ base: "35px", md: "50px" }} ><Image w="100%" h="100%" src={MainNavImg} alt="reference img..." /></Box>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FFFFFF">Navigate with ease and discover our captivating content. Each click opens a new door to exciting adventures. Happy exploring!"</Text>






          <ListItem
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "18px", md: "27px" }} color="#FF0000">For Phones:</ListItem>

          <Text transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}

            pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FFFFFF"><span style={{ color: "#FF0000" }}>1. Menu Icon: </span> Locate the menu icon (usually three horizontal lines or dots) at the top corner. Tap it to unveil a world of options.</Text>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="yellow.500">Reffer image.....</Text>
          <Box transition="transform 0.5s" _hover={{ boxShadow: '0 0 10px #B0BEC5', transform: 'scale(0.98)', cursor: 'pointer' }} w={{ base: "70%", md: "35%" }} h={{ base: "220px", md: "400px" }} ><Image w="100%" h="100%" src={PhoneMenuimg} alt="reference img..." /></Box>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="15px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FFFFFF"><span style={{ color: "#FF0000" }}>2. Explore Sections: </span> Dive into different sections by tapping the relevant links. From 'Home' to 'Features' and beyond, each link is a gateway to a unique experience.</Text>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="15px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FFFFFF"><span style={{ color: "#FF0000" }}>3. Scroll Smoothly:  </span>  Scroll through pages with a simple swipe, effortlessly enjoying the content we have to offer.</Text>






          <ListItem
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="15px" pb="15px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "18px", md: "27px" }} color="#FF0000">Side Nav:</ListItem>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FFFFFF"><span style={{ color: "#FF0000" }}>1. Left Arroe Icon: </span> Locate the left arrow icon at the right mid edge. Tap it to open subnav it will help you all to identify our depth.</Text>
          <Box transition="transform 0.5s" _hover={{ boxShadow: '0 0 10px #B0BEC5', transform: 'scale(0.98)', cursor: 'pointer' }} mt="15px" mb="15px" w={{ base: "45%", md: "15%" }} h={{ base: "150px", md: "200px" }} ><Image w="100%" h="100%" src={SideNavImg} alt="reference img..." /></Box>
          <Text
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="yellow.500">Explore areas.....</Text>
          <ListItem
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FF0000">Stories :</ListItem>
          <ListItem
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FF0000">Dark Web :</ListItem>
          <ListItem
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FF0000">PodCast "</ListItem>
          <ListItem
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FF0000">Share on Club :</ListItem>
          <ListItem
            transition="transform 1s"
            _hover={{
              transform: 'scale(0.98)',
              cursor: 'pointer'
            }}
            fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{ base: "10px", md: "17px" }} color="#FF0000">Dark Web Premium Zone :<span style={{ color: "#26A69A" }}>(18+ only)</span></ListItem>


        </UnorderedList>


      </Box>




      {/* NavBar instructions part ends here --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}






      {/* Haunted images algo part starting here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>>>>>>>>>> */}






      <Box w="100%" h="auto" bg="#000000" >
        <Divider w="100%" animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} borderColor={"#fff"} />
        <Text
          transition="transform 1s"
          _hover={{
            transform: 'scale(0.9)',
            cursor: 'pointer'
          }}
          pt="25px" pb="25px" fontFamily={"just-die-already"} textAlign={"center"} color="#FF0000" fontSize={{ base: "3xl", md: "6xl" }}>HAUNTED PLACES</Text>
        <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"} />
        <Text pt="10px" w={{ base: "90%", md: "67%" }} m="auto" fontFamily={"just-die-already"} textAlign={{ base: "justify", md: "center" }} color="#fff" fontSize={{ base: "0.75rem", md: "1rem" }}>
          We use state-of-the-art deep learning algorithms to learn how haunted houses, or toxic cities look like.
          Then we apply the skills style to famous landmarks and present you: AI-powered horror all over the world!
        </Text>

      </Box>






      {/* AI Component Importing  here ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


      <Box w="100%" h={"auto"} bg={gradient2} ><AI /><Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#fff"} /></Box>


      {/* AI generated Images slider ends here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}






      {/* Horror stories section starting here -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <Box
        w="100%" h="auto" m="auto"
        bg={gradient2}
      // border="2px solid red"
      >

        <Text
          transition="transform 1s" _hover={{ transform: 'scale(0.9)', cursor: 'pointer' }}
          fontFamily={"just-die-already"} color="#FF0000" textAlign={"center"} fontSize={{ base: "4xl", md: "8xl" }}>"Eerie Videos"

        </Text>
        <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"} />

        <Box w="100%" mt="25px" mb="25px" h="auto"
        //  border="2px solid red"
        >
          <Box
            w={{ base: "95%", md: "95%" }}
            m="auto" h={{ base: "auto", md: "auto" }}
            border="0.5px solid #81D4FA"
            bg={"#"} animation={`${bounceAnimation} 7s infinite`}
            borderRadius={"md"}
          >

            <Text textAlign={"justify"} textColor={"#fff"} fontFamily={"just-die-already"} fontSize={{ base: "12px", md: "25px" }}>
              <span style={{ color: "#FF0000" }}>Dare to Visit: </span>Are you up for an adventure? Explore the world of scares and
              mysteries at "Dare to Visit." Discover eerie stories and puzzling secrets that will intrigue you. If you're feeling
              courageous, click "More" to dive deeper. Get ready for a special, spine-tingling experience designed just for the brave
              . We want to make the thrills even more exciting, giving you a taste of something extraordinary. Remember, real fear comes
              from within – only on "Dare to Visit." Are you prepared to begin?
            </Text>
          </Box>
        </Box>

        {/* Importing vdeo component here-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <VideoComponent />

        {/* video component ends here ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <Box
          // border="2px solid red" 
          display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button w="auto"
            color="#FFFFFF"
            bg={`linear-gradient(to right, #FF0000, #000000, #FF0000)`}
            fontSize={{ base: "xs", md: "lg" }}
            fontFamily={"just-die-already"}
            p={5} mb={{ base: "30px", md: "50px" }}
            mt={{ base: "10px", md: "30px" }}
            _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 8px 5px #F5F5F5' }}
            _focus={{ outline: 'none' }}
            boxShadow='0 0 8px 5px #90A4AE'
            _active={{ transform: 'scale(1.5)' }}
            borderRadius={"none"}
            onClick={handleVideoPage}

          >Watch More</Button>

        </Box>

      </Box>



      {/* Podcast audio payer part startinbg here -------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <Box
        w="100%" h={{ base: "60vh", md: "100vh" }}

        // bg={gradient2}
        backgroundImage={`url(${Mid2})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      //  border="2px solid red"
      >
        <Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#fff"} />
        <Text
          transition="transform 1s"
          _hover={{
            transform: 'scale(0.9)',
            cursor: 'pointer'
          }}
          onClick={handlePodcastPage}
          fontFamily={"just-die-already"} color="#FF0000" textAlign={"center"} fontSize={{ base: "4xl", md: "8xl" }}>"Spooky Pod"
        </Text>
        <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"} />
        {/* importing audioPlayer component here */}


        <Box w={{ base: "96%", md: "80%" }} m="auto" h="auto">
          <Text
            transition="transform 2s"
            onClick={handlePodcastPage}
            _hover={{
              transform: 'scale(0.9)',
              cursor: 'pointer'

            }}
            pt="15px" pb="15px" textAlign={"justify"} textColor={"#FFFFFF"} fontSize={{ base: "12px", md: "14px" }} fontFamily={"just-die-already"}>

            Discover our website's huge selection of <span style={{ color: "#FF0000" }}>podcasts</span>and scary stories! Whether
            you love chilling tales or gripping series, we've got something for everyone.
            Start exploring now!</Text>
        </Box>

        <Box w={{ base: '92%', md: '60%' }} h="auto" m="auto">
          <Image
            _hover={{ boxShadow: '0 0 10px #B0BEC5' }}
            src={AudioPlayerIMG} onClick={handlePodcastPage} alt="error" w="100%" h="auto" />
        </Box>


      </Box>

      {/* Podcast audio payer part ending here -------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}



      <Box
        bg={gradient2}
        // border="2px solid red" 
        display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button w="auto"
          color="#FFFFFF"
          bg={`linear-gradient(to right, #FF0000, #000000, #FF0000)`}
          fontSize={{ base: "xs", md: "lg" }}
          fontFamily={"just-die-already"}
          p={5} mb={{ base: "30px", md: "50px" }}
          mt={{ base: "30px", md: "50px" }}
          _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 8px 5px #F5F5F5' }}
          _focus={{ outline: 'none' }}
          boxShadow='0 0 8px 5px #90A4AE'
          _active={{ transform: 'scale(1.5)' }}
          borderRadius={"none"}
          onClick={handlePodcastPage}
        >Pod's here</Button>
      </Box>




      {/* importing Scare on audio player here --------------------------------------------------------------------------------------------------------------------------- */}

      <Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#000000"} />
      <Box w="100%" h="auto" bg="#000000"><Text
        transition="transform 1s"
        _hover={{
          transform: 'scale(0.9)',
          cursor: 'pointer'
        }}
        bg={gradient2} fontFamily={"just-die-already"} color="#FF0000" textAlign={"center"} fontSize={{ base: "3xl", md: "5xl" }}>"What our users share"
      </Text>
        <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"} />
      </Box>




      <Flex h="auto" direction={flexDirection}
        bg={gradient2}
      //  border="2px solid red"

      >
        <Box pt={{ base: "5%", md: "10%" }} w={{ base: "100%", md: "60%" }} >

          <DummyScareOnCard />
        </Box>

        {/* importing ScareonCard component here----------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <Box pt={{ base: "5%", md: "1%" }} display="flex" justifyContent={"center"} alignItems={"center"} m="auto" w={{ base: "90%", md: "40%" }}>
          <DummyScareOnClip />
        </Box>

        {/* Ending Scare on audio player here --------------------------------------------------------------------------------------------------------------------------- */}

      </Flex>


      <Box
        bg={gradient2}
        // border="2px solid red" 
        display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button w="auto"
          color="#FFFFFF"
          bg={`linear-gradient(to right, #FF0000, #000000, #FF0000)`}
          fontSize={{ base: "xs", md: "lg" }}
          fontFamily={"just-die-already"}
          p={5} mb={{ base: "30px", md: "50px" }}
          mt={{ base: "30px", md: "50px" }}
          _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 8px 5px #F5F5F5' }}
          _focus={{ outline: 'none' }}
          boxShadow='0 0 8px 5px #90A4AE'
          _active={{ transform: 'scale(1.5)' }}
          borderRadius={"none"}
          onClick={handleScareOnPage}
        >View Post</Button>
      </Box>




      {/* starting trail 3D vertual tour section here ---------------------------------------------------------------------------------------------------------------------------------*/}

      <Box
        w="100%"
        h="auto"
        bg="#000000"
      //  border="1px solid red"
      >
        <Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#fff"} />
        <Text transition="transform 1s"
          _hover={{
            transform: 'scale(0.9)',
            cursor: 'pointer'
          }} pt={{ base: "20px", md: "20px" }} pb={{ base: "20px", md: "20px" }} m="auto" bg={gradient2} fontFamily={"just-die-already"} color="#FF0000" textAlign={"center"} fontSize={{ base: "21px", md: "5xl" }}>"Explore the Virtual tour"</Text>
        <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"} />
      </Box>


      <Box w="100%"
        h={{ base: "80vh", md: "140vh" }}
        m="auto"
        // border="1px solid cyan"
        backgroundImage={`url(${HauntedBG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"

      >



        <Box
          w="100%"
          h={{ base: "80vh", md: "130vh" }}
          // border="1px solid lime"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >

          {/*  sliding box here   */}

          <Box
            transition="transform 1s"
            _hover={{
              transform: 'scale(1.05)',
              cursor: 'pointer'
            }}
            w={{ base: "90%", md: "45%" }}
            m="auto"
            h={{ base: "65vh", md: "100vh" }}
            overflow="auto"
            p="4"
            bgColor={"#181818"}
            borderRadius="none"
            css={{
              "&::-webkit-scrollbar": {
                width: "5px", // Adjust the width as per your preference
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#F44336", // Customize the scrollbar thumb color
                borderRadius: "10px", // Adjust the scrollbar thumb border-radius
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#B0BEC5", // Customize the scrollbar track color
                borderRadius: "10px", // Adjust the scrollbar track border-radius
              },
            }}
          >



            {/* content starts here*/}
            <Box m="auto" w={{ base: "95%", md: "95%" }} h="auto"
            //  border="2px solid red"
            >
              <Text textAlign={"left"} color="#F44336" fontFamily={"dogica-lite"} fontSize={{ base: "0.8rem", md: "1.4rem" }}>WELCOME TO HASHIMA ISLAND</Text>


              <Text mt="20px" color="#B0BEC5" fontFamily={"dogica-lite"} fontSize={{ base: "0.5rem", md: "0.8rem" }} textAlign={"justify"}>On June 27th 2013, Google released brand new street view photographs of a forgotten world – Hashima Island, otherwise
                known as ‘Gunkanjima’, off the South-West coast of Japan in Nagasaki Prefecture. With the aid of Google Chrome,
                this website allows you to take a digital dip into history to discover the secrets & legends hidden amongst Hashima's
                mysterious, desolate landscape.
              </Text>


              <Text mt="20px" color="#B0BEC5" fontFamily={"dogica-lite"} fontSize={{ base: "0.5rem", md: "0.8rem" }} textAlign={"justify"}>The aim of this page is to give you an advanced introduction into where you are able to explore within the island,
                adding context and back-story to Google's amazing street-view photography. I hope you enjoy this website as much as I
                have done creating it...
              </Text>


              <Box mt="10px" w="100%" h={{ base: "160px", md: "290px" }} >
                <Image cursor="pointer" onClick={handle3DviewPage} w="100%" h="100%" src={Hashima} alt="hashima error" />
              </Box>

              <Text mt="10px" textAlign={"left"} color="#F44336" fontFamily={"dogica-lite"} fontSize={{ base: "0.7rem", md: "1rem" }}>HASHIMA ISLAND: THE STORY</Text>


              <Text mt="20px" color="#B0BEC5" fontFamily={"dogica-lite"} fontSize={{ base: "0.5rem", md: "0.8rem" }} textAlign={"justify"}>
                Hashima island is one of the 505 uninhabited islands in Nagasaki Prefecture off of the South West coast of Japan,
                standing at 61,000 square metres in size. But the island was not always uninhabited, as it was once home to a major
                coal mining operation managed by Mitsubishi, at its peak, housing 5,259 people which resulted in a staggering 83,500
                people per square kilometre, making it one of the most densely populated places in world history. The island is
                also known as 'Battleship Island', named after its external appearance and unique silhouette.
              </Text>



              <Text mt="20px" color="#B0BEC5" fontFamily={"dogica-lite"} fontSize={{ base: "0.5rem", md: "0.8rem" }} textAlign={"justify"}>
                Mitsubishi took control of the island in 1890 after its first inhabitation 3 years earlier, and began its relentless
                coal mining operation which lasted well beyond two world wars, and almost a century of memories before suddenly fading
                into history in 1974. Coal mining was slowing down rapidly in the 1960s due to the surge of popular petroleum and
                thus the island's destiny was decided in ‘74 when Mitsubishi announced the closure of operation.
              </Text>


              <Text mb="20px" mt="20px" color="#B0BEC5" fontFamily={"dogica-lite"} fontSize={{ base: "0.5rem", md: "0.8rem" }} textAlign={"justify"}>
                The island was emptied so quickly that many items and possessions still remain for you to find as you explore the
                landscape and interiors – maybe you may come across the spirits of cats which couldn't be found before their owners
                took the rest of their lives back to the mainland in ‘74. All else that remains is lost history, to be lived all over
                again.
              </Text>


              <Divider mb="20px" mt="20px" borderColor={"#999"} />
              <Text cursor="pointer" onClick={handle3DviewPage} mb="20px" mt="20px" color="#F44336" fontFamily={"dogica-lite"} fontSize={{ base: "0.3rem", md: "0.6rem" }} textAlign={"justify"}>STUDIES OF THE MODERN BUILDINGS ON GUNKANJIMA</Text>
              <Divider mb="20px" mt="20px" borderColor={"#999"} />
              <Text cursor="pointer" onClick={handle3DviewPage} mb="20px" mt="20px" color="#F44336" fontFamily={"dogica-lite"} fontSize={{ base: "0.3rem", md: "0.6rem" }} textAlign={"justify"}>HASHIMA: THE GHOST ISLAND, BY Dare to visit.</Text>
              <Divider mb="20px" mt="20px" borderColor={"#999"} />
              <Text cursor="pointer" onClick={handle3DviewPage} mb="20px" mt="20px" color="#F44336" fontFamily={"dogica-lite"} fontSize={{ base: "0.3rem", md: "0.6rem" }} textAlign={"justify"}>MAP OF HASHIMA</Text>
              <Divider mb="20px" mt="20px" borderColor={"#999"} />



              <Box
                bgColor={"#181818"}
                // border="2px solid red" 
                display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Button
                  color="#FFFFFF"
                  w={{ base: "120px", md: "150px" }}
                  h={{ base: "30px", md: "40px" }}
                  bg={`linear-gradient(to right, #FF0000, #000000, #FF0000)`}
                  fontSize={{ base: "xs", md: "lg" }}
                  fontFamily={"just-die-already"}
                  mb={{ base: "30px", md: "50px" }}
                  mt={{ base: "30px", md: "50px" }}
                  _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 8px 5px #F5F5F5' }}
                  _focus={{ outline: 'none' }}
                  boxShadow='0 0 8px 5px #90A4AE'
                  _active={{ transform: 'scale(1.5)' }}
                  borderRadius={"none"}
                  onClick={handle3DviewPage}
                >Visit</Button>
              </Box>

            </Box>

            {/* scroll content ends here*/}
          </Box>
        </Box>
      </Box>












      {/* Introducing Dark || Deep web Page || section here --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}








      <Box w="100%" h="auto" bg="#000000">

        <Box w="100%" h="auto" bg="#000000">

          <Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#fff"} />
          <Text transition="transform 1s"
            _hover={{
              transform: 'scale(0.9)',
              cursor: 'pointer'
            }} pt={{ base: "20px", md: "20px" }} pb={{ base: "20px", md: "20px" }} m="auto" bg={gradient2} fontFamily={"just-die-already"} color="#FF0000" textAlign={"center"} fontSize={{ base: "21px", md: "5xl" }}>"Explore Deep Dark web"</Text>
          <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"} />

        </Box>


        <Box w={{ base: "96%", md: "90%" }} h="auto" m={{ base: "auto", md: "auto" }}>

          <Text
            color="#fff"
            textAlign={"left"}
            fontFamily={"just-die-already"} fontSize={{ base: "12px", md: "25px" }}
            mt="10px" mb="10px"
          >
            Welcome to the Dark Web Section :
          </Text>

          <Text
            color="#B0BEC5"
            textAlign={"justify"}
            fontFamily={"dogica-lite"} fontSize={{ base: "0.5rem", md: "0.8rem" }}
          >Explore the hidden realms of the internet with our Dark Web Section. This unique and mysterious corner of our website allows you to glimpse into the enigmatic world of the dark web, where anonymity reigns and secrets lurk in the shadows.</Text>

          <Text
            color="#fff"
            textAlign={"left"}
            fontFamily={"just-die-already"} fontSize={{ base: "12px", md: "25px" }}
            mt="10px" mb="10px"
          >
            Stay Curious, Stay Safe :
          </Text>

          <Text
            color="#B0BEC5"
            textAlign={"justify"}
            fontFamily={"dogica-lite"} fontSize={{ base: "0.5rem", md: "0.8rem" }}
          >While you explore, remember that the dark web can be a mysterious and unpredictable place. Our Dark Web Section provides a curated experience, offering you a glimpse without the risks associated with uncharted territories.</Text>

          <Text
            color="#fff"
            textAlign={"left"}
            fontFamily={"just-die-already"} fontSize={{ base: "12px", md: "25px" }}
            mt="10px" mb="10px"
          >
            Dive In :
          </Text>

          <Text
            color="#B0BEC5"
            textAlign={"justify"}
            fontFamily={"dogica-lite"} fontSize={{ base: "0.5rem", md: "0.8rem" }}
          >Ready to embark on a journey through the hidden depths of the internet? Click below to enter the Dark Web Section and satisfy your curiosity.</Text>

          <Text
            textDecoration={"underline"}
            color="blue.400"
            textAlign={"left"}
            fontFamily={"dogica-lite"}
            fontSize={{ base: "0.5rem", md: "0.8rem" }}
            mt="10px"
            mb="10px"
            _hover={{ cursor: "pointer", color: "red.400" }}
            onClick={handleDW}
          >
            Enter the Dark Web :-
          </Text>

          <Box p={{ base: "0", md: "5" }}>
            <Grid templateColumns={{ base: 'repeat(2, 2fr)', md: 'repeat(4, 1fr)' }} gap={{ base: "5", md: "5" }}>
              <GridItem _hover={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }} w='100%' h={{ base: "150px", md: "220px" }}>
                <Image src={Hacker} alt='Image 1' w="100%" h="100%" />
              </GridItem>
              <GridItem _hover={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }} w='100%' h={{ base: "150px", md: "220px" }}>
                <Image src={HauntedHouse} alt='Image 2' w="100%" h="100%" />
              </GridItem>
              <GridItem _hover={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }} w='100%' h={{ base: "150px", md: "220px" }}>
                <Image src={GirlHacker} alt='Image 3' w="100%" h="100%" />
              </GridItem>
              <GridItem _hover={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }} w='100%' h={{ base: "150px", md: "220px" }}>
                <Image src={SkullImg} alt='Image 4' w="100%" h="100%" />
              </GridItem>
            </Grid>


            <Box
              bgColor={"#000000"}
              // border="2px solid red" 
              display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Button
                color="#FFFFFF"
                w={{ base: "120px", md: "150px" }}
                h={{ base: "30px", md: "40px" }}
                bg={`linear-gradient(to right, #FF0000, #000000, #FF0000)`}
                fontSize={{ base: "xs", md: "lg" }}
                fontFamily={"just-die-already"}
                mb={{ base: "30px", md: "50px" }}
                mt={{ base: "30px", md: "50px" }}
                _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 8px 5px #F5F5F5' }}
                _focus={{ outline: 'none' }}
                boxShadow='0 0 8px 5px #90A4AE'
                _active={{ transform: 'scale(1.5)' }}
                borderRadius={"none"}
                onClick={handleDW}
              >Visit</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Ending Dark || Deep web Page || section here ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}













      <Divider />
      <Footer />


    </>
  );
}

export default Home;