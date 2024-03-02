import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const PostPage: NextPage = () => {
  return (
    <div className="p-10 text-2xl flex flex-col">
      this is the post page
      <button className="m-2 bg-blue-400 p-2 rounded-xl text-white w-40">
        <Link href={"../"}>back to blog</Link>
      </button>
    </div>
  );
};

export default PostPage;
