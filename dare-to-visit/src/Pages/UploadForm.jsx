// UploadForm.jsx
import React, { useState } from "react";
import axios from "axios";
import {BE_URL} from "../URL.js"
const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !caption) {
            return alert("Please provide both file and caption");
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("caption", caption);

        try {
            const res = await axios.post(`${BE_URL}api/post/upload`, formData);
            setStatus("Upload successful!");
            console.log(res.data);
        } catch (err) {
            console.error(err);
            setStatus("Upload failed.");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input
                    type="text"
                    placeholder="Enter caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <button type="submit">Upload</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default UploadForm;
