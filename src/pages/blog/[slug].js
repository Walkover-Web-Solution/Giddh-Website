import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import * as fs from "fs";
import { fetchPostContent } from "../../components/blogs/lib/posts";
import yaml from "js-yaml";
import matter from "gray-matter";
import Head from "next/head";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { getTag } from "@/components/blogs/lib/tags";
import TagButton from "@/components/blogs/tags/tagButton";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const component = { ReactPlayer };
import { useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useCallback } from "react";
import getBlogSchema from "@/utils/getBlogSchema";

export default function BlogPage({
  source,
  title,
  date,
  author,
  tags,
  description,
  seoTitle,
  seoDescription,
  seoKeywords,
  html,
  scripts,
  blogSchema,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let pageNo = searchParams.get("page");
  let tagName = searchParams.get("tag");

  const navigateToPreviousPage = useCallback(
    (event) => {
      event.preventDefault();
      if (window.history.length > 2) {
        router.back();
      } else if (window.history.length > 1) {
        router.push("/blog");
      } else {
        const basePath = tagName ? `/blog/tags/${tagName}` : "/blog";
        const pagePath =
          pageNo > 1 ? (tagName ? `/${pageNo}` : `/page/${pageNo}`) : "";
        router.push(basePath + pagePath);
      }
    },
    [router, tagName, pageNo]
  );

  function extractScripts(scriptsString) {
    const regex = /<script([^>]*)>([\s\S]*?)<\/script>/g;
    let match;
    const scripts = [];
    while ((match = regex.exec(scriptsString)) !== null) {
      scripts.push({
        attrs: match[1],
        content: match[2],
      });
    }
    return scripts;
  }

  return (
    <>
      <Head>
        {(seoTitle || title) && <title>{seoTitle ? seoTitle : title}</title>}

        {(seoDescription || description) && (
          <meta
            name="description"
            content={seoDescription ? seoDescription : description}
          ></meta>
        )}

        {seoKeywords && <meta name="keywords" content={seoKeywords}></meta>}

        {(seoTitle || title) && (
          <meta property="og:title" content={seoTitle ? seoTitle : title} />
        )}
        {(seoDescription || description) && (
          <meta
            property="og:description"
            content={seoDescription ? seoDescription : description}
          />
        )}

        {scripts &&
          typeof scripts === "string" &&
          extractScripts(scripts).map((script, idx) => (
            <script
              key={idx}
              type={
                /type=["']([^"']+)["']/.exec(script.attrs)?.[1] || undefined
              }
              dangerouslySetInnerHTML={{ __html: script.content }}
            />
          ))}

        {blogSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
          />
        )}
      </Head>
      <div className="wrapper container blog-container">
        <a
          className="mb-3 d-inline-block btn blog-container__back-btn"
          href="#"
          onClick={(event) => navigateToPreviousPage(event)}
        >
          <MdKeyboardArrowLeft /> Back
        </a>
        <div className="w-100 d-flex align-items-end justify-content-end">
          {author}, {date}
        </div>
        {html ? (
          <div
            dangerouslySetInnerHTML={html ? { __html: html } : undefined}
          ></div>
        ) : (
          <>
            {" "}
            <div className="blog-header mt-4">
              <h1>{title}</h1>
            </div>
            <div className="body">
              <MDXRemote {...source} components={component} />
            </div>
          </>
        )}

        <footer className="pt-3">
          <div className="blog-card-tags">
            <ul className="blog-page-tags d-flex gap-3 ps-0 mb-1 flex-wrap">
              {tags !== "" &&
                tags?.map((it, i) => (
                  <li key={i}>
                    <TagButton tag={getTag(it)} />
                  </li>
                ))}
            </ul>
          </div>
          <button
            className="btn blog-container__back-btn mt-3"
            onClick={(event) => navigateToPreviousPage(event)}
          >
            <MdKeyboardArrowLeft /> Back
          </button>
        </footer>
      </div>
    </>
  );
}

const slugToPostContent = (() => {
  const postContents = fetchPostContent();

  const map = {};

  postContents.forEach((post) => {
    map[post.slug] = {
      slug: post.slug,
      fullPath: post.fullPath,
      staticPath: post.staticPath,
      ...post,
    };
  });

  return map;
})();

export async function getStaticPaths() {
  const posts = fetchPostContent();

  const paths = posts.map((post) => ({
    params: { slug: post.staticPath },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("Debug - params:", params);
  const slug = params.slug;

  // HARD CHECK: Fail the build if slug is missing
  if (!slugToPostContent[slug]) {
    throw new Error(`MDX file not found for slug: ${slug}`);
  }

  const filePath = slugToPostContent[slug].fullPath;

  // Read MDX source
  const raw = fs.readFileSync(filePath, "utf8");

  // Parse frontmatter
  const matterResult = matter(raw, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  const data = matterResult.data;

  // ❗ FIX: Do NOT convert missing fields into empty strings.
  const title = data.title ?? null;
  const seoTitle = data.seoTitle ?? null;
  const seoDescription = data.seoDescription ?? null;
  const seoKeywords = data.seoKeywords ?? null;
  const description = data.description ?? null;
  const author = data.author ?? null;
  const tags = data.tag ?? [];
  const scripts = data.scripts ?? null;

  // Date formatting
  const date = data.date ? format(new Date(data.date), "LLLL d, yyyy") : null;

  // HTML override
  let htmlContent = null;
  if (data.html) {
    htmlContent = fs.readFileSync(
      `src/data/htmlblogs/${data.html}.html`,
      "utf8"
    );
  }

  // Blog schema
  const blogSchema = getBlogSchema({
    data: {
      noSchema: data.noSchema,
      title,
      description,
      author,
      date: data.date,
      url: data.slug,
      coverImage: data.coverImage,
    },
  });

  const mdxSource = await serialize(matterResult.content);

  return {
    props: {
      source: mdxSource,
      title,
      seoTitle,
      description,
      seoDescription,
      seoKeywords,
      author,
      date,
      tags,
      html: htmlContent,
      scripts,
      blogSchema,
    },
  };
}
