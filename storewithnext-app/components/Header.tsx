import styled from "styled-components";
import { Storefront, Search, AddShoppingCart } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export interface IHeader {
  title: string;
}
const StyledMenu = styled.menu`
  background-color: #d4d7d8;
  color: #5f5d5d;
  display: flex;
  align-items: center;
  padding: 8px;
  height: 30px;
  margin-top: 0px;
  border: 0px;
`;
const StyledInput = styled.input`
  border-radius: 4px;
  border: none;
  height: 28px;
  width: 400px;
  font-size: 22px;
`;

export default function Header({ title }: IHeader) {
  return (
    <StyledMenu>
      <Box display="flex" flex="0.6" alignItems="center">
        <Storefront fontSize="large" />
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box display="flex" flex="1" alignItems="center">
        <StyledInput type="text" />
        <Search fontSize="large" />
      </Box>
      <Box display="flex" alignItems="center">
        <AddShoppingCart fontSize="large" />
      </Box>
    </StyledMenu>
  );
}
