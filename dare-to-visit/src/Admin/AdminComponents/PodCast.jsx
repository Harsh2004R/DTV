import React, { useState, useEffect, useRef } from 'react'
import { Box, Button, Center, Grid, GridItem, Heading, Input, Spinner, Text } from "@chakra-ui/react";
import axios from 'axios';
import { showToast } from "../../Utils/toast.js"
import { BE_URL } from '../../URL';

const PodCast = () => {
  const [getUrl, setGetUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState({ url: "", title: "" });
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  useEffect(() => {
    fetchPodCastUrl()
  }, [])
  const fetchPodCastUrl = async () => {
    try {
      const res = await axios.get(`${BE_URL}api/get/podcast/urls/all`);
      setGetUrl(res.data.data)
      setLoading(false);
      console.log(getUrl)
    } catch (error) {
      setLoading(false);
      setError(`error in fetching url's from server ${error.message}`)
    }

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }))
    console.log("hhdd")
  }

  const handlePostData = async () => {
    if (postData.url !== "" && postData.title !== "") {
      try {
        const postResponce = await axios.post(`${BE_URL}api/post/podcast/url`, postData)
        if (postResponce.status === 200) {
          setError(null);
          showToast({
            title: 'Success request',
            description: 'new podcast has been added 😁',
            status: 'success', // 'success' | 'error' | 'warning' | 'info'
            duration: 3000,
            isClosable: true,
            position: 'top',
          })
          fetchPodCastUrl();
          postData.url === ""
          postData.title === ""
        } else {
          showToast({
            title: 'Bad Request',
            description: 'issues in posting data',
            status: 'error', // 'success' | 'error' | 'warning' | 'info'
            duration: 3000,
            isClosable: true,
            position: 'bottom',
          })
        }
      } catch (error) {
        setError(`Error :-${error.response.data.msg}`)
      }

    } else {
      showToast({
        title: 'Warning',
        description: ' url or title should be valid',
        status: 'warning', // 'success' | 'error' | 'warning' | 'info'
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }
  const handleDelete = async (id) => {
    try {
      const dltFlag = await axios.delete(`${BE_URL}api/delete/podcast/${id}`)
      if (dltFlag.status === 200) {
        alert("document deleted successfully")
        fetchPodCastUrl()
      } else {
        alert("document faild to delete")
      }
    } catch (error) {
      setError(`${error.response.data.message}`)
    }
  }

  if (loading) return <Center w="100%" p="10" h="50vh"><Spinner size="xl" color="blue.500" /></Center>
  if (error) return <Center w="100%" h="auto" p="6px" borderRadius={"md"} borderColor={"grey"}><Text fontSize="12px" color="red.500" >{error}</Text></Center>

  return (
    <Box w="100%" h="auto"  >
      <Center flexDirection={"column"}>
        <Heading>Podcast / Audio / Music Url's</Heading>

        <Box _hover={{ cursor: "pointer" }} w={{ base: "100%", md: "70%", lg: "50%" }} h="auto" p="10px">
          <Input
            name="url"
            type="text"
            // value={videoData.embedLink}
            onChange={handleChange}
            placeholder="Please Enter valid .mp3 url's here..."
          />
          <Box h="15px"></Box>
          <Input
            name="title"
            type="text"
            // value={videoData.title}
            onChange={handleChange}
            placeholder="Enter audio title here..."
          />
        </Box>
      </Center>
      <Button
        onClick={handlePostData}
        bgColor="#1E88E5"
        textColor="#fff"
        _hover={{ bgColor: "#0277BD" }}
        ml="20px"
      >
        Upload
      </Button>
      <Box mt="20px" minH={"100vh"}>
        <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>Total Podcast found :- {getUrl.length}</Text>
        {
          getUrl.length === 0 ? (<Heading size="sm" textAlign="center">No audio url's found</Heading>) :
            (
              getUrl.map((data, idx) => (

                <Grid  overflowX={"auto"} bg="#E0E0E0" gap={3} mt="15px" p="2" borderRadius={"lg"} border={"2px solid #FAFAFA"} _hover={{ cursor: "pointer", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }} key={idx}>
                  <GridItem>
                    <Text fontSize={{ base: "12px", md: "13px", lg: "14px" }} fontWeight={"500"} color="#1976D2" textDecor={"underline"}><Text color="black" as="span" fontWeight={"bold"}>Url :-</Text>{" "} {data.url}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize={{ base: "12px", md: "13px", lg: "16px" }} color="black" fontWeight={"bold"} >Title :- <Text color="#444" as="span" fontWeight={"400"}>{data.title}</Text></Text>
                    <audio
                      ref={(el) => (audioRefs.current[idx] = el)}
                      src={data.url}
                      controls
                      onPlay={() => {
                        setCurrentPlayingIndex(idx);
                        // Pause all other audio tracks
                        audioRefs.current.forEach((audio, i) => {
                          if (audio && i !== idx) {
                            audio.pause();
                          }
                        });
                      }}
                      onPause={() => {
                        if (currentPlayingIndex === idx) {
                          setCurrentPlayingIndex(null);
                        }
                      }}
                    />
                    <Button onClick={() => handleDelete(data._id)} backgroundColor={"#FF5722"} size="sm" color="#fff" mt="8px" _hover={{ backgroundColor: "#FF1744", textColor: "#fff" }}>Delete</Button>

                  </GridItem>

                </Grid>

              ))
            )
        }
      </Box>
        <Box position={"fixed"} bottom={"0"}  w="100%" h="10vh" bg="#000">

        </Box>


    </Box>
  )
}

export default PodCast
