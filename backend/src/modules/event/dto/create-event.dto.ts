import { Status } from '../../../common/interfaces/event.interface';

export class CreateEventDto {
  title: string;
  timeline: string;
  status: Status;
}
