import React, { useState, useEffect } from 'react'
import { Box, Button, Center, Flex, Heading, Input, Spacer, Text } from '@chakra-ui/react'
import axios from "axios"
import { BE_URL } from "../../URL.js"
import { RiDeleteBinLine } from "react-icons/ri";



const DWvideos = () => {


  const [get, setGet] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [videoData, setVideoData] = useState({
    embedLink: "https://www.youtube.com/embed/",
    title: ""
  });
  const fetchVideoUrl = async () => {
    const res = await axios.get(`${BE_URL}api/get/dark-url`)
    setGet(res.data.data)

  }
  useEffect(() => {
    fetchVideoUrl()

  }, [])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  // Handle POST request
  const handlePost = async () => {
    if (videoData.embedLink === "https://www.youtube.com/embed/" && videoData.title === "") {
      alert("Please enter video url / video title")
    } else {
      try {
        const res = await axios.post(`${BE_URL}api/post/dark-url`, videoData);
        console.log("Video posted successfully:", res.data);
        // Clear input fields after success
        setVideoData({ embedLink: "https://www.youtube.com/embed/", title: "" });
        fetchVideoUrl();
      } catch (error) {
        console.log("Error in posting video URL:", error.message);
        alert(`error is posting data${error.message}`)
      }
    }
  };
  const handleDelete = async (id) => {
    try {
      const deletedResponce = await axios.delete(`${BE_URL}api/dark-video/${id}`);
      if (deletedResponce.status === 200) {
        console.log("video deleed")
        alert("video deleted successfull")
        fetchVideoUrl();
      } else {
        console.log("video not deleted")
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
    // alert(id)
  };


  return (
    <Box w="100%" h="100vh">
      <Center flexDirection={"column"}>
        <Heading>Dark Web Page Video URLs</Heading>

        <Box _hover={{ cursor: "pointer" }} w="100%" h="auto" p="10px">
          <Input
            name="embedLink"
            type="text"
            value={videoData.embedLink}
            onChange={handleChange}
            placeholder="Enter video URL here..."
          />
          <Box h="15px"></Box>
          <Input
            name="title"
            type="text"
            value={videoData.title}
            onChange={handleChange}
            placeholder="Enter video title here..."
          />
        </Box>
      </Center>
      <Button
        onClick={handlePost}
        bgColor="#1E88E5"
        textColor="#fff"
        _hover={{ bgColor: "#0277BD" }}
        ml="20px"
      >
        Upload
      </Button>





      <Box mt="20px" maxH="auto" overflowY="auto" w="100%" p="4">
        <Box w="100%" >
          <Text fontSize={{ base: "14px", md: "15px", lg: "25px" }} color="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;" fontWeight={"bold"}>Total Videos :<Text as="span" fontWeight={"bold"} color={"#000"}>{" "}{get.length}</Text></Text>


        </Box>
        {get.length === 0 ? (
          <Heading size="sm" textAlign="center">No videos found</Heading>
        ) : (
          get.map((video, idx) => (

            <Box
              key={idx}
              p="10px"
              mb="20px"
              h="250px"
              bg="white"
              position={"relative"}
              zIndex={"0"}
              borderRadius="md" pos={"relative"}
              boxShadow="#EEEEEE 0px 25px 20px -20px"
              _hover={{ boxShadow: "rgba(58, 61, 249, 0.8) 12.95px 12.95px 22.6px;" }}
            >

              <Heading size={{ base: "sm", md: "md", lg: "md" }} mb="2" color="#666"><Text as="span" fontSize={"2xl"} color="#303F9F">:: {" "}</Text>{" "}{video.title}</Heading>
              <Center
              zIndex={"1"}
                onClick={() => handleDelete(video._id)}
                _hover={{ cursor: "pointer" }} borderRadius={"100%"} w={"35px"} h="35px" bg="#fff" pos={"absolute"} right={"0"} mb="10px" flex="1" ml="10px"><RiDeleteBinLine color="red" size={"25px"} /></Center>

              <Box
                as="iframe"
                src={video.embedLink}
                w={{base:"50%",md:"25%",lg:"30%"}}
                h={{base:"130px",md:"180px",lg:"180px"}}
                border="none"
                borderRadius="10px"
                allowFullScreen
                position={"absolute"}
                right="0"
              />
            </Box>
          ))
        )}
      </Box>









    </Box>


  )
}

export default DWvideos