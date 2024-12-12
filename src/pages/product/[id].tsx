import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter(); //pega  parâmetro (id)

  return <h1>Product</h1>;
}
