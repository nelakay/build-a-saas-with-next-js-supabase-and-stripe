import { supabase } from "../utils/supabase";
import Link from "next/link";
import { useUser } from "../context/user";
import Image from "next/dist/client/image";

export default function Home({ products }) {
  const { user } = useUser();
  console.log({ user });
  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      {products.map((product) => (
        <Link key={product.id} href={`/${product.id}`}>
          <Image
            src='{product.tile-url}'
            alt=""
            width="100"
            height="100"/>
         
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
