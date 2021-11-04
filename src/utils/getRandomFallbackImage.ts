import { Image } from 'react-native';

import Blossom from '../assets/blossom.png';
import Bubbles from '../assets/bubbles.png';
import Buttercup from '../assets/buttercup.png';
import Professor from '../assets/professor.png';
import Mayor from '../assets/mayor.png';
import MissBellum from '../assets/miss-bellum.png';
import MissKeane from '../assets/miss-keane.png';
import Him from '../assets/him.png';
import PrincessMorbucks from '../assets/princess-morbucks.png';
import Fuzzy from '../assets/fuzzy.png';
import MojoJojo from '../assets/mojo-jojo.png';

export const getRandomFallbackImage = (): string => {
  const images = [
    Blossom,
    Bubbles,
    Buttercup,
    Professor,
    Mayor,
    MissBellum,
    MissKeane,
    Him,
    PrincessMorbucks,
    Fuzzy,
    MojoJojo,
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  const { uri } = Image.resolveAssetSource(randomImage);

  return uri;
};
