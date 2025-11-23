const photos = [
  {
    title: 'first sword',
    src: '/image1.png',
    category: '64x64 pixle art',
    width: '500',
    height: '500',
  },
  {
    title: 'Bed',
    category: '16x16 pixle art',
    src: '/image2.png',
    width: '500',
    height: '500',
  },
  {
    title: 'fire spider',
    category: '16x16 pixle art',
    src: '/image3.png',
    width: '500',
    height: '500',
  },
  {
    title: 'dark oak tree',
    category: '16x16 pixle art',
    src: '/image4.png',
    width: '500',
    height: '500',
  },
  {
    title: 'bundle',
    category: '16x16 pixle art',
    src: '/image5.png',
    width: '500',
    height: '500',
  },
  {
    title: 'blue owl',
    category: '16x16 pixle art',
    src: '/image6.png',
    width: '500',
    height: '500',
  },
  {
    title: 'diamaond chest piece',
    category: '16x16 pixle art',
    src: '/image7.png',
    width: '500',
    height: '500',
  },
  {
    title: 'vendign machine',
    category: '16x16 pixle art',
    src: '/image8.png',
    width: '500',
    height: '500',
  },
  {
    title: 'the creeper',
    category: '16x16 pixle art',
    src: '/image9.png',
    width: '500',
    height: '500',
  },
]
const letterMap = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const stringToLetter = (imageId: string, category: string) => {
  //Take each character of image title break them up into an objec

  //splits words into their own arrays
  const wordArr = imageId.split('')
  console.log(wordArr)
}

export { photos, letterMap, stringToLetter }
