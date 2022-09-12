import type { NextPage } from "next";
import { useRouter } from "next/router";
import Details from "../../components/Details";

const ProdDetails: NextPage = () => {
  const rota = useRouter();
  const { id } = rota.query;

  return (
    <>
      <Details item={id} />
    </>
  );
};

export default ProdDetails;
