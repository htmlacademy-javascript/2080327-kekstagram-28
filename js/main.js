
const getLikes = (first,last) => {
  const lower = Math.ceil(Math.min(first, last));
  const upper = Math.floor(Math.max(first, last));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const descriptionsFirst = [
  'описание1',
  'описание2',
  'описание3',
  'описание4',
  'описание5',
];

const descriptionsSecond = [
  'дополнение1',
  'дополнение2',
  'дополнение3',
  'дополнение4',
];
const getDescription = () => {
  let lower = Math.ceil(Math.min(0, descriptionsFirst.length - 1));
  let upper = Math.floor(Math.max(0, descriptionsFirst.length - 1));
  let result = Math.random() * (upper - lower + 1) + lower;
  const keyFirst = Math.floor(result);

  lower = Math.ceil(Math.min(0, descriptionsSecond.length - 1));
  upper = Math.floor(Math.max(0, descriptionsSecond.length - 1));
  result = Math.random() * (upper - lower + 1) + lower;
  const keySecond = Math.floor(result);

  return descriptionsFirst[keyFirst] + descriptionsSecond[keySecond];
};
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const textComment = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const getTextComment = () => {
  const lower = Math.ceil(Math.min(0, textComment.length - 1));
  const upper = Math.floor(Math.max(0, textComment.length - 1));
  const result = Math.random() * (upper - lower + 1) + lower;
  const keyFirst = Math.floor(result);

  return textComment[keyFirst];
};
const firstName = [
  'Вася',
  'Дима',
  'Леша',
  'Миша',
  'Влад',
  'Паша'
];
const getName = () => {
  const lower = Math.ceil(Math.min(0, firstName.length - 1));
  const upper = Math.floor(Math.max(0, firstName.length - 1));
  const result = Math.random() * (upper - lower + 1) + lower;
  const keyFirst = Math.floor(result);

  return firstName[keyFirst];
};

const getData = function() {

  const data = [];
  const comments = [];

  for (let j = 0; j < 2; j++) {
    comments.push({
      id: j + 1,
      avatar: 'img/avatar-' + generateRandomInteger(1,6) + '.svg',
      message: getTextComment(),
      name: getName()
    });
  }

  for (let i = 0; i < 25; i++) {
    data.push({
      id: i + 1,
      url:'photos/' + (i + 1) + '.jpg',
      likes: getLikes(15,200),
      description: getDescription(),

    });

    data[i].comments = comments;
  }
  return data;
};
console.log(getData());
