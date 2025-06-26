

import React, { useState } from 'react';
import { Text, Image, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';
const L_arrow = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/NavBar2/L-arrow.png?raw=true"
const PodCast = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/NavBar2/podcast.png?raw=true"
const Reels = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/NavBar2/reel.png?raw=true"
const DarkWeb = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/NavBar2/dark%20web.png?raw=true"
const Home = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/NavBar2/home.png?raw=true"
const Profile = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/NavBar2/profile.png?raw=true"

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;


const colorChangeAnimation = keyframes`
  0%, 100% {
    color:rgb(1, 66, 197);
  }
  80% {
    color:rgb(4, 159, 123);
  }
  50% {
    color:rgb(55, 55, 49);
  }
  30% {
    color:rgb(37, 3, 19);
  }
`;


function Navbar() {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const numButtons = 5;
  const angle = Math.PI / (numButtons - 1); // Angle between each button in radians

  const parentBoxHeight = showButtons ? '170px' : '50px'; // Adjusted parent box height based on button visibility

  const buttonData = [
    {
      path: '/profile',
      image: Profile,
      text: 'Profile',
    },
    {
      path: '/darkweb',
      image: DarkWeb,
      text: 'DarkWeb',
    },
    {
      path: '/podcast',
      image: PodCast,
      text: 'PodCast',
    },
    {
      path: '/social',
      image: Reels,
      text: 'Reels',
    },
    {
      path: '/',
      image: Home,
      text: 'Home',
    },
    // Add more objects for each button
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: 0, // Align to the right side of the viewport
        transform: 'translateY(-50%)',
        zIndex: 1000, // Ensure it's above other content
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', background: "transparent", alignItems: 'center', height: parentBoxHeight }}>
        <Box
          // border="1px solid red"

          // backgroundColor="blue.200"
          borderRadius="50%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Box
            animation={`${float} 2.5s ease-in-out infinite`}
            onClick={toggleButtons}
            // bg={NavBG}
            style={{
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginBottom: '0px',
              backgroundColor: 'transparent',
              color: 'white',

              // border:"1px solid red"
            }}
          >
            <Image borderRadius={"50%"} src={L_arrow} w="100%" h="100%" />
          </Box>
          {showButtons && (
            <div
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              {buttonData.map((button, index) => (
                <Box
                 
                  key={index}
                  style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) translateX(${-Math.sin(angle * index) * 70}px) translateY(${Math.cos(angle * index) * 70}px)`,
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    border: "2.5px solid rgb(61, 60, 60)",
                    color: 'white',
                  }}
                  onClick={() => navigate(button.path)}
                >
                  <span style={{ fontSize: '10px' }}></span>
                  <Image  src={button.image} w="70%" h="65%" />
                  <Text  fontWeight={"bold"} animation={`${colorChangeAnimation} 8s infinite alternate`} fontSize="9px" >{button.text}</Text>
                </Box>
              ))}
            </div>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Navbar;

