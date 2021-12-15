import classes from './CommentItem.module.css'
const  CommentItem= (props)=>{
    return(
    <li className={classes['comment-list']}>
      <p className={classes['comment-list__text']}>{props.text}</p>
    </li>
    ) 
}  
export default  CommentItem