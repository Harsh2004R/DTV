import React, { useState } from 'react';
import axios from 'axios';

const UploadMedia = () => {
  const [file,      setFile]      = useState(null);
  const [uploaded,  setUploaded]  = useState(null);
  const [loading,   setLoading]   = useState(false);

  const handleFile = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);          // 👈 key MUST match upload.single('file')

      const { data } = await axios.post(
        'http://localhost:4000/api/upload',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      setUploaded(data.image);
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
      <button disabled={!file || loading} onClick={handleUpload}>
        {loading ? 'Uploading…' : 'Upload'}
      </button>

      {uploaded && (
        <div>
          <h4>Uploaded Image:</h4>
          <img src={uploaded.githubUrl} alt="Uploaded" style={{ maxWidth: 300 }} />
        </div>
      )}
    </div>
  );
};

export default UploadMedia;
