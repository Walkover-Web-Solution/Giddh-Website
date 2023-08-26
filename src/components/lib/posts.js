// const fs = require("fs");
// import fs from "fs";
// const fsPromises = require("fs").promises;
const fsPromise = require("fs").promises;
const matter = require("gray-matter");
const path = require("path");
const yaml = require("js-yaml");
const { readdirSync, readFileSync } = require("fs");

const postsDirectory = path.join(process.cwd(), "_posts/blog");
let postCache;
// console.log(postCache, "Cache");
export function fetchPostContent() {
    console.log("inside fetch post");
  if (postCache) {    

    return postCache;
  }
//   else{
  //     console.log("hello post cache in else");
  //   }
  
  const fileNames = readdirSync(postsDirectory, { withFileTypes: false });
  console.log(fileNames, "File names");

  const allPostsData = fileNames
    .filter((it) => it.endsWith(".mdx"))

    .map((fileName) => {
      let fullPath = path.join(postsDirectory, fileName);


      console.log(fullPath, "fulll path");
      const fileContents = readFileSync(fullPath, "utf8");
      console.log(fileContents, "file contents");

      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
        },
      });
      console.log(matterResult, "matter result");
      const matterData = matterResult?.data;
      console.log(matterData, "matter data");
      matterData.fullPath = fullPath;
      matterData.staticPath = fileName.split('.')[0];
      
      // console.log(JSON.stringify(fullPath), "full path");

      const slug = fileName.replace(/\.mdx$/, "");
      // fileName.replace(/\.mdx$/, "");
      // if (matterData.slug !== slug) {
      //   throw new Error("slug field not match with the path of its content source");
      // }

      return matterData;
    });

  postCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
}

export function countPosts(tag) {
    console.log("inside countPosts");
  return fetchPostContent().filter(
    (it) => !tag || (it.tags && it.tags.includes(tag))
  ).length;
}

export function listPostContent(page, limit, tag) {
  return fetchPostContent()
      .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
      .slice((page - 1) * limit, page * limit);
}

// module.exports = {
//   fetchPostContent,
//   countPosts,
//   listPostContent,
// };
