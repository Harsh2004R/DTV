export const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    // Decode the token to get userId
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.userId;
};
