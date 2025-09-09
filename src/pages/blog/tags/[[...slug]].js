const config = require('../../../components/blogs/lib/config');
const { countPosts, listPostContent } = require("../../../components/blogs/lib/posts");
const { getTag } = require("../../../components/blogs/lib/tags");
import Pagination from "../../../components/blogs/pagination";
import { useRouter } from "next/router";
import PostItem from "../../../components/blogs/postItem";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Head from "next/head";

export default function Index({ posts, tag, pagination }) {
 const router  = useRouter();

  const navigateToPreviousPage = (event) => {
    event.preventDefault();
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/blog');
    }
  }
  return (
      <>
       <Head>
        <title>{tag}</title>
        <meta property="og:title" content={`Explore our collection of articles tagged under ${tag} at GIDHH -The Best Accounting Software. Discover insightful content, tips, and resources related to ${tag}.`} key="title" />
      </Head>
      <div className="blog">
<div className={"container blog-home-container"}>
  <div className={"posts"}>
    <button className="d-inline-block btn blog-container__back-btn mb-4" onClick={navigateToPreviousPage}><MdKeyboardArrowLeft />Back</button>
    <div className={"post-list"}>
      {posts?.map((post, index) => (                        
          <PostItem key={index} post={post} tag={tag} page={pagination?.current} />            
      ))}
    </div>
     <Pagination
        current={pagination?.current}
        pages={pagination?.pages}
        link={{
          href: (page) => `/blog/tags/${tag}?page=${page}`,
          as: (page) =>
            page === 1
              ? `/blog/tags/${tag}`
              : `/blog/tags/${tag}?page=${page}`,
        }}
      />
  </div>
</div>
</div>
</>
  );
}

export async function getServerSideProps({ params, query }) {
  const queryPage = parseInt(query.page || "1", 10);
  if (isNaN(queryPage) || queryPage < 1) {
    return {
      notFound: true,
    };
  }
  const [slug] = params.slug || [];
  const page = queryPage;
  const posts = listPostContent(
    page,
    config.posts_per_page,
    slug
  );
  const tag = getTag(slug);

  const pagination = {
    current: page,
    pages: Math.ceil(countPosts(slug) / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tag,
      pagination,
    },
  };
}
