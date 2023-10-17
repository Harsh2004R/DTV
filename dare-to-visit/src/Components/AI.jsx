import React, { useState, useEffect } from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoSearchSharp } from 'react-icons/io5';
import "../Fonts.css"

const ATR1 = "http://nightmare.mit.edu/static/homepage/img/portfolio/colosseum.gif";
const ATR2 = "http://nightmare.mit.edu/static/homepage/img/portfolio/neuschwanstein.gif";
const ATR3 = "http://nightmare.mit.edu/static/homepage/img/portfolio/basil.gif";
const ATR4 = "http://nightmare.mit.edu/static/homepage/img/portfolio/paris.gif";
const ATR5 = "http://nightmare.mit.edu/static/homepage/img/portfolio/kilimanjaro.gif";
const ATR6 = "http://nightmare.mit.edu/static/homepage/img/portfolio/stonehenge.gif";
const ATR7 = "http://nightmare.mit.edu/static/homepage/img/portfolio/madrid.gif";
const ATR8 = "http://nightmare.mit.edu/static/homepage/img/portfolio/louvre.gif";

function Feature({ text, icon, iconBg , textColor }) {


  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600} color={textColor}>{text}</Text>
    </Stack>
  );
}

export default function AI() {


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    ATR1,
    ATR2,
    ATR3,
    ATR4,
    ATR5,
    ATR6,
    ATR7,
    ATR8,
    // Add more image URLs here
  ];




  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const featureData = [
    {
      text: "Eastern State (Philadelphia, Pennsylvania, USA):",
      icon: <Icon as={IoSearchSharp} color={'yellow.500'} w={5} h={5} />,
      iconBg: "#fff",
      textColor: "yellow.500",
    },
    {
      text: "Tower of London (London, England):",
      icon: <Icon as={IoSearchSharp} color={'green.500'} w={5} h={5} />,
      iconBg: "#fff",
      textColor: "green.500",
    },
    {
      text: "The Stanley Hotel (Estes Park, Colorado, USA):",
      icon: <Icon as={IoSearchSharp} color={'purple.500'} w={15} h={15} />,
      iconBg: "#fff",
      textColor: "purple.500",
    },
    // Add more....if needed
  ];


  return (
    <Container maxW={'5xl'} bg={"#000000"} py={12} >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>

          <Text mt="10px" fontFamily={"fiendish"} textAlign={"left"} color="#FF0000" fontSize={{ base: "xxl", md: "3xl" }}>All over the world </Text>
          <Text fontFamily={"living-by-numbers"} textAlign={{ base: "justify", md: "justify" }} color="#fff" fontSize={{ base: "1.1rem", md: "1.2rem" }} >
            We use really smart computer programs to learn what spooky houses and creepy cities look like. Then, we use what we learned to make
            famous places look scary too. So, get ready to see AI magic turning the world into a spooky adventure!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }
          >
            {featureData.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                iconBg={feature.iconBg}
                text={feature.text}
                textColor={feature.textColor}
              />
            ))}

          </Stack>
        </Stack>
        <Flex>
          <Image
            // border="2px solid teal"
            transition="transform 0.5s" _hover={{ boxShadow: '0 0 20px #9E9E9E', transform: 'scale(1.05)', cursor: 'pointer' }}
            className="slider-image"
            src={images[currentImageIndex]}
            alt={'feature image'}
            w={{ base: "100%", md: "80%" }}
            h={{ base: "100%", md: "70%" }}
            m="auto"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
