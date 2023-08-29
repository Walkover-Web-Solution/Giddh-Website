// import Date from "./date";
import Link from "next/link";
// import { parseISO } from "date-fns";
import { MdDateRange } from "react-icons/md";
// import Date from "./date";
// import { parseISO } from "date-fns";

export default function PostItem({ post }) {
  // let date = new Date(post.date);
  //   const newdate = format(date, "LLLL d, yyyy")
  /* function calculateReadTime(articleText, wordsPerMinute = 200) {
    // Count the number of words in the article
    const words = articleText.match(/\w+/g);
    const numWords = words ? words.length : 0;
    
    // Calculate reading time in minutes
    const readTimeMinutes = Math.round(numWords / wordsPerMinute);
    
    return readTimeMinutes;
  }    
  const readTime = calculateReadTime(article); */

  // function to formate input date in "APR 30, 2020" formate 
  function dateFormater(date) {
    let getDate = new Date(date.toString())
    console.log("date - ", getDate);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var day = getDate.getDate();
    // get month from 0 to 11
    var month = getDate.getMonth();
    // conver month digit to month name
    month = months[month];
    var year = getDate.getFullYear();

    // show date in two digits
    if (day < 10) {
      day = '0' + day;
    }

    return month + ' ' + day + ', ' + year;
  }

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
    <>
        {/* <Date date={parseISO(post.date)} /> */}
        {/* <img className="blog-bg-Img" src="https://blog.giddh.com/wp-content/uploads/2019/11/giddh-feature-images-370x300.png" height="320" width="auto" /> */}
     <article className={"blog-card " + (post.thumbnail ? " bg-dark" : " bg-light")}>
      <a href={"/blog/" + post.slug}>
        {post.thumbnail !== "" && <img className="blog-bg-Img" src={post.thumbnail} height="320" width="auto" />}
      </a>
        <div className="blog-card__content">
          <div className="blog-card-header">
            {post.category?.map((category, idx) => (
              <a className={getCategoryStyle(category)} href="#" key={idx}>{category}</a>))
            }
          </div>
          <div className="blog-card-body" >
            <h2 className="title c-fs-4">
              <a href={"/blog/" + post.slug}>
              {post.title}              
              </a>              
              </h2>
              { !post.thumbnail && (
              <p className="content">
                  {/* Need Content here  */}
                  Blog content must be show here sdsdjdnsd sdsk ds dshdskhds dkddsd 
              </p>
              )}
          </div>
          <div className="blog-card-footer" >
            <span><MdDateRange /> {dateFormater(post.date)}</span>
          </div>
        </div>
     </article>
    </>
  );
}
