import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

const Hsong1 = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/autoAudio/Hsong1.mp3";
const Hsong2 = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/autoAudio/Hsong2.mp3";
const Hsong3 = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/autoAudio/Hsong3.mp3";
const Hsong4 = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/autoAudio/Hsong4.mp3";
const Hsong5 = "https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/autoAudio/Hsong5.mp3";

const songs = [Hsong1, Hsong2, Hsong3, Hsong4, Hsong5];

const CustomAlert = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = React.useRef(null);
  const intervalRef = React.useRef(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handlePlayMusic = () => {
    setIsPlaying(true);
    onClose(true)
    setCurrentSongIndex((prevIndex) => getRandomIndex(prevIndex));
    // Set an interval to change songs after every 10 seconds
    intervalRef.current = setInterval(() => {
      setCurrentSongIndex((prevIndex) => getRandomIndex(prevIndex));
    }, 50000);
  };

  const handleSongEnded = () => {
    setCurrentSongIndex((prevIndex) => getRandomIndex(prevIndex));
  };

  const getRandomIndex = (currentIndex) => {
    let randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * songs.length);
    }
    return randomIndex;
  };

  return (
    <>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Background Music Permission
            </AlertDialogHeader>

            <AlertDialogBody>
              Do you want to play background music?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="teal"
                ml={3}
                autoFocus
                onClick={handlePlayMusic}
              >
                Play Music
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {isPlaying && (
        <audio
          ref={audioRef}
          src={songs[currentSongIndex]}
          autoPlay
          onEnded={handleSongEnded}
        />
      )}
    </>
  );
};

export default CustomAlert;