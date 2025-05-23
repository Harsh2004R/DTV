import React, { useState, useEffect } from 'react'
import { Box, Center, Flex, Heading, Input, Select, Spinner, Text, Button } from "@chakra-ui/react";
import { BE_URL } from '../../URL';
import axios from 'axios';

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
    setPostData((prev) => ({ ...prev,  [name]: name === "theme" ? +value : value,  }));
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
    <Box w="100%" border={"1px solid lime"}>

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

      <Box w="100%" h="10vh" border={"1px solid red"} >
        {
          getVideos.length === 0 ? (
            <Heading size="sm" textAlign="center">No video or url's found</Heading>
          ) : (
            <>
              {
                getVideos.map((el, i) => (
                  <Box key={i}>

                    <Text>{el.video_title}</Text>
                    <Text>{el._id}</Text>
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
