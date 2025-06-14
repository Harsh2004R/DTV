import React, { useEffect, useState } from 'react'
import { Box, Image, Button, Text, Avatar, Flex, Center, Spinner } from "@chakra-ui/react";
import Comments from './Comments';
import { BE_URL } from "../URL.js"
import axios from "axios"
const PhotosPost = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentComment, setCurrentComment] = useState(null);

  const handleCommentClick = (currentPost) => {
    setShowCommentBox(!showCommentBox);
    setCurrentComment(currentPost)
  };
  const handleCloseComment = () => {
    setShowCommentBox(false);
  };
  useEffect(() => {
    fetchPosts();
    // console.log(posts)
  }, []);
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${BE_URL}api/uploaded-post/get/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setPosts(res.data.data);
      if (res.status === 200) {
        setLoading(false)
      }
    } catch (err) {
      console.error("Error fetching posts", err.message);
      setLoading(false);
    }
  };


  const getDaysAgoText = (createdAt) => {
    const createdDate = new Date(createdAt);
    const now = new Date();

    createdDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    const diffTime = now - createdDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "- Today";
    if (diffDays === 1) return ": 1 day ago";
    return `- ${diffDays} days ago`;
  };



  if (loading) return <Center bg="#000" w="100%" h="100vh">
    <Text fontFamily={"bebas_neue"} color="#ddd" fontSize={{ base: "20px", md: "25px", lg: "30px" }} fontWeight={"500"}>
      Fetching your post...
    </Text>
    <Spinner
      ml={{ base: "10px", md: "20px", lg: "20px" }}
      size={{ base: "sm", md: "lg", lg: "lg" }}
      color="blue.400"
      speed="0.6s"
      thickness="4px"
      emptyColor="gray.200"
      boxShadow="0 0 10px rgba(66, 153, 225, 0.6)"
    />
  </Center>

  return (

    <>
      {/* Post card container here */}
      <Box
        // border={"1px solid orange"}
        w="100%" h="auto"
        display={"flex"} justifyContent={"center"}
        alignItems={"center"} alignContent={"center"}
        flexDirection={"column"}
        p="10px"
      >
        {/* Reels / Videos content container starting here---------------------------------------------------- Reels / Videos content container starting here---------------------------------------------------- Reels / Videos content container starting here---------------------------------------------------- Reels / Videos content container starting here---------------------------------------------------- Reels / Videos content container starting here----------------------------------------------------*/}
        {posts.map((el, idx) => (
          <Box
            key={idx}
            // border={"0.5px solid #eee"}
            border={"1px solid #1c2b33"}
            borderRadius={"md"}
            w={{ base: "100%", md: "40%" }}
            h="auto" mt="20px"

          >
            {/* Card Nav here----------------------------------------------------Card Nav here----------------------------------------------------Card Nav here----------------------------------------------------Card Nav here---------------------------------------------------- */}
            <Box
              // border={"1px solid red"}
              w="100%" h="auto"
              display={"flex"}
              pt="6px" pb="6px"
            >
              <Box
                // border={"1px solid yellow"}
                w={{ base: "15%", md: "10%" }} display={"flex"} justifyContent={"center"}
                alignItems={"center"} alignContent={"center"} h="100%">
                <Avatar src={
                  el.uploadedBy.profile_picture
                } alt={el.uploadedBy.name} />
              </Box>
              <Flex
                flexDir={"column"}
                // border={"1px solid yellow"}
                ml="10px"
                w={{ base: "77%", md: "85%" }} display={"flex"}
                alignItems={"left"} h="100%">
                <Text ml="6px" fontWeight={"bold"} letterSpacing={"2px"} fontFamily={"caslon-antique"} color={"#fff"}>{el.uploadedBy.name} </Text>
                <Text ml="12px" fontSize={"xs"} letterSpacing={"1px"} fontFamily={"quantify"} color="#4FC3F7"> {getDaysAgoText(el.createdAt)}
                </Text>
              </Flex>
              <Box
                //  border={"1px solid green"}
                w={{ base: "7%", md: "5%" }} h="100%"
                display={"flex"} justifyContent={"center"}
                alignItems={"center"} alignContent={"center"}
              >
                <svg color='#fff' aria-label="More options" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </Box>

            </Box>

            {/* Card Video Box starting Here ---------------------------------------------------------- Card Video Box starting Here ---------------------------------------------------------- Card Video Box starting Here ---------------------------------------------------------- Card Video Box starting Here ---------------------------------------------------------- Card Video Box starting Here ---------------------------------------------------------- */}
            <Box
              border={"1px solid #1c2b33"}
              borderRadius={"5px"}
              h="100%" w="100%" position="relative"
            >
              <Image w={{ base: "90%", md: "80%" }} m="auto" borderRadius={"0px"} h="100%" src={el.url} alt="media image broke" />



              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="rgba(0, 0, 0, 0.6)"
                p="10px"
                w="100%" h="auto" >
                <Text ml="5px" mt="5px" fontFamily={"caslon-antique"} color={"#fff"}>
                  {el.caption}

                </Text>
              </Box>

            </Box>


            {/* Card Comment / Footer starting here ------------------------------------------------------- Card Comment / Footer starting here -------------------------------------------------------Card Comment / Footer starting here -------------------------------------------------------Card Comment / Footer starting here -------------------------------------------------------Card Comment / Footer starting here -------------------------------------------------------*/}

            <Flex
              // border={"1px solid cyan"}
              w="100%" h="4%" mt="10px"
            >

              <Box flex={"1"} ml="15px"><svg color='#fff' aria-label="Like" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg></Box>
              <Box flex={"1"} ml="15px"><svg color='#fff' onClick={() => handleCommentClick(el)} aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg></Box>
              <Box flex={"1"} ml="15px"><svg color='#fff' aria-label="Share Post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg></Box>
              <Box flex={"12"} ml="15px" display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}><svg color='#fff' aria-label="Save" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg></Box>
            </Flex>
            <Flex h="auto" w="100%">
              <Text ml="15px" mt="5px" fontFamily={"caslon-antique"} color={"#fff"}>{el.likes}<span> Likes</span></Text>
              <Text ml="15px" mt="5px" fontFamily={"caslon-antique"} color={"#fff"}>{el.comments.length}<span> Comments</span></Text>
            </Flex>


            {/* Card Comment / Footer ending here -------------------------------------------------------Card Comment / Footer ending here -------------------------------------------------------Card Comment / Footer ending here -------------------------------------------------------Card Comment / Footer ending here -------------------------------------------------------Card Comment / Footer ending here ------------------------------------------------------- */}


          </Box>

        ))}

        {showCommentBox &&
          <Comments
            postId={currentComment._id}
            userId={currentComment.uploadedBy._id}
            postURL={currentComment.url}
            userName= {currentComment.uploadedBy.name}
            onClose={handleCloseComment}
          />
        }



        {/* Reels / Videos content container starting ending here---------------------------------------------------- Reels / Videos content container starting ending here---------------------------------------------------- Reels / Videos content container starting ending here---------------------------------------------------- Reels / Videos content container starting ending here---------------------------------------------------- Reels / Videos content container starting ending here----------------------------------------------------*/}





      </Box>





    </>
  )
}

export default PhotosPost
