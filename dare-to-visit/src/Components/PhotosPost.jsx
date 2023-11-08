import React, { useState } from 'react'
import { Box, Image, Button, Text, Avatar, Flex, Divider } from "@chakra-ui/react";
import Comments from './Comments';
const PhotosPost = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleCommentClick = () => {
    setShowCommentBox(!showCommentBox);
  };
  const handleCloseComment = () => {
    setShowCommentBox(false);
  };

  return (

    <>
      {/* Post card container here */}
      <Box
        // border={"1px solid orange"}
        w="100%" h="100vh"
        display={"flex"} justifyContent={"center"}
        alignItems={"center"} alignContent={"center"}

      >
        {/* Reels / Videos content container starting here---------------------------------------------------- Reels / Videos content container starting here---------------------------------------------------- Reels / Videos content container starting here---------------------------------------------------- Reels / Videos content container starting here---------------------------------------------------- Reels / Videos content container starting here----------------------------------------------------*/}


        <Box
          // border={"1px solid #eee"}
          w={{ base: "100%", md: "40%" }}
          h="100%"

        >
          {/* Card Nav here----------------------------------------------------Card Nav here----------------------------------------------------Card Nav here----------------------------------------------------Card Nav here---------------------------------------------------- */}
          <Box
            // border={"1px solid red"}
            w="100%" h="10%"
            display={"flex"}
          >
            <Box
              // border={"1px solid yellow"}
              w={{ base: "15%", md: "10%" }} display={"flex"} justifyContent={"center"}
              alignItems={"center"} alignContent={"center"} h="100%">
              <Avatar src={
                'https://img.freepik.com/free-photo/view-3d-man-taking-selfie_23-2150709936.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais'
              } alt="" />
            </Box>
            <Box
              // border={"1px solid yellow"}
              ml="10px"
              w={{ base: "77%", md: "85%" }} display={"flex"}
              alignItems={"center"} alignContent={"center"} h="100%">
              <Text fontWeight={"bold"} fontFamily={"caslon-antique"} color={"#fff"}>User Name</Text>
            </Box>
            <Box
              //  border={"1px solid green"}
              w={{ base: "7%", md: "5%" }} h="100%"
              display={"flex"} justifyContent={"center"}
              alignItems={"center"} alignContent={"center"}
            >
              <svg color='#fff' aria-label="More options" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </Box>

          </Box>


          {/* Card Nav ends here---------------------------------------------------- Card Nav ends here----------------------------------------------------Card Nav ends here----------------------------------------------------Card Nav ends here----------------------------------------------------Card Nav ends here----------------------------------------------------*/}






          {/* Card Video Box starting Here ---------------------------------------------------------- Card Video Box starting Here ---------------------------------------------------------- Card Video Box starting Here ---------------------------------------------------------- Card Video Box starting Here ---------------------------------------------------------- Card Video Box starting Here ---------------------------------------------------------- */}
          <Box
            border={"1px solid #1c2b33"}
            borderRadius={"5px"}
            h="80%" w="100%" position="relative"
          >
            <Image w={{ base: "90%", md: "80%" }} m="auto" borderRadius={"0px"} h="100%" src="https://images.pexels.com/photos/5407935/pexels-photo-5407935.jpeg?auto=compress&cs=tinysrgb&w=600" alt="media image broke" />



            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="rgba(0, 0, 0, 0.6)"
              p="10px"
              w="100%" h="auto" >
              <Text ml="5px" mt="5px" fontFamily={"caslon-antique"} color={"#fff"}>
                You're all caught upYou've seen all
                new posts from the past 3 days
                998,503 likes
                Everybody wanted to be a bowler at
                training yesterday A very Happy Dussehra
                to you all❤️🔥 मेरा आपकी कृपा से, सब काम हो रहा है 🙏

              </Text>
            </Box>

          </Box>
          {/* Card Video Box ending Here ----------------------------------------------------------  Card Video Box ending Here ----------------------------------------------------------  Card Video Box ending Here ----------------------------------------------------------  Card Video Box ending Here ----------------------------------------------------------  Card Video Box ending Here ----------------------------------------------------------  */}




          {/* Card Comment / Footer starting here ------------------------------------------------------- Card Comment / Footer starting here -------------------------------------------------------Card Comment / Footer starting here -------------------------------------------------------Card Comment / Footer starting here -------------------------------------------------------Card Comment / Footer starting here -------------------------------------------------------*/}

          <Flex
            // border={"1px solid cyan"}
            w="100%" h="4%" mt="10px"
          >

            <Box flex={"1"} ml="15px"><svg color='#fff' aria-label="Like" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg></Box>
            <Box flex={"1"} ml="15px"><svg color='#fff' onClick={handleCommentClick} aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg></Box>
            <Box flex={"1"} ml="15px"><svg color='#fff' aria-label="Share Post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg></Box>
            <Box flex={"12"} ml="15px" display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}><svg color='#fff' aria-label="Save" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg></Box>
          </Flex>
          <Box
            // border={"1px solid lime"}
            w="100%" h="auto">
            <Text ml="15px" mt="5px" fontFamily={"caslon-antique"} color={"#fff"}>{"177,15,369"}<span> Likes</span></Text>

          </Box>


          {/* Card Comment / Footer ending here -------------------------------------------------------Card Comment / Footer ending here -------------------------------------------------------Card Comment / Footer ending here -------------------------------------------------------Card Comment / Footer ending here -------------------------------------------------------Card Comment / Footer ending here ------------------------------------------------------- */}

        </Box>

        {showCommentBox && <Comments onClose={handleCloseComment} />}



        {/* Reels / Videos content container starting ending here---------------------------------------------------- Reels / Videos content container starting ending here---------------------------------------------------- Reels / Videos content container starting ending here---------------------------------------------------- Reels / Videos content container starting ending here---------------------------------------------------- Reels / Videos content container starting ending here----------------------------------------------------*/}





      </Box>

      <Divider zIndex="0" w={{ base: "100%", md: "40%" }} borderColor="#999" m="auto" />



    </>
  )
}

export default PhotosPost
