/* eslint-disable max-len */

import { SIZES } from '../../../constants/style.constants';

export type TDataCarousel = {
  id: string;
  title: string;
  description: string;
  poster: string;
  rating: number;
  votes: number;
};

export const ITEM_WIDTH = SIZES.width * 0.71;
export const ITEM_HEIGHT = ITEM_WIDTH * 1.28;
export const VISIBLE_ITEMS = 3;
export const SPACING = SIZES.width * 0.025;

export const DataCarousel: Array<TDataCarousel> = [
  {
    id: '0',
    title: 'The Adventures: A Tale of Friendship and Sharing.',
    description:
      'In a beautiful and peaceful forest, there lived three best friends - a squirrel named Squeaky, a bird named Tweet, and a rabbit named Hop.',

    poster:
      'https://m.media-amazon.com/images/M/MV5BOTYwYTRiZTctZjU2NC00ZTRkLWExYTUtODU1NTBhMzU1MzM4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg',
    rating: 4,
    votes: 675,
  },
  {
    id: '1',
    title: 'The Adventures: A Tale of Friendship and Sharing.0',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
    rating: 3,
    votes: 35,
  },
  {
    id: '2',
    title: 'The Adventures: A Tale of Friendship and Sharing.1',
    description:
      'In a beautiful and peaceful forest, there lived three best friends - a squirrel named Squeaky, a bird named Tweet, and a rabbit na1',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
    rating: 4,
    votes: 43,
  },
  {
    id: '3',
    title: 'The Adventures: A Tale of Friendship and Sharing.2',
    description:
      'In a beautiful and peaceful forest, there lived three best friends - a squirrel named Squeaky, a bird named Tweet, and a rabbit na2',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
    rating: 5,
    votes: 33,
  },
  {
    id: '4',
    title: 'The Adventures: A Tale of Friendship and Sharing.3',
    description:
      'In a beautiful and peaceful forest, there lived three best friends - a squirrel named Squeaky, a bird named Tweet, and a rabbit na3',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
    rating: 4,
    votes: 47,
  },
  {
    id: '5',
    title: 'The Adventures: A Tale of Friendship and Sharing.4',
    description:
      'In a beautiful and peaceful forest, there lived three best friends - a squirrel named Squeaky, a bird named Tweet, and a rabbit na4',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
    rating: 4,
    votes: 48,
  },
  {
    id: '6',
    title: 'The Adventures: A Tale of Friendship and Sharing.5',
    description:
      'In a beautiful and peaceful forest, there lived three best friends - a squirrel named Squeaky, a bird named Tweet, and a rabbit na5',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
    rating: 4,
    votes: 422,
  },
];
