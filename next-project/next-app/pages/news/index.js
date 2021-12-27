import { Fragment } from "react";
import Link from 'next/link'
const NewsPage = () => {
        return(
        <Fragment>
         <h1>news page</h1>
         <ul>
           <li><Link href='news/html'>html</Link></li>
           <li><Link href='news/css'>css</Link></li>
         </ul>
         </Fragment>);
  }
   export default NewsPage;