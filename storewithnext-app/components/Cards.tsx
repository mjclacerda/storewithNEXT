import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Card from "./Card";
import { IProduct } from "../pages/index";

interface ICards {
  title: string;
  data: IProduct[];
}

const StyledDiv = styled.div`
  padding-left: 16px;
  text-align: center;
`;

export default function Cards({ title, data }: ICards) {
  return (
    <StyledDiv>
      <Typography variant="h5">{title}</Typography>
      <Box display="flex" flexWrap="wrap" alignItems="center">
        {data.map((prod) => (
          <Card
            title={prod.title}
            picture={prod.image}
            id={prod.id}
            key={prod.id}
          />
        ))}
      </Box>
    </StyledDiv>
  );
}
