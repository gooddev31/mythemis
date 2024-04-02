import { Status } from '../../../common/interfaces/event.interface';

export class UpdateEventDto {
  title: string;
  timeline: string;
  status: Status;
}
