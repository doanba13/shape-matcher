import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import styled from "styled-components";
import { getCellData, size } from "../utils";

const Board: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<number | undefined>();
  const [hiddenCell, setHiddenCell] = useState<number[]>([]);
  const [cellData, setCellData] = useState(() => getCellData());

  const handleCellClick = (index: number) => {
    if (selectedCell === undefined) {
      setSelectedCell(index);
      return;
    }
    if (selectedCell === index) {
      setSelectedCell(undefined);
      return;
    }
    const prevCell = cellData[selectedCell];
    const currentCell = cellData[index];

    if (prevCell === currentCell) {
      cellMatchHandler(index);
    } else cellUnmatchHandler(index);
  };

  const cellMatchHandler = (index: number) => {
    const newState = [...cellData];
    newState[selectedCell!] = "transparent";
    newState[index] = "transparent";
    setCellData(newState);
    setSelectedCell(undefined);
  };

  const cellUnmatchHandler = (index: number) => {
    const currentHiddenCell = [...hiddenCell];
    setHiddenCell((prev) => [...prev, selectedCell!, index]);
    setTimeout(() => setHiddenCell(currentHiddenCell), 1000);
    setSelectedCell(undefined);
  };

  console.log(selectedCell);

  return (
    <BoardLayout size={size}>
      {cellData.map((v, i) => (
        <Cell
          key={i}
          color={v}
          index={i}
          hiddenCell={hiddenCell}
          onSelectedCell={handleCellClick}
          selectIndex={selectedCell}
        />
      ))}
    </BoardLayout>
  );
};

export default Board;

const BoardLayout = styled.div<{ size: number }>`
  padding: 1rem;
  margin: auto;
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  aspect-ratio: 1;
  width: 80vw;
  max-width: 800px;
  background-color: #5c616b;

  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-template-rows: repeat(${({ size }) => size}, 1fr);
`;
