const config = require('../../../components/blogs/lib/config');
const { countPosts, listPostContent } = require("../../../components/blogs/lib/posts");
const { getTag, listTags } = require("../../../components/blogs/lib/tags");
import Pagination from "../../../components/blogs/pagination";
import { useRouter } from "next/router";
import PostItem from "../../../components/blogs/postItem";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Head from "next/head";
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Index({ posts, tag, pagination, page }) {
 const router  = useRouter();
 const searchParams = useSearchParams();
 let pageNo = searchParams.get('page');
 let tagName = searchParams.get('tag');

 const navigateToPreviousPage = useCallback((event) => {
  event.preventDefault();
  if (window.history.length > 1) {
    router.back();
  } else {
    const basePath = tagName 
      ? `/blog/tags/${tagName}`
      : '/blog';
    const pagePath = pageNo > 1 
      ? tagName ? `/${pageNo}` : `/page/${pageNo}`
      : '';
    router.push(basePath + pagePath);
  }
}, [router, tagName, pageNo]);
//   const title = tag.name; 
  return (
      <>
       <Head>
        <title>{tag}</title>
        <meta property="og:title" content={`Explore our collection of articles tagged under ${tag} at GIDHH -The Best Accounting Software. Discover insightful content, tips, and resources related to ${tag}.`} key="title" />
      </Head>
      <div className="blog">
<div className={"container blog-home-container"}>
  <div className={"posts"}>
    <button className="d-inline-block btn blog-container__back-btn mb-4" onClick={(event) => navigateToPreviousPage(event)}><MdKeyboardArrowLeft />Back</button>
    <div className={"post-list"}>
      {posts?.map((it, i) => (                        
          <PostItem key={i} post={it} tag={tag} page={pagination.current} />            
      ))}
    </div>
     <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: () => "/blog/tags/[[...slug]]",
          as: (page) =>
            page === 1
              ? "/blog/tags/" + tag
              : `/blog/tags/${tag}/${page}`,
        }}
      />
  </div>
</div>
</div>
</>
  );
}

export async function getStaticProps({ params }) {
    let queries = []
    queries = params.slug;
  const [slug, page] = [queries[0], queries[1] || 1];
  const posts = listPostContent(
    page ? parseInt(page) : 1,
    config.posts_per_page,
    slug
  );
  const tag = getTag(slug);

  const pagination = {
    current: page ? parseInt(page) : 1,
    pages: Math.ceil(countPosts(slug) / config.posts_per_page),
  };
  const props = {
    posts,
    tag,
    pagination: { current: pagination.current, pages: pagination.pages },
    page,
  };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = listTags().flatMap((tag) => {
    const pages = Math.ceil(countPosts(tag.slug) / config.posts_per_page);

    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.slug] },
          }
        : {
            params: { slug: [tag.slug, (page + 1).toString()] },
          }
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
}

// module.exports = {
//   // Index,
//   getStaticProps,
//   getStaticPaths,
// };