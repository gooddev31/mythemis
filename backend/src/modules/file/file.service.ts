import { Pagination } from '../../common/interfaces/file.interface';
import File from '../../models/file.model';

export default class FileService {
  public async getFiles(date: string, theme: string, pagination: Pagination) {
    const whereClause = {};

    if (date) {
      whereClause['date'] = date;
    }

    if (theme) {
      whereClause['theme'] = theme;
    }

    const files = await File.find(whereClause)
      .limit(pagination.amount)
      .skip((pagination.page - 1) * pagination.amount + pagination.page - 1 === 0 ? null : 1);

    return {
      message: 'Files were found',
      data: {
        files
      },
      status: 200
    };
  }
}
