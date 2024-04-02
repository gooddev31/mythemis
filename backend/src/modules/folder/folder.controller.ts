import { Response, Request } from 'express';
import FolderService from './folder.service';

export default class FolderController {
  public constructor(private readonly folderService: FolderService) {}

  public async getFolders(req: Request, res: Response) {
    const page = req.query.page ? Number(req?.query?.page) : 1;
    const amount = req.query.amount ? Number(req?.query?.amount) : 5;

    const folders = await this.folderService.getFolders(amount, page);

    return res.status(folders.status).json(folders);
  }

  public async getFoldersByUserId(req: Request, res: Response) {
    const id = req.params.userId;

    const folders = await this.folderService.getFoldersByUserId(id);

    return res.status(folders.status).json(folders);
  }

  public async createFolder(req: Request, res: Response) {
    const body = req.body;

    const folder = await this.folderService.createFolder(body);

    return res.status(folder.status).json(folder);
  }

  public async deleteFolder(req: Request, res: Response) {
    const folderId = req.params.id;

    const folder = await this.folderService.deleteFolder(folderId);

    return res.status(folder.status).json(folder);
  }

  public async updateFolder(req: Request, res: Response) {
    const body = req.body;
    const folderId = req.params.id;

    const folder = await this.folderService.updateFolder(folderId, body);

    return res.status(folder.status).json(folder);
  }
}
