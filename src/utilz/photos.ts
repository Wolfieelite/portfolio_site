type Photos = {
  title: string;
  src: string;
  category: string;
  width: number;
  height: number;
  globalIndex: number;
};

const photos: Photos[] = [
  {
    title: 'Bed',
    category: '16x16 pixle art',
    src: '/image2.png',
    width: 500,
    height: 500,
  },
  {
    title: 'fire spider',
    category: '16x16 pixle art',
    src: '/image3.png',
    width: 500,
    height: 500,
  },
  {
    title: 'dark oak tree',
    category: '16x16 pixle art',
    src: '/image4.png',
    width: 500,
    height: 500,
  },
  {
    title: 'bundle',
    category: '16x16 pixle art',
    src: '/image5.png',
    width: 500,
    height: 500,
  },
  {
    title: 'first sword',
    src: '/image1.png',
    category: '64x64 pixle art',
    width: 500,
    height: 500,
  },
  {
    title: 'blue owl',
    category: '16x16 pixle art',
    src: '/image6.png',
    width: 500,
    height: 500,
  },
  {
    title: 'diamaond chest piece',
    category: '16x16 pixle art',
    src: '/image7.png',
    width: 500,
    height: 500,
  },
  {
    title: 'vendign machine',
    category: '16x16 pixle art',
    src: '/image8.png',
    width: 100,
    height: 100,
  },
  {
    title: 'the creeper',
    category: '16x16 pixle art',
    src: '/image9.png',
    width: 500,
    height: 500,
  },
  {
    title: 'landscape',
    category: 'landscape',
    src: '/ui/Header/web-banner.png',
    width: 1600,
    height: 670,
  },
].map((p, i) => ({
  ...p,
  globalIndex: i,
}));

export default photos;


const uiImage = {
  "logo": { src: "/ui/WebLogo.png" },
  "wolfLogo": { src: "/ui/WolfLogo.png" },
  "webbanner": { src: "" },
  "gameassetBanner": { src: "/ui/Home/game-asset-banner.png" },
  "tilemapBanner": { src: "/ui/Home/tilemap-banner.png" },
  "characterBanner": { src: "/ui/Home/character-banner.png" },
  "interiorBanner": { src: "/ui/Home/interior-banner.png" }
}


export { photos, uiImage }
