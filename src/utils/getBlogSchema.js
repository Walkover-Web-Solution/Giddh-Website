import blogSchema from "@/data/blogSchema.json";

export const getBlogSchema = (url) => blogSchema.find((blog) => blog.url === `https://giddh.com/blog/${url}`);
