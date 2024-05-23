// "use client";
import { getPosts } from "../../../../lib/blogs";

export async function generateStaticParams() {

  try {
    const posts = await getPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.log(error);
  }

  // return [{ tag: "tag1" }, { tag: "tag2" }].map((item) => ({ tag: item.tag }));
}


export default function Page({ params }) {
  const { slug } = params;
  console.log(slug);
  return <div>Hello</div>;
}
