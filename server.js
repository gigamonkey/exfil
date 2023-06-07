/*
 * Trivial web server to save uploaded files.
 */

import express from 'express';
import fs from 'fs';
import multer from 'multer';
import cors from 'cors';

const uploadDir = 'uploads/';
const port = 9000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage })

const app = express();

app.use(cors());

app.post('/save', upload.single('file'), (req, res) => {
  if (req.file) {
    console.log(req.file);
    console.log(`Received file ${req.file.originalname}`);
    res.status(200).send('File uploaded successfully!');
  } else {
    console.error('Error: No file received');
    res.status(400).send('No file received');
  }
});

if (!fs.existsSync(uploadDir)){
  console.log(`Making upload dir ${uploadDir}`);
  fs.mkdirSync(uploadDir);
} else {
  console.log(`Upload dir ${uploadDir} already exists.`);
}

app.listen(port, function () {
  console.log(`Listening on port ${this.address().port}`);
});
