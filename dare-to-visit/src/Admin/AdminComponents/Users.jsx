import { useState, useEffect } from 'react';
import { Box, Text, Spinner, Button, Stack } from '@chakra-ui/react';
import axios from "axios";
import { BE_URL } from "../../URL.js";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${BE_URL}api/user/get`);
      setUserData(res.data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BE_URL}api/user/${id}`);
      fetchUsers(); // refresh list
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleBlock = async (id) => {
    try {
      await axios.patch(`${BE_URL}api/user/block/${id}`);
      fetchUsers(); // refresh list
    } catch (error) {
      console.error("Block error:", error);
    }
  };

  if (loading) return <Spinner size="xl" color="red.500" />;
  if (error) return <Text color="red.400">{error}</Text>;

  return (
    <Box w="auto" h="100vh" p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Users</Text>
      {userData.length === 0 ? (
        <Text>No users found.</Text>
      ) : (
        userData.map((user) => (
          <Box
            key={user._id}
            p="4"
            mb="3"
            border="1px solid #ccc"
            borderRadius="md"
            onClick={() => setSelectedUserId(user._id === selectedUserId ? null : user._id)}
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
          >
            <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}><strong>Name:</strong> {user.name}</Text>
            <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}><strong>Email:</strong> {user.email}</Text>
            <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}><strong>User Id:</strong> {user._id}</Text>
            {user.isBlocked && <Text color="red.500"><strong>Blocked</strong></Text>}

            {selectedUserId === user._id && (
              <Stack direction="row" spacing="4" mt="3">
                <Button colorScheme="red" onClick={() => handleDelete(user._id)}>Delete</Button>
                {!user.isBlocked && (
                  <Button colorScheme="yellow" onClick={() => handleBlock(user._id)}>Block</Button>
                )}
              </Stack>
            )}
          </Box>
        ))
      )}
    </Box>
  );
};

export default Users;
