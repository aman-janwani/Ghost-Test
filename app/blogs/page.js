"use client";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../lib/blogs";
import RecentArticles from "@/components/Blog/RecentArticles";
const page = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts().then((data) => {
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedData);
      console.log(sortedData);
    });
  }, []);

  return (
    <main className="min-h-screen bg-white max-w-[110rem] mx-auto">
      <div className="px-5  md:px-0">
        <div className="flex flex-col gap-10">
        <RecentArticles data={posts.slice(0, 3)} />
        </div>
      </div>
    </main>
  );
};

export default page;
