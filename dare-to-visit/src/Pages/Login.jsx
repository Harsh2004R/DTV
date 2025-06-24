
import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../Context/AuthContext.js';
import { Box, Input, Text, Button, FormControl, keyframes, Center, Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BE_URL } from "../URL.js"
import { showToast } from '../Utils/toast';
const gradient = `linear-gradient(to right ,#424242, #000000, #757575)`
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px coral; }
  50% { box-shadow: 0 0 10px 5px coral; }
  100% { box-shadow: 0 0 0px coral; }
`;

const LoginBG3 = 'https://i.ibb.co/NrC6jGr/LoginBG3.jpg';
const asur = 'https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/autoAudio/asur.mp3';
const song1 = 'https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/autoAudio/song1.mp3';
const song3 = 'https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/autoAudio/song3.mp3';
const song4 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/autoAudio/song4.mp3";
const song5 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/autoAudio/song5.mp3";
const song6 = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/autoAudio/song6.mp3";
function Login() {

  const songs = [asur, song1, song3, song4, song5, song6];

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const { login, isAuth, setIsAuth } = useContext(AuthContext)
  const [audio, setAudio] = useState(null);
  const Navigate = useNavigate();
  useEffect(() => {
    if (audio) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      audio.src = songs[randomIndex];
      audio.play().catch((error) => {
        console.log('Failed to play audio:', error);
      });
    }
  }, [audio, songs]);

  // this effect will confirm user is authenticated or not using isAuth state...
  useEffect(() => {
    // console.log("isAuth changed to", isAuth);
    if (isAuth === true) {
      Navigate("/")
    } else {
      null
    }
  }, [isAuth]);

  const handleSubmit = async (e) => {
    // Handle login logic here
    e.preventDefault();
    setLoading(true);
    // let obj = { email, password };
    const loginData = {
      email: emailRef.current.value.toLowerCase().trim(),
      password: passwordRef.current.value,
    };
    await axios
      .post(`${BE_URL}api/user/verify`, loginData)
      .then((res) => {
        // console.log(res);
        let token = res.data.token;
        let userId = res.data.user.userId
        localStorage.setItem("token", token);
        localStorage.setItem("userID", userId);
        if (token || userId) {
          setLoading(!true);
          login(token);
        }

      })
      .catch((err) => {
        setLoading(false);
        // console.log("error in loging...user", err);
        // Extract message from server
        if (err.response) {
          const message = err.response.data?.msg || "Something went wrong";
          showToast({
            title: "Login Failed",
            status: "error",
            description: message,
            position: "top",
          });
        } else if (err.request) {
          // Network error or no response from server
          showToast({
            title: "Network Error",
            status: "error",
            description: "No response from server. Please try again.",
            position: "top",
          });
        } else {
          // Other unknown errors
          showToast({
            title: "Error",
            status: "error",
            description: "An unexpected error occurred.",
            position: "top",
          });
        }
      });
  };

  const handlePlay = () => {
    if (audio) {
      audio.play().catch((error) => {
        console.log('Failed to play audio:', error);
      });
    }
  };
  const handleAudioRef = (element) => {
    setAudio(element);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {loading ?
        (
          <Center flexDir="column" bg="#000" w="100%" h="100vh">
            <Text
              fontFamily="bebas_neue"
              color="#ddd"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              fontWeight="500"
              mb={3}
            >
              Loging into darkness...
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
        ) : (




          <Box
            w={{ base: "100%", md: "100%" }}
            h={{ base: "100vh", md: "100vh" }}
            bg={gradient}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize={{ base: "1rem", md: "1.2rem" }}
          >
            <Box
              onClick={handlePlay}
              backgroundImage={`url(${LoginBG3})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              width={{ base: "100%", md: "60%" }}
              height="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                p="2rem"
                textAlign="center"
                zIndex={1}

              >
                <Text
                  fontFamily="just-die-already"
                  textStyle="horror"
                  color="white"
                  fontSize={{ base: "4rem", md: "5rem" }}
                  m="auto"
                >
                  Login
                </Text>
              </Box>
              <Box border="none" maxWidth="25rem" p="2.8125rem" borderWidth={1} borderRadius={8} boxShadow="lg" bgColor="transparent"> {/* Converted to rem */}
                <form onSubmit={handleSubmit} >
                  <FormControl p="0.625rem" mb="1.25rem">

                    <Text fontFamily="caslon-antique" color="#fff" fontSize={{ base: "18px", md: "25px" }} textAlign="center" pb="0.625rem">Email address</Text>

                    <Input
                      onClick={stopPropagation}
                      color="#FF6F00"
                      pt="0.625rem"
                      variant="unstyled"
                      placeholder="Your valid Email"
                      textAlign="center"
                      bg="none"
                      mx="auto"
                      type="text"
                      border="none"
                      fontFamily="" ref={emailRef}
                    // onChange={(e) => setemail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl p="0.625rem">

                    <Text fontFamily="caslon-antique" color="#fff" fontSize={{ base: "18px", md: "25px" }} textAlign="center" pb="0.625rem">Password</Text>

                    <Input
                      onClick={stopPropagation}
                      color="#FF6F00"
                      border="none"
                      pt="0.625rem"
                      variant="unstyled"
                      placeholder="Your password"
                      textAlign="center"
                      bg="none"
                      mx="auto"
                      type="password"
                      fontFamily="" ref={passwordRef}
                    // onChange={(e) => setpassword(e.target.value)}
                    />
                  </FormControl>
                  <Box mt="0.625rem">
                    <Button
                      onClick={handleSubmit}
                      _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }}
                      animation={`${glowAnimation} 1s infinite`}
                      _focus={{ outline: 'none' }}
                      _active={{ transform: 'scale(1.5)' }}
                      display="flex" alignItems="center" m="auto" fontSize={{ base: "18px", md: "25px" }} type="submit" bgColor="transparent" borderRadius="md" w={{ base: "100px", md: "120px" }} // Converted to rem
                    >
                      <Text fontFamily="caslon-antique" color="#FF7043">Enter !</Text>
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        )}
      <audio ref={handleAudioRef} />


    </>
  );
}

export default Login;