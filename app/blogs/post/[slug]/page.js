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
  return <div className="text-white">Hello</div>;
  // const fetchData = async () => {
  //   try {
  //     const getPost = await getSinglePost(params.slug)

  //     if (!getPost) {
  //       return <div>Loading...</div>;
  //     }

  //     return (-
  //       <main className="min-h-screen max-w-[110rem] mx-auto">
  //         <div className={`h-[388px] xl:h-[46.75em] w-full bg-left relative flex  `}>
  //           <Image
  //             src={"/BG.png"}
  //             alt="Business Image"
  //             layout="fill"
  //             objectFit="cover"
  //             className="z-0 opacity-30"
  //           />
  //           <div className="z-20 w-full ">
  //             <Navbar />
  //             {/* <HeroSection data={data} /> */}
  //           </div>
  //         </div>
  //         <div className="flex-col flex w-full gap-[124px] text-white">

  //         </div>
  //         <Footer />
  //       </main>
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return fetchData();
}
