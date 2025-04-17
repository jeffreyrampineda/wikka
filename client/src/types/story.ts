import { Author } from './author';

export interface Story {
  _id: string;
  title: string;
  cover_image?: string;
  author: Author;
  description: string;
  passages: string[];
  genre: string[];
}
