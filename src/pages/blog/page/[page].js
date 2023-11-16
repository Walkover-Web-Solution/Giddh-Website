import { listPostContent, countPosts } from "../../../components/blogs/lib/posts";
import Layout from "../../../components/blogs/layout";
import PostList from "../../../components/blogs/postList";
import config from "../../../components/blogs/lib/config";
import Head from "next/head";
export default function Index({ posts, pagination }) {
  const title = "All You Need to Know About Online Accounting Software by Giddh";
  return (
    <>
      <Layout>
      <Head>
        <title>{title}</title>
      </Head>
        <PostList posts={posts} pagination={pagination} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page);
  const posts = listPostContent(page, config.posts_per_page);
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      page,
      posts,
      pagination,
    },
  };
}
export const getStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
