import blogSchema from "@/data/blogSchema.json";
import { format, parseISO } from "date-fns";

export default function getBlogSchema({ data }) {
  if (data?.noSchema) {
    return null;
  } else {
    const schema = blogSchema.find(
      (blog) =>
        blog.url === `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${data?.url}`
    );
    if (schema) {
      return schema;
    } else {
      return generateBlogSchema(data);
    }
  }
}

export function generateBlogSchema(data) {
  const baseurl = process.env.NEXT_PUBLIC_SITE_URL;
  const formattedDate = data?.date
    ? format(parseISO(data?.date), "yyyy-MM-dd")
    : "";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data?.title || "",
    alternativeHeadline: data?.title || "",
    publisher: {
      "@type": "Organization",
      name: "Giddh",
      logo: {
        "@type": "ImageObject",
        url: `${baseurl}/img/giddh-logo.svg`,
      },
    },
    url: `${baseurl}/blog/${data?.url}`,
    mainEntityOfPage: `${baseurl}/blog/${data?.url}`,
    datePublished: formattedDate,
    dateModified: formattedDate,
    description: data?.description || "",
  };

  if (data?.coverImage) {
    schema.image = `${baseurl}${data.coverImage}`;
  }

  if (data?.author && data?.author.toLowerCase() !== "giddh") {
    schema.author = { "@type": "Person", name: data.author };
  }

  return schema;
}
