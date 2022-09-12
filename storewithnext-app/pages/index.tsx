import type { NextPage } from "next";
import Header from "../components/Header";
import Cards from "../components/Cards";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any;
}

export async function getStaticProps() {
  const data = await fetch(
    //Aqui temos um fetch que traz os dados dos dez primeiros produtos ordenados pelo rate
    "http://localhost:3001/products?_sort=rating.rate&_order=desc&_limit=10"
  ).then((resp) => resp.json());
  return {
    props: { data },
    revalidate: 10,
  };
}

const Home: NextPage<{ data: IProduct[] }> = ({ data }) => {
  return (
    <>
      <Header title="Clothes Store"></Header>
      <Cards title="Top 10 - Melhores Avaliados" data={data}></Cards>
    </>
  );
};

export default Home;
