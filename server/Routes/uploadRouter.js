const express = require('express');
const axios   = require('axios');
const multer  = require('multer');
const { UploadedImageModel } = require('../Models/uploaded_image.model.js');
require('dotenv').config();

const UploadRouter = express.Router();

/* ---------- Multer setup ---------- */
const storage = multer.memoryStorage();
const upload  = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }   // 50 MB
});

/* ---------- POST /api/upload ---------- */
UploadRouter.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file provided' });

    const file       = req.file;
     const caption    = req.body.caption || '';
    const fileName   = `${Date.now()}_${file.originalname}`;   // avoid overwrites
    const base64Data = file.buffer.toString('base64');

    /* ---- GitHub upload ---- */
    const githubUsername = 'Harsh2004R';
    const repoName       = process.env.REPO;
    const branch         = 'main';
    const pathInRepo     = `Uploads/Post/${fileName}`;
    const token          = process.env.GITHUB_TOKEN;

    const githubRes = await axios.put(
      `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${pathInRepo}`,
      {
        message: `Upload ${fileName}`,
        content: base64Data,
        branch
      },
      { headers: { Authorization: `token ${token}` } }
    );

    /* ---- Build raw URL & persist in MongoDB ---- */
    const imageUrl = `https://raw.githubusercontent.com/${githubUsername}/${repoName}/${branch}/${pathInRepo}`;

    const savedDoc = await UploadedImageModel.create({
      fileName,
      githubUrl: imageUrl,
       caption
    });

    return res.status(201).json({ success: true, image: savedDoc });
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).json({ success: false, message: 'Upload failed' });
  }
});

module.exports = { UploadRouter };
