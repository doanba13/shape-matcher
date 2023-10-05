import React from "react";
import "./Cell.css";
import styled from "styled-components";

interface CellProps {
  // Your code here
  color: string;
  index: number;
  selectIndex: number | undefined;
  onSelectedCell: (idx: number, color: string) => void;
}

const Cell: React.FC<CellProps> = ({
  color,
  index,
  onSelectedCell,
  selectIndex,
}: CellProps) => {
  // Render cell with shape and color, use CSS to style based on shape and color.
  return (
    <StyledCell
      onClick={() => onSelectedCell(index, color)}
      color={color}
      style={{ border: selectIndex === index ? "4px solid green" : "none" }}
    ></StyledCell>
  );
};

export default Cell;

const StyledCell = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;

  border-radius: 0.5rem;

  background-color: ${(props) => props.color};
`;
