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

const slugToPostContent = ((postContents) => {
  let hash = {};
  let fullPath = {};
  postContents.map((data) => {
    fullPath = data.fullPath;
  });
  postContents?.forEach((it) => (hash[it.slug] = it));

  return hash;
})(fetchPostContent());

export default function TestPage({
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

        <meta
          property="og:title"
          content={seoTitle ? seoTitle : title}
          key="title"
        />
        <meta
          property="og:description"
          content={seoDescription ? seoDescription : description}
          key="title"
        />

        {scripts &&
          (typeof scripts === "string"
            ? extractScripts(scripts).map((script, idx) => (
                <script
                  key={idx}
                  // Optionally parse type attribute, etc. from script.attrs if needed
                  type={
                    /type=["']([^"']+)["']/.exec(script.attrs)?.[1] || undefined
                  }
                  dangerouslySetInnerHTML={{ __html: script.content }}
                />
              ))
            : scripts)}
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
            <ul className="blog-page-tags d-flex gap-3 ps-0 mb-1">
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

export async function getStaticPaths() {
  const paths = fetchPostContent().map((it) => "/blog/" + it.staticPath);

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(slug) {
  const slugData = slug.params.slug;
  const source = fs.readFileSync(slugToPostContent[slugData]?.fullPath, "utf8");
  const matterResult = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  const title = matterResult?.data?.title;
  const seoTitle = matterResult?.data?.seoTitle;
  const seoDescription = matterResult?.data?.seoDescription;
  const seoKeywords = matterResult?.data?.seoKeywords;
  const author = matterResult?.data?.author;
  const description = matterResult?.data?.description;
  const content = matterResult?.content;
  var date = new Date(matterResult?.data?.date);
  date = format(date, "LLLL d, yyyy");
  const tags = matterResult?.data?.tag;
  const html = matterResult?.data?.html;
  const scripts = matterResult?.data?.scripts;
  let htmlContent = null;
  if (html) {
    htmlContent = require("fs").readFileSync(
      `src/data/htmlblogs/${html}.html`,
      "utf8"
    );
  }
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      date: date || "",
      title: title || "",
      author: author || "",
      tags: tags || "",
      description: description || "",
      seoTitle: seoTitle || "",
      seoKeywords: seoKeywords || "",
      seoDescription: seoDescription || "",
      html: htmlContent || "",
      scripts: scripts || "",
    },
  };
}
