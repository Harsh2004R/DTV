import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Box, Image, Button, Text, Avatar, Flex, Center, Spinner } from "@chakra-ui/react";
import Comments from './Comments';
import { BE_URL } from "../URL.js"
import axios from "axios"
import { getUserIdFromToken } from "../Utils/getUserId.js"
const PhotosPost = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentComment, setCurrentComment] = useState(null);
  const [userId, setUserId] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const handleCommentClick = (currentPost) => {
    setShowCommentBox(!showCommentBox);
    setCurrentComment(currentPost)
  };
  const handleCloseComment = () => {
    setShowCommentBox(false);
  };
  useEffect(() => {
    const uid = getUserIdFromToken();
    setUserId(uid);
    fetchPosts(page);
    // console.log(posts)
  }, [page]);
  const fetchPosts = async (pageNo) => {
    try {
      const res = await axios.get(`${BE_URL}api/uploaded-post/get/all?page=${pageNo}&limit=3`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const newData = res.data.data;

      setPosts(prev => [...prev, ...newData]);
      setHasMore(newData.length > 0);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching posts", err.message);
      setLoading(false);
    }
  };

  const lastReelRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

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

  const handleLike = async (postId, liked) => {
    const url = liked
      ? `${BE_URL}api/post/unlike/${postId}`
      : `${BE_URL}api/post/like/${postId}`;

    try {
      await axios.patch(url, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      // fetchPosts(); 
      setPosts(prev =>
        prev.map(item =>
          item._id === postId
            ? { ...item, likedBy: liked ? item.likedBy.filter(id => id !== userId) : [...item.likedBy, userId], likes: liked ? item.likes - 1 : item.likes + 1 }
            : item
        )
      );
    } catch (err) {
      console.error("Error toggling like", err.message);
    }
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
        {/* Reels / Videos content container starting here--*/}
        {posts.map((el, idx) => (
          <Box
            key={idx}
            // border={"0.5px solid #eee"}
            ref={idx === posts.length - 1 ? lastReelRef : null}
            border={"1px solid #1c2b33"}
            borderRadius={"md"}
            w={{ base: "100%", md: "40%" }}
            h="auto" mt="20px"

          >
            {/* Card Nav here */}
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

            {/* Card Video Box starting Here */}
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

            {/* Card Comment / Footer starting here */}
            <Flex
              // border={"1px solid cyan"}
              w="100%" h="4%" mt="10px"
            >
              <Box flex="1" ml="15px">
                <svg
                  color={el.likedBy.includes(userId) ? "red" : "#fff"}
                  onClick={() => handleLike(el._id, el.likedBy.includes(userId))}
                  fill="currentColor"
                  height="27"
                  viewBox="0 0 22 22"
                  width="27"
                  style={{ cursor: "pointer" }}
                >
                  <title>Like</title>
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938Z"></path>
                </svg>
              </Box>
              <Box flex={"1"} ml="15px"><svg color='#fff' onClick={() => handleCommentClick(el)} aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg></Box>
              <Box flex={"1"} ml="15px"><svg color='#fff' aria-label="Share Post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg></Box>
              <Box flex={"12"} ml="15px" display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}><svg color='#fff' aria-label="Save" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg></Box>
            </Flex>
            <Flex h="auto" w="100%">
              <Text ml="15px" mt="5px" fontFamily={"caslon-antique"} color={"#fff"}>{el.likes}<span> {el.likes <= 1 ? 'like' : 'likes'}</span></Text>
              <Text ml="15px" mt="5px" fontFamily={"caslon-antique"} color={"#fff"}>{el.comments.length}<span> {el.likes === 0 || 1 ? 'comment' : 'comments'}</span></Text>
            </Flex>

            {/* Card Comment / Footer ending here  */}

          </Box>

        ))}

        {showCommentBox &&
          <Comments
            postId={currentComment._id}
            userId={currentComment.uploadedBy._id}
            postURL={currentComment.url}
            userName={currentComment.uploadedBy.name}
            userProfileUrl={currentComment.uploadedBy.profile_picture}
            onClose={handleCloseComment}
          />
        }

        {/* Post / Photos content container ending here---------------------------------------------------- */}

      </Box>
      <Center bg="#000" w="100%" h="auto">
        <Text fontFamily={"bebas_neue"} letterSpacing={"2.5px"} color="grey" fontSize={{ base: "14px", md: "15px", lg: "16px" }} fontWeight={"500"}>
          getting more reels...
        </Text>
        <Spinner
          ml={{ base: "10px", md: "20px", lg: "20px" }}
          size={{ base: "xs", md: "xs", lg: "xs" }}
          color="blue.400"
          speed="0.6s"
          thickness="4px"
          emptyColor="gray.200"
          boxShadow="0 0 10px rgba(66, 153, 225, 0.6)"
        />
      </Center>
    </>
  )
}

export default PhotosPost
