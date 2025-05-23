import React, { useState, useEffect } from 'react'
import { Box, Center, Flex, Heading, Input, Select, Spinner, Text, Button } from "@chakra-ui/react";
import { BE_URL } from '../../URL';
import axios from 'axios';
import { RiDeleteBinLine } from 'react-icons/ri';

const Video = () => {
  const [getVideos, setGetVideos] = useState([]);
  const [pageno, setPageno] = useState(1)
  const [limitno, setLimitTo] = useState(8)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState({
    video_url: "",
    video_title: "",
    category: "",
    theme: 40
  })
  useEffect(() => {
    fetchVideos()
  }, [pageno, limitno])

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`${BE_URL}api/get/videos?page=${pageno}&limit=${limitno}`)
      setGetVideos(res.data.data);
      setLoading(false);
      setError(null);
      console.log("dataarray", getVideos);
    } catch (error) {
      setError(`error occure ${error}`)
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: name === "theme" ? +value : value, }));
  }


  const handlePostData = async () => {
    console.log("handlePostData triggered", postData);
    setLoading(true)
    try {
      await axios.post(`${BE_URL}api/post/video`, postData);
      setError(null)
      setLoading(false)
      fetchVideos()
    } catch (error) {
      setError(`error occure ${error}`)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BE_URL}api/delete/${id}`);
      setLoading(true);
      fetchVideos();
    } catch (error) {
      setError(`error in deleting--- ${error}`)
    }
    // alert(id)
  }
  if (loading) {
    return <Center bg="#303030" w="100%" h="100vh">
      <Flex>
        <Text textAlign={"center"} color="#fff" fontWeight={"600"} fontSize={{ base: "22px", md: "25px", lg: "28px" }}>Loading...</Text>
        <Box w="25px">

        </Box>
        <Spinner color="#1E88E5" size="xl" />
      </Flex>
    </Center>
  }
  if (error) {
    return <Center bg="#303030" w="100%" h="100vh">
      <Text textAlign={"center"} color="#FF5722" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{error}</Text>
    </Center>
  }
  return (
    <Box w="100%" >

      <Heading textAlign={"center"}>Video Url's</Heading>

      <Box _hover={{ cursor: "pointer" }} w={{ base: "100%", md: "70%", lg: "50%" }} h="auto" p="10px">
        <Input
          mb="8px"
          name="video_url"
          type="text"
          onChange={handleChange}
          placeholder="Please Enter valid .mp4 url's here..."
        />
        <Input
          mb="8px"
          name="video_title"
          type="text"
          onChange={handleChange}
          placeholder="Enter video title here..."
        />
        <Select
          mb="8px"
          name="category"
          type="text"
          color={"#718096"}
          onChange={handleChange}
          placeholder="Category of your content..."
        >
          <option value="Urban Legends">Urban Legends</option>
          <option value="Black Magic">Black Magic</option>
          <option value="Cult">Cult</option>
          <option value="Disturbing">Disturbing</option>
          <option value="Spooky">Spooky</option>

        </Select>
        <Select
          mb="8px"
          name="theme"
          type="text"
          color={"#718096"}
          onChange={handleChange}
          placeholder="Horrorness of video in %"
        >
          <option value={10}>10 %</option>
          <option value={20}>20 %</option>
          <option value={30}>30 %</option>
          <option value={40}>40 %</option>
          <option value={50}>50 %</option>
          <option value={60}>60 %</option>
          <option value={70}>70 %</option>
          <option value={80}>80 %</option>
          <option value={90}>90 %</option>
          <option value={100}>100 %</option>

        </Select>
        <Button
          onClick={handlePostData}
          bgColor="#1E88E5"
          textColor="#fff"
          _hover={{ bgColor: "#0277BD" }}
          ml="20px"
        >
          Upload
        </Button>
      </Box>

      <Box  w="100%" h="auto" border="1px solid #eee">
        {
          getVideos.length === 0 ? (
            <Heading size="sm" textAlign="center" mt="10px" mb="10px" >No video or url's found</Heading>
          ) : (
            <>
              {
                getVideos.map((el, i) => (
                  <Box w={{base:"95%",md:"95%",lg:"100%"}} m="auto" position={"relative"} zIndex={"0"} _hover={{ cursor: "pointer", boxShadow: "#7D80F5 0px 3px 8px" }} borderRadius={"xl"} key={i} bg="#fff" mt="12px" mb="12px" p="5">
                    <Center
                      zIndex={"1"}
                      onClick={() => handleDelete(el._id)}
                      _hover={{ cursor: "pointer" }} borderRadius={"100%"} w={"35px"} h="35px" bg="#fff" pos={"absolute"} right={"0"} mb="10px" flex="1" ml="10px"><RiDeleteBinLine color="red" size={"25px"} /></Center>
                    <Box
                      as="iframe"
                      src={el.video_url}
                      w={{ base: "70%", md: "25%", lg: "30%" }}
                      h={{ base: "90px", md: "180px", lg: "180px" }}
                      border="none"
                      borderRadius="10px"
                      allowFullScreen
                      right="0"
                    />
                    <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} as="span" color="#195F9B" fontWeight={"800"}>Title :- {" "}</Text>
                    <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} color="#000" fontWeight={"500"}>{el.video_title}</Text>
                    <Text color="#000" fontSize={{ base: "14px", md: "16px", lg: "18px" }} fontWeight={"500"}><Text color="#C77445" as="span" fontWeight={"800"}>Category :-{" "}</Text>{el.category}</Text>
                    <Text color="#000" fontSize={{ base: "14px", md: "16px", lg: "18px" }} fontWeight={"500"}><Text color="#C77445" as="span" fontWeight={"800"}>Theme :-{" "}</Text>{el.theme} <Text as="span" >%</Text></Text>
                    <Text textDecor={"underline"} color="#195F9B" fontSize={{ base: "12px", md: "13px", lg: "13px" }}><Text fontWeight={"600"} as="span" >ID :-{" "}</Text>{el._id}</Text>

                  </Box>
                ))
              }
            </>
          )
        }

      </Box>

    </Box>
  )
}

export default Video
