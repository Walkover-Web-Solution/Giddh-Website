import React from "react";
import PostItem from "./postItem";
// import TagLink from "./tagLink";
import Pagination from "./pagination";
// import TagButton from "./tagButton";

export default function PostList({ posts, pagination , page}) {  
  return (
    <div className="blog">
    <div className={"container blog-home-container"}>
      <div>
        <h1 className="text-center c-fs-3">Blogs</h1>
      </div>
      <div className={"posts"}>
        <div className={"post-list"}>
          {posts?.map((it, i) => (                        
              <PostItem key={i} post={it} page={pagination?.current} />            
          ))}
        </div>
        <Pagination
          current={page || '1'}
          pages={pagination?.pages}
          link={{
            href: (page) => (page === 1 ? "/blog" : `/blog?page=${page}`),
            as: (page) => (page === 1 ? null : `/blog?page=${page}`),
          }}
        />
      </div>  
    </div>
    </div>
  );
}
