import multer from 'multer';
import path from 'node:path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const userId = req.params.userId;
    const ext = path.extname(file.originalname);
    cb(null, userId + ext);
  }
});

export const upload = multer({ storage });
