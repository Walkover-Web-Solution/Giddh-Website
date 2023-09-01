import { MdDateRange } from "react-icons/md";
import Date from "./date";
import { parseISO } from "date-fns";

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
  //  articleText end code

  // function to get className for respective category
  function getCategoryStyle(category) {
    switch (category) {
      case "business accounting": return " bg-business"
      case "accounting software": return " bg-accounting"
      case "invoicing software": return " bg-invoicing"
      case "cloud accounting": return " bg-cloud"
      case "gst software": return " bg-gst"
      case "inventory software": return " bg-inventory"
      case "General": return "bg-general  "
      default: return "bg-general"
    }
  }
  return (
    
     <a href={"/blog/" + post.slug} className={"blog-card " + (post.thumbnail ? " bg-dark" : " bg-light")} style={{backgroundImage: post.thumbnail ? 'url("'+post.thumbnail+'")' : "none"}}>
        <div className="blog-card__content">
          <div className="blog-card-header">
            {post.category?.map((category, idx) => (
              <span className={getCategoryStyle(category)} key={idx}>{category}</span>))
            }
          </div>
          <div className="blog-card-body" >
            <h2 className="title c-fs-4">
              {post.title}              
              </h2>
             
              <p className="content">
               {post?.description}
              </p>  
           
          </div>
          <div className="blog-card-footer" >
            <span><MdDateRange /> <Date date={parseISO(post.date)} /></span>
          </div>
        </div>
     </a>
  );
}
