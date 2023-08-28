// import Date from "./date";
import Link from "next/link";
// import { parseISO } from "date-fns";
import { MdDateRange } from "react-icons/md";



export default function PostItem({ post }) { 
  /* function calculateReadTime(articleText, wordsPerMinute = 200) {
    // Count the number of words in the article
    const words = articleText.match(/\w+/g);
    const numWords = words ? words.length : 0;
    
    // Calculate reading time in minutes
    const readTimeMinutes = Math.round(numWords / wordsPerMinute);
    
    return readTimeMinutes;
  }    
  const readTime = calculateReadTime(article); */
  console.log("Post",post)
  return (      
    <a className="blog-card" href={"/blog/" + post.slug}>      
        {/* <Date date={parseISO(post.date)} /> */}
        <img className="blog-bg-Img bg-dark--img" src="https://blog.giddh.com/wp-content/uploads/2019/11/giddh-feature-images-370x300.png" height="320" width="auto" />
        <div className="blog-card__content">
          <div className="blog-card-header">
          {post.category?.map((category, idx) => (
                <a href="#" key={idx}>{category}</a>))
            }
          </div>
          <div className="blog-card-body" >
            
        <div className="title">{post.title}</div>
            </div>
            <div className="blog-card-footer" >
              <span><MdDateRange /> October 9, 2020</span>
            </div>
        </div>
    </a>
  );
}
