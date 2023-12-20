import { Publisher } from './publisher.model';
import { Developer } from './developer.model';

//

export interface Game {
  id: string;
  name: string;
  description: string;
  release_date: Date;
  developer: Developer;
  publisher: Publisher;
}
