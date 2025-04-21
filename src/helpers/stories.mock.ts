import { Author, Story } from '../types';

const authors_mock: Author[] = [
  {
    _id: '0',
    first_name: 'Jeffrey Ram',
    last_name: 'Pineda',
    name: 'Pineda, Jeffrey Ram',
    lifespan: ' - ',
  },
  {
    _id: '1',
    first_name: 'Crunchy Nihongo',
    last_name: '',
    name: 'Crunchy Nihongo',
    lifespan: ' - ',
  },
];

const stories_mock: Story[] = [
  {
    _id: '0',
    title: 'The Hiragana',
    cover_image: '/cover_the_hiragana.jpg',
    author: authors_mock[0],
    description:
      'This is a simple collection of random words created to test different reading rules.',
    passages: [
      'あいうえおかきくけこさしすせそた',
      'ちつてとなにぬねのはひふへほま',
      'みむめもやゆよらりるれろわをん',
      'こんにちは おげんきですか?',
      'はい だいじょうぶです',
      'いいえ。',
      'ありがとう さようなら',
      '「き」 ちかく',
    ],
    genre: [],
  },
  {
    _id: '1',
    title: 'The Tale of Princess Kaguya',
    author: authors_mock[0],
    description:
      'A baby who was found inside a shiny bamboo stalk, grow into a beautiful lady and orders her suitors to prove their love by completing near-impossible tasks.',
    passages: [
      'むかし、 みやこ の ちかく の むら に たけとり の おきな と よばれて いる おじいさん が いました。',
      'おじいさん は まいにちやま へ いって たけ を とり、 それ で かご を あみ、 ざる を つくって くらして いました。',
      'ある ひ、 おじいさん が たけ を きろう と したら ねもと の ぴかぴか ひかる たけ が ありました。 「ふしぎな たけ だ。」',
      'おじいさん は びっくりして その たけ を そっと きって みました。すると どう でしょう。 たけ の なか に ちいさな おんな の こ が いました。',
      '「なんて かわいい こ だ。」おじいさん は おおよろこび で おんなのこ を だきあげ、いえ に つれて かえりました。',
    ],
    genre: ['0', '1'],
  },
  {
    _id: '2',
    title: 'The Tale of Momotaro',
    author: authors_mock[1],
    description:
      'A boy who came out from a giant peach found in a river, decided to help his parents and village by fighting the evil Oni with the help of his animal friends.',
    passages: [
      'むかし、 むかし、 ある ところ に おじいさん と おばあさん が いました。',
      'おじいさん が やま へ き を きり に いけば、 おばあさん は かわ へ せんたく に でかけます。',
      '「おじいさん、 はよう もどってきなされ。」',
      'おばあさん も き を つけて な。」',
      'まいにち やさしく いい あって でかけます。',
    ],
    genre: ['0', '1'],
  },
];

export { stories_mock };
