import { Box, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export interface ICard {
  title: string;
  picture: string;
  id: number;
}

export default function Card({ title, picture, id }: ICard) {
  return (
    <Box
      sx={{
        width: 160,
        height: 260,
        margin: 2,
      }}
      alignContent="center"
    >
      <Box
        sx={{
          width: 150,
          height: 255,
          fontSize: 16,
        }}
      >
        <CardMedia component="img" image={picture} alt={title} key={id} />
      </Box>
      <Link href={`products/${id}`}>
        <Typography variant="subtitle1" noWrap={true} key={id}>
          {title}
        </Typography>
      </Link>
    </Box>
  );
}
