import React, { useState } from 'react';
import { Box, Input, Button, Text, border, Center } from '@chakra-ui/react';

const Wood = "https://i.ibb.co/R0kvCK4/Wood-bg.jpg";
const boxData = [1, 2, 3, 4];


const Otp = () => {
  const [otp, setOTP] = useState(['', '', '', '']); // Initializing array of 4 empty strings
  const otpInputRefs = [];

  const handleInputChange = (index, value) => {
    if (!isNaN(value) && value !== '') {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      // Move to the next input field if there's a value
      if (index < otp.length - 1) {
        otpInputRefs[index + 1].focus();
      }
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === 'Backspace' && index > 0) {
      const newOTP = [...otp];
      newOTP[index - 1] = '';
      setOTP(newOTP);
      otpInputRefs[index - 1].focus();
    }
  };

  return (


    <>

      <Box position="relative">

        {boxData.map((index) => (

          <Box
            key={index}
            w="100%" h="25vh"
            backgroundImage={`url(${Wood})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
          </Box>
        ))}


        {/* This box will contain otp box over parent box or over mapped boxes */}


        <Box
          // border={"1px solid red"}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100vh"
          zIndex="1"
        >

          <Box height="100vh">

            <Text color={"#FFFFFF"} textAlign={"center"} fontFamily={"just-die-already"} fontSize={"5xl"}>OTP</Text>
            <Text m={"20px"} color={"#FFFFFF"} textAlign={"justify"} fontFamily={"caslon-antique"} fontSize={{ base: "14px", md: "28px" }}>To continue, please enter the One-Time Password (OTP) that you've received in your email. The OTP is a
              unique code that ensures the security of your account. Once you've entered the correct OTP, you'll gain
              access to your account or the requested service.</Text>
            <Box
              w={{ base: "96%", md: "50%" }}
              m="auto" height={{ base: "15vh", md: "15vh" }}
              // border={"1px solid red"}
              backgroundImage={"https://i.ibb.co/b2zStx5/PaperBg1.png"}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            ></Box>
            <Center>
              <Box
                display="flex" w={{ base: "96%", md: "49%" }} mr={{base:"0px",md:"9px",lg:"10px"}}
                justifyContent="center" alignItems="center"
                height={{ base: "25vh", md: "25vh" }}
                // border={"1px solid red"}
                backgroundImage={"https://i.ibb.co/PM02F4N/PaperBg.png"}
                // borderLeft="2px solid red"  
                // borderRight="2px solid blue"
                backgroundSize="cover"

                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              >


                <form>
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      ref={(ref) => (otpInputRefs[index] = ref)}
                      type="text"
                      border={"2px solid #000000"}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleBackspace(index, e)}
                      _hover={{ border: "3px solid #00BCD4" }}
                      maxLength={1}
                      width="40px"
                      height="40px"
                      fontSize="14px"
                      textAlign="center"
                      margin="0 5px"
                    />
                  ))}
                </form>
                <Button colorScheme="red" fontFamily={"caslon-antique"} size="md">
                  Verify
                </Button>
              </Box>
            </Center>
            <Box w={{ base: "96%", md: "50%" }}
              m="auto" height={{ base: "20vh", md: "20vh" }}
              // border={"1px solid red"}
              backgroundImage={"https://i.ibb.co/K9JqQBN/Seal-img.png"}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            >
            </Box>
          </Box>

        </Box>

      </Box>






    </>




  );
};

export default Otp;
