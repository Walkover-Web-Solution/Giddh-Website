import blogSchema from "@/data/blogSchema.json";

export const getBlogSchema = (url) => {
  const blogData = blogSchema.find((blog) => blog.url === "https://giddh.com/blog/" + url);
  if (blogData) {
    return blogData;
  }
  else {
    return null;
  }
};
