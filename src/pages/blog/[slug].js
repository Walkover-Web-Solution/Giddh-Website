import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import * as fs from "fs";
import { fetchPostContent } from '../../components/lib/posts';
import yaml  from "js-yaml";
import matter from 'gray-matter';
import Head from 'next/head';
import { format } from "date-fns";
import { useRouter } from 'next/router';
// import { SocialList } from '@/components/socialList';
// const components = { Test }

const slugToPostContent = (postContents => {
 console.log(postContents, "post contents")
    let hash = {}
    let fullPath = {}
    postContents.map((data)=>{
      fullPath = data.fullPath
    })
    postContents?.forEach(it => hash[it.slug] = it)
    console.log(hash, "hash");
    return hash;
  })(fetchPostContent());


export default function TestPage({ source , title}) {
    console.log("inside test page", source);

  const router  = useRouter();


  const handleClick = () =>{
    router.push('/blog');
  }
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="wrapper container blog-container">      
      <a href='javascript:void(0)' onClick={handleClick} >Back</a>
      {/* <div className='blog-header mt-4'>
        <div>{author}, {date}</div>        
        <h1>{title}</h1>
        {thumbnailImage !=="" && <img className="" src={thumbnailImage} alt={author} />}
      </div> */}
      <div className="body">
        <MDXRemote {...source} />
      </div>

      <button className="btn btn-dark mt-3" onClick={handleClick} >Back</button>
      <footer>
      
      </footer>
    </div>
    </>
  )
}

export async function getStaticPaths() {
  // const paths = [];
  console.log("get static paths inside");
  const paths = fetchPostContent().map(it => "/blog/" + it.staticPath);
      // paths.push({
      //   params: {
      //     slug: "mastering-the-art-of-effective-communication-unveiling-the-secrets-to-successful-sms-campaigns-for-engaging-audiences"          
      //   },
      // });    
      console.log(paths, "static paths in get static paths");
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(slug) {
    console.log(slug, "slug in get static props");
  const slugData = slug.params.slug;
    const source = fs.readFileSync(slugToPostContent[slugData]?.fullPath, "utf8");
    const matterResult = matter(source, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
        // engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
      },
    });
    // console.log(matterResult, "Matter Result");
    // const thumbnailImage = matterResult?.data?.thumbnail;
    // // const youtube = matterResult?.data?.youtube;
    // const title = matterResult?.data?.title;
    // const author = matterResult?.data?.author;
    const content = matterResult?.content;
    console.log(content, "Content");
    var date = new Date(matterResult?.data?.date);
    date = format(date, "LLLL d, yyyy")
    // const tags = matterResult?.data?.tags;
    // console.log(matterResult?.content,"matterResult?.data?");
    // console.log(content,"content00");
  // MDX text - can be from a local file, database, anywhere
  const mdxSource = await serialize(content)
  console.log(mdxSource, "mdxSource");
  // const mdxSource = await renderToString(content, { scope: matterResult });
  // console.log(mdxSource,"generated");
  return { props: { source: mdxSource} }
// return {props :{source: "hello"}}
}