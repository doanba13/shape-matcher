import React, { useState, useEffect, useMemo } from "react";
import Cell from "./Cell";
import "./Board.css";
import styled from "styled-components";

const color = ["red", "yellow", "blue"];

const getColor = () => {
  const idx = Math.floor(Math.random() * 3);
  return color[idx];
};

const getCellData = () => {
  const cellData = new Array(16).fill(null);
  for (let i = 0; i < 8; i++) {
    const color = getColor();
    cellData[i] = color;
    cellData[i + 8] = color;
  }
  return cellData;
};

const Board: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<number | undefined>();
  const [cellData, setCellData] = useState(() => getCellData());

  // states...
  useEffect(() => {
    // Initialize the game board with random shapes and colors
  }, []);

  const handleCellClick = (index: number, color: string) => {
    if (!selectedCell) {
      setSelectedCell(index);
      return;
    }
    if (selectedCell === index) {
      setSelectedCell(undefined);
      return;
    }
    const prevCell = cellData[selectedCell];
    const currentCell = cellData[index];
    console.log(prevCell, currentCell);
    if (prevCell === currentCell) {
      console.log("check");
      const newState = [...cellData];
      newState[selectedCell] = "transparent";
      newState[index] = "transparent";
      setCellData(newState);
      setSelectedCell(undefined);
      return;
    }
  };

  console.log(selectedCell);

  return (
    <BoardLayout>
      {cellData.map((v, i) => (
        <Cell
          key={i}
          color={v}
          index={i}
          onSelectedCell={handleCellClick}
          selectIndex={selectedCell}
        />
      ))}
    </BoardLayout>
  );
};

export default Board;

const BoardLayout = styled.div`
  padding: 1rem;
  margin: auto;
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  aspect-ratio: 1;
  width: 80vw;
  background-color: #5c616b;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
