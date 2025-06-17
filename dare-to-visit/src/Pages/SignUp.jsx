import React, { useEffect, useRef, useState } from 'react';
import { Box, Input, Text, Button, keyframes, } from '@chakra-ui/react';
import "../Fonts.css"
import { BE_URL } from "../URL.js"
import { Navigate, useNavigate } from "react-router-dom";
import { showToast } from '../Utils/toast';
import axios from 'axios';


const backgroundVideo = 'https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Videos/BGvideo.mp4'; // Replace with the actual path to your video file
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px coral; }
  50% { box-shadow: 0 0 10px 5px coral; }
  100% { box-shadow: 0 0 0px coral; }
`;
function SignUp() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()
  const videoRef = useRef(null);

  const filledData = {
    phone: phone,
    email: email,
    name: name,
    password: password
  }



  const handleSignin = async (e) => {
    e.preventDefault();

    const { phone, email, name, password } = filledData;

    // Simple client-side validation
    if (!phone || !email || !name || !password) {
      showToast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        status: "warning",
        position: "top",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BE_URL}api/user/regester`, filledData);

      if (res.data.msg === "New User Created") {
        setLoading(false);
        showToast({
          title: "Registration Successful",
          description: "Your account has been created successfully!",
          status: "success",
          position: "top",
        });
        navigateToMain(`/login`); // redirect to home or login
      } else {
        setLoading(false);
        showToast({
          title: "Unexpected Response",
          description: "Something went wrong. Please try again.",
          status: "error",
          position: "top",
        });
      }

    } catch (error) {
      setLoading(false);

      if (error.response) {
        const message = error.response.data?.msg || "Something went wrong";
        showToast({
          title: "Registration Failed",
          description: message,
          status: "error",
          position: "top",
        });
      } else if (error.request) {
        showToast({
          title: "Network Error",
          description: "Server not responding. Try again later.",
          status: "error",
          position: "top",
        });
      } else {
        showToast({
          title: "Error",
          description: "Unexpected error occurred.",
          status: "error",
          position: "top",
        });
      }

      console.error("Error in creating new user:", error.message);
    }
  };


  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  const handleAudio = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const navigateToMain = () => {
    Navigate("/login")
  }

  return (
    <>

      {loading ? (
        <p>Loading....</p>

      )
        :
        (
          <Box
            onClick={handleAudio}
            width="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            overflow="hidden"

          >



            <video
              ref={videoRef}
              id="background-video"
              src={backgroundVideo}
              autoPlay
              muted
              loop
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1
              }}
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              p={4}
              textAlign="center"
              zIndex={1}
            >
              <Text
                fontFamily="just-die-already"
                textStyle="horror"
                color="white"
                fontSize={{ base: "67px", md: "65px" }}
                m="auto"
              >
                Sign Up
              </Text>
            </Box>
            <Box

              border="1px dashed #78909C"
              // maxWidth={'400px'}
              w={{ base: "80%", md: "25%" }}
              p={{ base: "45", md: "5" }}
              borderWidth={1}
              borderRadius={8}
              boxShadow="lg"
              bgColor="transparent"
              position="relative"
              zIndex={1}
            >
              <form onSubmit={handleSignin} >
                <Box p={0} mb="5">

                  <Text textAlign={"center"} color="#fff" fontFamily="caslon-antique" fontSize={{ base: "18px", md: "25px" }} textStyle="horror">Phone Number</Text>

                  <Input
                    onChange={(e) => setPhone(e.target.value)}
                    onClick={stopPropagation}
                    color="#FF6F00"
                    variant="unstyled"
                    placeholder="Enter Phone Number"
                    textAlign="center"
                    fontFamily="caslon-antique"
                    bg="none"
                    mx="auto"
                    type="number"
                    border="none"
                  />
                </Box>
                <Box p={0} mb="5">

                  <Text fontFamily="caslon-antique" textAlign={"center"} color="#fff" fontSize={{ base: "18px", md: "25px" }} textStyle="horror">Email address</Text>

                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={stopPropagation}
                    color="#FF6F00"
                    variant="unstyled"
                    placeholder="Enter your Email"
                    textAlign="center"
                    fontFamily="caslon-antique"
                    bg="none"
                    mx="auto"
                    type="text"
                    border="none"
                  />
                </Box>
                <Box p={0} mb="5">

                  <Text fontFamily="caslon-antique" textAlign={"center"} color="#fff" fontSize={{ base: "18px", md: "25px" }} textStyle="horror">Username</Text>

                  <Input
                    onChange={(e) => setName(e.target.value)}
                    onClick={stopPropagation}
                    color="#FF6F00"
                    variant="unstyled"
                    placeholder="Enter your Username"
                    textAlign="center"
                    fontFamily="caslon-antique"
                    bg="none"
                    mx="auto"
                    type="text"
                    border="none"
                  />
                </Box>
                <Box p={0}>

                  <Text fontFamily="caslon-antique" textAlign={"center"} color="#fff" fontSize={{ base: "18px", md: "25px" }} textStyle="horror">Password</Text>

                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={stopPropagation}
                    color="#FF6F00"
                    border="none"
                    variant="unstyled"
                    placeholder="Dare to create your password"
                    fontFamily="caslon-antique"
                    textAlign="center"
                    bg="none"
                    mx="auto"
                    type="password"
                  />
                </Box>
                <Button
                  _hover={{ boxShadow: '0 0 10px 5px coral' }}
                  animation={`${glowAnimation} 2s infinite`}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(1.3)' }}
                  w={{ base: "120px", md: "150px" }}
                  h={{ base: "35px", md: "40px" }}
                  type="submit" display={"flex"} alignItems={"center"} onClick={handleSignin} bgColor="transparent" borderRadius="md" mx="auto" mt={4}>
                  <Text color="#FF7043" fontFamily="caslon-antique">Welcome</Text>
                </Button>
              </form>
            </Box>
          </Box>
        )
      }



    </>
  );
}

export default SignUp;







