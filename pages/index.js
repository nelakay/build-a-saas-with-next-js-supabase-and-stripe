import { supabase } from "../utils/supabase";
import Link from "next/link";
import { useUser } from "../context/user";
import Image from "next/dist/client/image";

export default function Home({ products }) {
  const { user } = useUser();
  console.log({ user });
  return (
    <div className="body w-full h-screen py-16">
    <div className="w-full max-w-3xl mx-auto px-2">
      {products.map((product) => (
        <Link key={product.id} href={`/${product.id}`}>
          <a className="p-8 h-40 mb-4 rounded element text-xl flex">
            <Image
            src="/{product.tile-url}"
            alt=""
            width="100"
            height="100"/>
          </a>
        </Link>
      ))}
    </div>
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
