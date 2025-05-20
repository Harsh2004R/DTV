
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { Box, Input, Text, Button, FormControl, FormLabel, keyframes, Center, Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BE_URL } from "../URL.js"
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

  // login hooks here....
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false)
  let url = "https://reqres.in/api/login";

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

  const handleSubmit = async (e) => {
    // Handle login logic here
    e.preventDefault();
    setLoading(true);
    // let obj = { email, password };
     const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    await axios
      .post(`${BE_URL}api/user/verify`, loginData)
      .then((res) => {
        console.log(res);
        let token = res.data.token;
        localStorage.setItem("token", token);
        if (token) {
          setLoading(!true)
        }
        Navigate("/")
      })
      .catch((err) => {
        console.log("error in loging...user", err);
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
          <Box w="100%" h="100vh" bg="black">
            <Center flexDirection={"column"} w="100%" h="100vh">
              <Text color="#fff" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                Logging Informations...
              </Text>
              <Spinner mt="50px" color="teal.500" size="lg" />


            </Center>
          </Box>


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
                      fontFamily=""  ref={passwordRef}
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