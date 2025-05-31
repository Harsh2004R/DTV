import React, { useState } from 'react';
import axios from 'axios';
import { BE_URL } from "../URL.js"
const UploadMedia = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploaded, setUploaded] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);          // 👈 key MUST match upload.single('file')
      formData.append('caption', caption); // <- Append caption

      const { data } = await axios.post(
        // 'http://localhost:4000/api/upload',
        `${BE_URL}api/upload`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      setUploaded(data.image);
      setFile(null);
      setCaption('');
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed, check console');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFile} />
      <br />
      <textarea
        placeholder="Write a caption or hashtags..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        rows={3}
        style={{ width: '100%', marginTop: '10px' }}
      />
      <br />
      <button disabled={!file || loading} onClick={handleUpload}>
        {loading ? 'Uploading…' : 'Upload'}
      </button>

      {uploaded && (
        <div>
          <h4>Uploaded Image:</h4>
          <img src={uploaded.githubUrl} alt="Uploaded" style={{ maxWidth: 300 }} />
          <p><strong>Caption:</strong> {uploaded.caption}</p>
        </div>
      )}
    </div>
  );
};

export default UploadMedia;
