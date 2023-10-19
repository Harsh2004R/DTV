import React, { useState, useEffect } from 'react';
import { Box, Button, Text, VStack, Image, keyframes, Divider } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import Nav from "../Components/Nav";
import Navbar2 from "../Components/Navbar2";
import ArticleList from "../Components/ArticleList";
import CustomAlert2 from '../Components/CustomAlert2';
import Footer from "../Components/Footer";



const DWintro1 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Videos/DWintro1.mp4";
const DWintro2 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Videos/DWintro2.mp4";




const DWthumbnail1 = "https://i.ibb.co/GRWLQNf/DWthumbnail1.png";
const DWthumbnail2 = "https://i.ibb.co/nbXFPTJ/DWthumbnail2.png";
const DWgameofwex = "https://i.ibb.co/K5mg48L/DWgameofwex.jpg";
const DWsprit = "https://i.ibb.co/jDGhrKS/DWsprit.png";
const DWbg1 = "https://img.freepik.com/free-vector/halloween-background-with-tree-pumpkin-grunge-style_1048-3038.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais";
const DWbg2 = "https://img.freepik.com/free-vector/gradient-halloween-instagram-posts-collection-with-photo_23-2149065411.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais";


const YY1 = "https://i.ibb.co/vXbVjdX/YY1.png";
const YY2 = "https://i.ibb.co/wr7sFh0/YY2.png";
const YY3 = "https://i.ibb.co/m6VMt0t/YY3.png";
const YY4 = "https://i.ibb.co/68htgy0/YY4.png";
const YY5 = "https://i.ibb.co/vmbXnr4/YY5.png";
const YY6 = "https://i.ibb.co/C8zyfj2/YY6.png";
const YY7 = "https://i.ibb.co/thdbnf9/YY7.png";
const YY8 = "https://i.ibb.co/pQxf5mp/YY8.png";



const videoData = [
  {
    embedLink: 'https://www.youtube.com/embed/L0yvNT9DGi0',
    title: 'THIS DARK WEB VIDEO GOT LEAKED ON THE SURFACE WEB',
  },
  {
    embedLink: 'https://www.youtube.com/embed/1R5bt_jkyIQ',
    title: 'REAL VIDEOS FOUND ON THE DARK WEB PART 2',
  },
  {
    embedLink: 'https://www.youtube.com/embed/9W6QT22qvKw',
    title: 'Man Finds Creepy Videos On The Dark Web Unfriended Dark Web Fear',
  },
  {
    embedLink: 'https://www.youtube.com/embed/nNUEvFiZvV8',
    title: 'What S The Dark Web Really Like',
  },
  {
    embedLink: 'https://www.youtube.com/embed/pSfqOHgb5BI',
    title: 'REAL VIDEOS FOUND ON THE DARK WEB PART 1',
  },
  {
    embedLink: 'https://www.youtube.com/embed/1Omw9VOViXQ',
    title: 'What Is Dark Web Shorts Simplilearn',
  },
  {
    embedLink: 'https://www.youtube.com/embed/hwNnhIHtUtQ',
    title: 'This Happens On Dark Web',
  },
  {
    embedLink: 'https://www.youtube.com/embed/IfJjsFOYAQA',
    title: 'EXPOSED Blank Room Soup THE DARK WEB UNMASKED',
  },
  {
    embedLink: 'https://www.youtube.com/embed/mDzqdv3VjKE',
    title: 'How To Find Anything On The Dark Web',
  },
  {
    embedLink: 'https://www.youtube.com/embed/cG6IfZD1Xo8',
    title: 'Darkest Dark Web Videos Ever Found Uncovering Dark Web 1',
  },
  {
    embedLink: 'https://www.youtube.com/embed/_dX_brFw7BI',
    title: 'Darkest Dark Web Videos Ever Found Uncovering Dark Web 2',
  },
  {
    embedLink: 'https://www.youtube.com/embed/qvijlcZjeaU',
    title: 'Real Creepy Dark Web Videos Ever Found Uncovering Dark Web 3',
  },
  {
    embedLink: 'https://www.youtube.com/embed/vrLxEsSUC2c',
    title: 'Dark Web What Is Dark Web Is Dark Web Illegal Deep Web Hidden Internet Collegewallah',
  },
  {
    embedLink: 'https://www.youtube.com/embed/XQUc5pdJ1iI',
    title: 'TERRIFYING SIDE OF THE WEB DARK WEB PART 2',
  },
  {
    embedLink: 'https://www.youtube.com/embed/Z5uQ87Wiq2s',
    title: 'Scary DEEP DARK WEB Videos That No One Has Ever Seen',
  },
  {
    embedLink: 'https://www.youtube.com/embed/VLsQynRgjck',
    title: 'REAL VIDEOS FOUND ON THE DARK WEB PART 1 Fing',
  },
  {
    embedLink: 'https://www.youtube.com/embed/dsducsds',
    title: 'Exposing The Dark Web',
  },
  {
    embedLink: 'https://www.youtube.com/embed/1SejpANfjf4',
    title: 'Dark Web Real Video Shivamsingh Ytshorts Shorts',
  },
  {
    embedLink: 'https://www.youtube.com/embed/Xf37u1WXtJ8',
    title: 'What Happens On Dark Web',
  },
  {
    embedLink: 'https://www.youtube.com/embed/oRElnytHAG4',
    title: 'Creepy Dark Web Videos Leaked Videos Minute Science',
  },
];




const handle_yyyyyyy = () => {
  const yyyyyyy = "https://yyyyyyy.info/"
  window.location.href = yyyyyyy;
}
const yyyyyyy_info = () => {
  const info = "https://www.reddit.com/r/RBI/comments/mtbowe/information_about_wwwyyyyyyyinfo_a_very_strange/"
  window.location.href = info;
}

const slide1 = [
  YY1, YY2, YY3, YY4
]
const slide2 = [
  YY5, YY6, YY7, YY8
]






const glowAnimation = keyframes`
0% { box-shadow: 0 0 0px #000000; }
50% { box-shadow: 0 0 30px 15px #000000; }
100% { box-shadow: 0 0 0px #000000; }
`;

const shadow = keyframes`
  0% {
    text-shadow: 15px 15px 15px #4FC3F7;
    text-shadow: #4FC3F7;
  }
  50% {
    text-shadow: 10px 10px 10px #FF0000;
  }
  100% {
    text-shadow: #4FC3F7;
  }
`;


const typewriter = keyframes`
  from {
    width: 30%;
  }
  to {
    width: 100%;
  }
`;




const gradient = `linear-gradient(to right ,#000000, #80D8FF, #000000)`;
const gradient_x = `linear-gradient(to right ,#000000, #000000, #000000)`;
const gradient_xx = `linear-gradient(to right ,#000000, #7D1616, #000000)`;



function DarkWeb() {
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

  const [index, setIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  const handleDarkWebPaypage = () => {
    Navigate("/darkwebpay")
  }

  useEffect(() => {

    setShowAlert(true);

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % message.length);
    }, 200);

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




  // image logic slide1 ===

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % slide1.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);




  // image logic slide1 end===
  // image logic slide2 ===

  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % slide2.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);




  // image logic slide2 end===

  const Navigate = useNavigate();
  return (
    <>




      {/* Importing Navbar & Navbar2 here */}





      <Nav />
      <Navbar2 />







      <Box
        w="100%" h="100vh"
        // border="2px solid red"
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
      >


        <Box w={{ base: "100%", md: "50%" }} h={{ base: "60vh", md: "100vh" }}
          // border="1px solid #fff"
          bg={gradient}
          display={{ base: "flex", md: "" }}
          justifyContent="center"
          alignItems="center"
          flexDirection={{ base: "column", md: "column" }}
        >
          <Box
            m="5px"
            w={{ base: "75%", md: "70%" }} h={{ base: "30vh", md: "43vh" }}
            // border="1px solid #fff"
            backgroundImage={`url(${DWbg1})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >



          </Box>

          <Box
            m="5px"
            w={{ base: "75%", md: "70%" }} h={{ base: "30vh", md: "43vh" }}
            // border="1px solid #fff"
            backgroundImage={`url(${DWbg2})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >



          </Box>

        </Box>

        <Box w={{ base: "100%", md: "50%" }} h={{ base: "50vh", md: "100vh" }}
          // border="1px solid #fff"
          bg={gradient}
          display={{ base: "flex", md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <CustomAlert2 isOpen={showAlert} onClose={handleCloseAlert} />
          <Text fontFamily={"fiendish"}
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign={"center"}
            animation={{ base: `${typewriter} 4s steps(80) 1s infinite both`, md: `${typewriter} 4s steps(80) 1s infinite both` }}
          >Continue in darkweb...</Text>

        </Box>


      </Box>

      <Box>
        {showAlert && <CustomAlert2 message={message[index]} />}
      </Box>




      {/*   ## ---------->  Dark web video part starting here  <----------  ##*/}




      <Box bg={gradient_x}>


        <Text textAlign={"center"} color="#FFFFFF" fontSize={{ base: "4xl", md: "5xl" }} fontFamily={"just-die-already"} h={{ base: "80px", md: "100px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          animation={`${shadow} 2s infinite`}
        >

          The RED Rooms
        </Text>


      </Box>
      <Box w={{ base: "100%", md: "100%" }} h={{ base: "10vh", md: "12vh" }} bg={gradient_xx} >
        <Text w={{ base: "100%", md: "70%" }} fontFamily="dogica-lite" m="auto" pt="15px" textAlign={{ base: "justify", md: "center" }} color={"#69F0AE"} fontSize={{ base: "0.47rem", md: "0.8rem" }}>

          A room where people are tortured and murdered for an audience of viewers via the
          Dark Web, the viewers sometimes voting or bidding on the form of torture to be performed.
          Here are some clip and videos from darkweb.
        </Text>
      </Box>
      <Box
        w="100%" h={{ base: "85vh", md: "90vh" }}
        // border="2px solid teal"
        bg={gradient_xx}
        p={{ base: "5", md: "10" }}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}

      >




        <Box
          w={{ base: "100%", md: "45%" }}
          h={{ base: "35vh", md: "70vh" }}
          bg={gradient_xx}
        >
          <video
            src={DWintro2}
            style={{ width: "100%", height: "100%" }}
            controls
            poster={DWthumbnail1}
          />
        </Box>

        {/* Video 2 */}
        <Box
          w={{ base: "100%", md: "45%" }}
          h={{ base: "35vh", md: "70vh" }}
          bg={gradient_xx}
        >
          <video
            src={DWintro1}
            style={{ width: "100%", height: "100%" }}
            controls
            poster={DWthumbnail2}
          />
        </Box>


      </Box>


      <Box w="100%" bg={gradient_xx} h={{ base: "24vh", md: "21vh" }}
      // border="2px solid cyan"
      >

        <Text color="#69F0AE" fontFamily="dogica-lite" w={{ base: "100%", md: "85%" }} m="auto" textAlign={"justify"} fontSize={{ base: "0.47rem", md: "0.8rem" }} >


          The internet is such a multifaceted invention that most of us only ever scratch the surface of its potential.
          The “surface web” is where most internet users spend their time; websites like Amazon, Google, Wikipedia,
          and YouTube are accessible. However, the surface web contains about 4 to 5% of the internet’s content.
          The remaining 95 to 96% of the internet is split between the “deep web” and the “dark web”. Databases, academic archives,
          and federal documents comprise the deep web – it’s a realm of mostly inaccessible data that keeps the surface web up and running
          . The dark web, however, truly lives up to its name.


        </Text>
      </Box>







      {/* REality of dark web starts here----------------------------------------------------------------------- */}






      <Box
        w="100%" h="100vh"
        // border="2px solid red"
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "100%", md: "50%" }} h={{ base: "50vh", md: "100vh" }}
          // border="1px solid #fff"
          bg={gradient}
          display={{ base: "flex", md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >

          <Text fontFamily={"fiendish"}
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign={"center"}
            animation={{ base: `${typewriter} 4s steps(80) 1s infinite both`, md: `${typewriter} 4s steps(80) 1s infinite both` }}
          >Reality of darkweb...</Text>

        </Box>

        <Box w={{ base: "100%", md: "50%" }} h={{ base: "60vh", md: "100vh" }}
          // border="1px solid #fff"
          bg={gradient}
          display={{ base: "flex", md: "" }}
          justifyContent="center"
          alignItems="center"
          flexDirection={{ base: "column", md: "column" }}
        >
          <Box
            m="5px"
            w={{ base: "75%", md: "70%" }} h={{ base: "30vh", md: "43vh" }}
            // border="1px solid #fff"
            backgroundImage={`url(${DWgameofwex})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >



          </Box>

          <Box
            m="5px"
            w={{ base: "75%", md: "70%" }} h={{ base: "30vh", md: "43vh" }}
            // border="1px solid #fff"
            backgroundImage={`url(${DWsprit})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >



          </Box>

        </Box>




      </Box>


      {/* <Slider starting here........................................................... */}



      <Box w="100%" h="auto" bg={gradient_xx}
      // border={"2px solid cyan"}
      >
        <Text textAlign={"center"} bg={gradient_x} color="#FFFFFF" fontSize={{ base: "3xl", md: "5xl" }} display="flex"
          justifyContent="center"
          alignItems="center" fontFamily={"just-die-already"} h={{ base: "80px", md: "100px" }} animation={`${shadow} 2s infinite`}>Surface Web Glitch</Text>
        <Text color="#69F0AE" fontFamily="dogica-lite" w={{ base: "100%", md: "100%" }} pt="10px" m="auto" textAlign={{ base: "justify", md: "justify" }} fontSize={{ base: "0.47rem", md: "0.9rem" }}>
          (WARNING FOR PEOPLE WITH PHOTOSENSITIVE EPILEPSY) This site is a bizarre assault of flashing gifs, sounds,
          and comic sans text - all poorly formatted and seemingly random - that changes every time you refresh the page.
          It's a disaster area. Any sense I try to prescribe to it seems futile. But since everybody here watches Idea
          Channel, which is pretty much the poster child for finding meaning in seemingly meaningless things, I figured
          some of you might wanna help me make something of it. What are all your thoughts?The identify of the website
          owner has been hidden. This may be done for a valid reason as spammers use this information to email website
          owners. Unfortunately is also makes identification of the owner difficult. We prefer if the website does show
          his true identity.</Text>
        <Box w="100%" h="12vh" p={{ base: "5", md: "5" }}>
          <Button
            _hover={{ boxShadow: '0 0 10px 5px skyblue' }} border="1px dashed #29B6F6"
            w="150px"
            bg={gradient_xx}
            color="#FFFFFF"
            fontFamily="my"
            _focus={{ outline: 'none' }}
            _active={{ transform: 'scale(1.5)' }}
            textAlign={"center"}
            display="block"
            onClick={handle_yyyyyyy}

            m="auto">
            Explore</Button>
        </Box>

      </Box>



      <Box bg="black" w="100%" h={{ base: "72vh", md: "70vh" }}
        // border="2px solid red"
        display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "48%" }} h={{ base: "32vh", md: "61vh" }} margin={"auto"}
        // border="3px solid lime"
        >
          <Image w="90%" h={{ base: "31vh", md: "60vh" }} margin={"auto"} onClick={handle_yyyyyyy} src={slide1[currentImageIndex1]} alt={`Image ${currentImageIndex1}`} />
        </Box>

        <Box w={{ base: "100%", md: "48%" }} margin={"auto"} h={{ base: "32vh", md: "61vh" }}
        // border="4px solid lime"
        >
          <Image w="90%" h={{ base: "31vh", md: "60vh" }} margin={"auto"} onClick={handle_yyyyyyy} src={slide2[currentImageIndex2]} alt={`Image ${currentImageIndex2}`} />
        </Box>

      </Box>

      <Box bg={gradient_xx} w="100%" h="auto" p={{ base: "5", md: "10" }}>
        <Button
          _hover={{ boxShadow: '0 0 10px 5px skyblue' }} border="1px dashed #29B6F6"
          w="150px"
          bg={gradient_xx}
          color="#FFFFFF"
          fontFamily="my"
          _focus={{ outline: 'none' }}
          _active={{ transform: 'scale(1.5)' }}
          textAlign={"center"}
          display="block"
          onClick={yyyyyyy_info}
          m="auto">
          Want more?


        </Button>
      </Box>


      {/* dark web content starts here */}

      <Divider />
      <Box
        w="100%" h="15vh"
        //  border="2px solid cyan"
        bg="#000000"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text textAlign="center" color="#fff" fontFamily={"just-die-already"} animation={{ base: `${shadow} 2s infinite`, md: `$${shadow} 2s infinite` }} fontSize={{ base: "16px", md: "45px" }}>"Delving Deeper: Dark Web Insights"</Text>
      </Box>

      <Box
        w="100%" h="auto"
        //  border="2px solid cyan"
        bg="#000000"
      >


        {/* video2 here */}



        <VStack spacing={4}>
          {videoData.map((video, index) => (
            <Box
              key={index}
              display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent={"space-evenly"} w="100%" h={{ base: "40vh", md: "50vh" }}
            >
              <Box border="2px solid red" w={{ base: "100%", md: "50%" }} borderRadius={"8px"} h={{ base: "30vh", md: "48vh" }}>
                <iframe
                  width={"100%"}
                  height="100%"
                  borderRadius="18px"
                  src={video.embedLink}
                  title={video.title}
                  frameborder="0"
                  allowfullscreen
                ></iframe>

              </Box>

              <Box p="4" w={{ base: "100%", md: "40%" }} color="#FFFFFF">
                <Text fontWeight="bold" fontSize={{ base: "16px", md: "35px" }} fontFamily={"my"}>{video.title}</Text>
              </Box>
            </Box>
          ))}
        </VStack>

      </Box>



      {/* Dark web payed contet starting here */}




      <Divider />
      <Box w="100%" bg={gradient_x} h={{ base: "auto", md: "auto" }}
      // border="2px solid cyan"

      >

        <Text p={{ base: "5", sm: "8", md: "10" }} textAlign={"center"} animation={{ base: `${shadow} 2s infinite`, md: `$${shadow} 2s infinite` }} fontSize={{ base: "22px", md: "45px" }} fontFamily={"just-die-already"} color="#fff">Premium Dark Zone</Text>

        <Button display="alex" justifyContent={"center"} w="150px" onClick={handleDarkWebPaypage} _hover={{ boxShadow: '0 0 10px 5px skyblue' }} border="1px dashed #29B6F6" fontFamily={"my"} color="#fff" bg={gradient_xx} m="auto" textAlign="center">
          Visit Now
        </Button>

        <ArticleList />



      </Box>

      <Divider />

      <Footer />







    </>



  )
}

export default DarkWeb




