import { supabase } from "../utils/supabase";
import Link from "next/link";
import { useUser } from "../context/user";

export default function Home({ products }) {
  const { user } = useUser();
  console.log({ user });
  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      {products.map((product) => (
        <Link key={product.id} href={`/${product.id}`}>
          <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">
            {product.title}
          </a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: products } = await supabase.from("product").select("*");

  return {
    props: {
      products,
    },
  };
};
