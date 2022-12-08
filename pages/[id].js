import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import Video from "react-player";

const productDetails = ({ product }) => {
  const [videoUrl, setVideoUrl] = useState();

  const getPremiumContent = async () => {
    const { data } = await supabase
      .from("premium_content")
      .select("video_url")
      .eq("id", product.id)
      .single();

    setVideoUrl(data?.video_url);
  };

  useEffect(() => {
    getPremiumContent();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{product.title}</h1>
      <p>{product.description}</p>
      {!!videoUrl && <Video url={videoUrl} width="100%" />}
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data: products } = await supabase.from("product").select("id");

  const paths = products.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: product } = await supabase
    .from("product")
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      product,
    },
  };
};

export default productDetails;
