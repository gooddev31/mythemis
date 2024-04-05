import express from 'express';
import FileController from '../modules/file/file.controller';
import FileService from '../modules/file/file.service';

const router = express.Router();

const fileController = new FileController(new FileService());

router.get('/', fileController.getFiles.bind(fileController));

export default router;
