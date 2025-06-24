import React, { useEffect, useRef, useState } from 'react';
import { Box, Input, Text, Button, keyframes, Center, Spinner } from '@chakra-ui/react';
import "../Fonts.css"
import { BE_URL } from "../URL.js"
import { useNavigate } from "react-router-dom";
import { showToast } from '../Utils/toast';
import axios from 'axios';


const backgroundVideo = 'https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Videos/BGvideo.mp4'; // Replace with the actual path to your video file
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px rgb(57, 60, 121); }
  50% { box-shadow: 0 0 10px 5px rgb(47, 52, 146) ; }
  100% { box-shadow: 0 0 0px rgb(34, 41, 163); }
`;
function SignUp() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()
  const videoRef = useRef(null);




  const handleSignin = async (e) => {
    e.preventDefault();
    const filledData = {
      phone: phone,
      email: email.toLowerCase().trim(),
      name: name,
      password: password
    }

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

    // Phone Number Validation (Must be 10 digits)
    if (!/^\d{10}$/.test(phone)) {
      showToast({
        title: "Invalid Phone Number",
        description: "Phone number must be exactly 10 digits.",
        status: "error",
        position: "top",
      });
      return;
    }
    // Email Validation (Basic pattern)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        status: "error",
        position: "top",
      });
      return;
    }
    // Username Validation (At least 3 letters)
    if (name.length < 3) {
      showToast({
        title: "Invalid Username",
        description: "Username must be at least 3 characters long.",
        status: "error",
        position: "top",
      });
      return;
    }
    // Password Validation (At least 6 characters)
    if (password.length < 6) {
      showToast({
        title: "Weak Password",
        description: "Password must be at least 6 characters long.",
        status: "error",
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
        navigateToMain(`/login`);
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
          duration: 6000
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


        <Center bg="#000" w="100%" h="100vh">
          <Text
            fontFamily="bebas_neue"
            color="#ddd"
            fontSize={{ base: "20px", md: "25px", lg: "30px" }}
            fontWeight="500"
            mb={3}
          >
            We are creating your account...
          </Text>

          <Spinner
            size={{ base: "sm", md: "lg", lg: "lg" }}
            color="blue.400"
            speed="0.6s"
            thickness="4px"
            emptyColor="gray.200"
            boxShadow="0 0 10px rgba(66, 153, 225, 0.6)"
            ml="15px"
          />
        </Center>


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
              w={{ base: "80%", md: "25%" }}
              p={{ base: "45", md: "5" }}
              borderWidth={1}
              borderRadius={8}
              bgColor="transparent"
              position="relative"
              zIndex={1}
              boxShadow=" rgb(47, 52, 146) 0px 20px 30px -10px"
            >
              <form onSubmit={handleSignin} >
                <Box p={0} mb="5">

                  <Text letterSpacing={"2.5px"} textAlign={"center"} color="#fff" fontFamily="caslon-antique" fontSize={{ base: "18px", md: "25px" }} textStyle="horror">Phone Number</Text>

                  <Input
                    onChange={(e) => setPhone(e.target.value)}
                    onClick={stopPropagation}
                    color="#969696"
                    variant="unstyled"
                    placeholder="Enter Phone Number"
                    textAlign="center"
                    fontFamily="caslon-antique"
                    bg="none"
                    mx="auto"
                    type="number"
                    border="none"
                    _placeholder={{ color: "#B0B0B0", fontWeight: "bold" }}
                  />
                </Box>
                <Box p={0} mb="5">

                  <Text letterSpacing={"2.5px"} fontFamily="caslon-antique" textAlign={"center"} color="#fff" fontSize={{ base: "18px", md: "25px" }} textStyle="horror">Email address</Text>

                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={stopPropagation}
                    color="#969696"
                    variant="unstyled"
                    placeholder="Enter your Email"
                    textAlign="center"
                    fontFamily="caslon-antique"
                    bg="none"
                    mx="auto"
                    type="text"
                    border="none"
                    _placeholder={{ color: "#B0B0B0", fontWeight: "bold" }}
                  />
                </Box>
                <Box p={0} mb="5">

                  <Text letterSpacing={"2.5px"} fontFamily="caslon-antique" textAlign={"center"} color="#fff" fontSize={{ base: "18px", md: "25px" }} textStyle="horror">User name</Text>

                  <Input
                    onChange={(e) => setName(e.target.value)}
                    onClick={stopPropagation}
                    color="#969696"
                    variant="unstyled"
                    placeholder="Enter your Username"
                    textAlign="center"
                    fontFamily="caslon-antique"
                    bg="none"
                    mx="auto"
                    type="text"
                    border="none"
                    _placeholder={{ color: "#B0B0B0", fontWeight: "bold" }}
                  />
                </Box>
                <Box p={0}>

                  <Text letterSpacing={"2.5px"} fontFamily="caslon-antique" textAlign={"center"} color="#fff" fontSize={{ base: "18px", md: "25px" }} textStyle="horror">Password</Text>

                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={stopPropagation}
                    color="#969696"
                    border="none"
                    variant="unstyled"
                    placeholder="Dare to create your password"
                    fontFamily="caslon-antique"
                    textAlign="center"
                    bg="none"
                    mx="auto"
                    type="password"
                    _placeholder={{ color: "#B0B0B0", fontWeight: "bold" }}
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
                  <Text color="#999" letterSpacing={"2px"} fontFamily="caslon-antique" fontSize={"xl"}>WELCOME</Text>
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







