const size = 6;

const color = ["red", "yellow", "blue"];

const getColor = () => {
  const idx = Math.floor(Math.random() * 3);
  return color[idx];
};

const getCellData = () => {
  const cellCount = size * size;
  const cellData = new Array(cellCount).fill(null);
  for (let i = 0; i < cellCount / 2; i++) {
    const color = getColor();
    cellData[i] = color;
    cellData[i + cellCount / 2] = color;
  }
  return cellData;
};

export { size, getColor, getCellData };
