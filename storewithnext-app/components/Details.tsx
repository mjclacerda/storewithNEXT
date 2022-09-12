import { Box, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";
import useSWR from "swr";

interface IDetails {
  item: any;
}
const StyledDt = styled.dt`
  color: #131330;
  font-weight: bold;
`;
const StyledDd = styled.dd`
  text-align: justify;
  margin-bottom: 3px;
`;

export default function Details({ item }: IDetails) {
  const fetcher = async () => {
    const data = await fetch(`http://localhost:3001/products/${item}`).then(
      (resp) => resp.json()
    );
    return data;
  };

  const { data, error } = useSWR("dash", fetcher);
  if (error) return <div>Esse produto não existe</div>;
  if (!data) return <div>Loading</div>;
  if (data)
    return (
      <Box display="flex">
        <Box
          sx={{
            width: 300,
            height: 600,
            fontSize: 23,
            margin: 2,
          }}
        >
          <CardMedia component="img" image={data.image} alt={data.title} />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 600,
            fontSize: 23,
            margin: 4,
          }}
        >
          <Typography variant="subtitle2" key={data.id} alignContent="justify">
            <dl>
              <StyledDt>Categoria:</StyledDt>
              <StyledDd>{data.category}</StyledDd>
              <StyledDt>Produto:</StyledDt> <StyledDd>{data.title}</StyledDd>
              <StyledDt>Descrição:</StyledDt>
              <StyledDd>{data.description}</StyledDd>
              <StyledDt>Avaliação:</StyledDt>
              <StyledDd>{data.rating.rate}</StyledDd>
              <StyledDt>Preço:</StyledDt> <StyledDd>R${data.price}</StyledDd>
            </dl>
          </Typography>
        </Box>
      </Box>
    );
}
