import { Request, Response } from 'express';
import FileService from './file.service';
import { Pagination } from '../../common/interfaces/file.interface';

export default class FileController {
  public constructor(private readonly fileService: FileService) {}

  public async getFiles(req: Request, res: Response) {
    const date = req.query.date as string;
    const theme = req.query.theme as string;
    const amount = Number(req.query.amount) || 5;
    const page = Number(req.query.page) || 1;

    const pagination: Pagination = {
      amount,
      page
    };

    const files = await this.fileService.getFiles(date, theme, pagination);

    return res.status(files.status).json(files);
  }
}
