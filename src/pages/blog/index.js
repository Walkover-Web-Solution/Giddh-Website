import { listPostContent, countPosts } from "../../components/blogs/lib/posts";
import { listTags } from "../../components/blogs/lib/tags";
import Layout from "../../components/blogs/layout";
import PostList from "../../components/blogs/postList";
import config from "../../components/blogs/lib/config";

export default function Index({ posts, tags, pagination, page }) {
  return (
    <Layout>
      <PostList posts={posts} tags={tags} pagination={pagination} page={page} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page || "1", 10);
  if (isNaN(page) || page < 1) {
    return {
      notFound: true,
    };
  }
  const posts = listPostContent(page, config.posts_per_page);
  const tags = listTags();  
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };

  return {
    props: {
      page,
      posts,
      tags,
      pagination,
    },
  };
}
