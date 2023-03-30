const TEXT_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const FIRST_NAME = [
  'Вася',
  'Дима',
  'Леша',
  'Миша',
  'Влад',
  'Паша'
];

const DESCRIPTION_FIRST = [
  'описание1',
  'описание2',
  'описание3',
  'описание4',
  'описание5',
];

const DESCRIPTION_SECOND = [
  'дополнение1',
  'дополнение2',
  'дополнение3',
  'дополнение4',
];
const COMMENTS_COUNT = 2;
const AVATAR_MIN_NUMBER = 1;
const AVATAR_MAX_NUMBER = 6;
const PHOTOS_COUNT = 25;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;
const generateRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getDescription = () => {
  const keyFirst = generateRandomInteger(0,DESCRIPTION_FIRST.length - 1);
  const keySecond = generateRandomInteger(0,DESCRIPTION_SECOND.length - 1);

  return DESCRIPTION_FIRST[keyFirst] + DESCRIPTION_SECOND[keySecond];
};

const getTextComment = () => {
  const keyFirst = generateRandomInteger(0,TEXT_COMMENTS.length - 1);
  return TEXT_COMMENTS[keyFirst];
};

const getName = () => {
  const keyFirst = generateRandomInteger(0,FIRST_NAME.length - 1);
  return FIRST_NAME[keyFirst];
};
const getComments = () => {
  const comments = [];
  for (let j = 0; j < COMMENTS_COUNT; j++) {
    comments.push({
      id: j + 1,
      avatar: `img/avatar-${generateRandomInteger(AVATAR_MIN_NUMBER,AVATAR_MAX_NUMBER)}.svg`,
      message: getTextComment(),
      name: getName()
    });
  }
  return comments;
};
const getData = () => {

  const data = [];

  for (let i = 0; i < PHOTOS_COUNT; i++) {
    data.push({
      id: i + 1,
      url:`photos/${(i + 1)}.jpg`,
      likes: generateRandomInteger(MIN_LIKE_COUNT,MAX_LIKE_COUNT),
      description: getDescription(),
      comments: getComments()
    });
  }
  return data;
};
getData();
