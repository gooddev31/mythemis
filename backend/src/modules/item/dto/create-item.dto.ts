export class CreateItemDto {
  name: string;
  payload: string;
  creator: {
    id: string;
    username: string;
  };
  folder: {
    id: string;
  };
}
