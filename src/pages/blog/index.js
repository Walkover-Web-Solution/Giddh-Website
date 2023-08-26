

import { listPostContent, countPosts } from '../../components/lib/posts'
// import { getTag, listTags } from "../../components/lib/tags";
import Layout from "../../components/blogs/layout";
import PostList from "../../components/blogs/postList";
import config from "../../components/lib/config";
// import Head from "next/head";
// const tags = listTags;
// console.log(tags, "67");
export default function Index({ posts,tags, pagination }) {
console.log(" in index");
  const url = "/blog";
  const title = "All posts";
  return (
    <Layout>
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export async function getStaticProps() {
    console.log("inside static props");
  const posts = listPostContent(1,15);
  console.log(posts, "67");
//   const tags = listTags();  
  // const tagsObject = getTag();
  // console.log(tagsObject, "inside tags object")
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / 15),
  };
  console.log(pagination, "pagination");
  return {
    props: {
      posts,
    //   tags,
      pagination,
    },
  };
}
