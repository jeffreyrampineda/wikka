const theTest = [
    "「「「き」 ちかく",
    "きゃちょっち",
    "びっくり 「ふしぎな たけ だ。」",
    "みやこ。",
    "むかし",
];

const princessKaguya = [
    "むかし、 みやこ の ちかく の むら に たけとり の おきな と よばれて いる おじいさん が いました。",
    "おじいさん は まいにちやま へ いって たけ を とり、 それ で かご を あみ、 ざる を つくって くらして いました。",
    "ある ひ、 おじいさん が たけ を きろう と したら ねもと の ぴかぴか ひかる たけ が ありました。 「ふしぎな たけ だ。」",
    "おじいさん は びっくりして その たけ を そっと きって みました。すると どう でしょう。 たけ の なか に ちいさな おんな の こ が いました。",
    "「なんて かわいい こ だ。」おじいさん は おおよろこび で おんなのこ を だきあげ、いえ に つれて かえりました。"
];

const momotaro = [
    "むかし、 むかし、 ある ところ に おじいさん と おばあさん が いました。",
    "おじいさん が やま へ き を きり に いけば、 おばあさん は かわ へ せんたく に でかけます。",
    "「おじいさん、 はよう もどってきなされ。」",
    "おばあさん も き を つけて な。」",
    "まいにち やさしく いい あって でかけます。"
];

export const stories = [{
    "id": 0, 
    "author": "Jeffrey Ram Pineda", 
    "title": "The Hiragana", 
    "description": "This is a simple collection of random words created to test different reading rules.", 
    "sentences": theTest 
}, {
    "id": 1, 
    "author": "Crunchy Nihongo", 
    "title": "Princess Kaguya", 
    "description": "A baby who was found inside a shiny bamboo stalk, grow into a beautiful lady and orders her suitors to prove their love by completing near-impossible tasks",
    "sentences": princessKaguya
}, {
    "id": 2, 
    "author": "Crunchy Nihongo", 
    "title": "Momotaro", 
    "description": "A boy who came out from a giant peach found in a river, decided to help his parents and village by fighting the evil Oni with the help of his animal friends",
    "sentences": momotaro
}];


 function getStories() {
    return stories;
}

module.exports = {
    getStories,
}
