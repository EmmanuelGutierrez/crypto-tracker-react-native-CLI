export const getIconByName = (nameStr: string) => {
  const name = nameStr.toLowerCase().replace(' ', '-');
  return `https://coinlore.com/img/${name}.webp`;
};
