import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import * as fs from "fs";
import { fetchPostContent } from '../../components/lib/posts';
import yaml  from "js-yaml";
import matter from 'gray-matter';
import Head from 'next/head';
// import { format } from "date-fns";
import { useRouter } from 'next/router';
// import { SocialList } from '@/components/socialList';
// const components = { Test }
import { MdKeyboardArrowLeft } from "react-icons/md";

const slugToPostContent = (postContents => {

    let hash = {}
    let fullPath = {}
    postContents.map((data)=>{
      fullPath = data.fullPath
    })
    postContents?.forEach(it => hash[it.slug] = it)
  
    return hash;
  })(fetchPostContent());


export default function TestPage({ source , title, date, author}) {


  const router  = useRouter();


  const handleClick = () =>{
    router.back();
    // router.push('/blog');
  }
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="wrapper container blog-container">      
      <a className="mb-3 d-inline-block btn blog-container__back-btn" href='javascript:void(0)' onClick={handleClick} ><MdKeyboardArrowLeft /> Back</a>
      <div className='blog-header mt-4'>
        <div>{author}, {date}</div>        
        <h1>{title}</h1>
        {/* {thumbnailImage !=="" && <img className="" src={thumbnailImage} alt={author} />} */}
      </div>
      <div className="body">
        <MDXRemote {...source} />
      </div>

      <button className="btn blog-container__back-btn mt-3" onClick={handleClick} ><MdKeyboardArrowLeft /> Back</button>
      <footer>
      
      </footer>
    </div>
    </>
  )
}

export async function getStaticPaths() {
  // const paths = [];

  const paths = fetchPostContent().map(it => "/blog/" + it.staticPath);
      // paths.push({
      //   params: {
      //     slug: "mastering-the-art-of-effective-communication-unveiling-the-secrets-to-successful-sms-campaigns-for-engaging-audiences"          
      //   },
      // });    
 
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
        // engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
      },
    });
    // const thumbnailImage = matterResult?.data?.thumbnail;
    // // const youtube = matterResult?.data?.youtube;
    const title = matterResult?.data?.title;
    const author = matterResult?.data?.author;
    const content = matterResult?.content;
   
    // var date = new Date(matterResult?.data?.date);
    // date = format(date, "LLLL d, yyyy")
    // const tags = matterResult?.data?.tags;
  const mdxSource = await serialize(content)

  return { props: { source: mdxSource, date: date ,title: title, author: author} }
// return {props :{source: "hello"}}
}