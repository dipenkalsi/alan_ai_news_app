import React,{useState,useEffect,createRef} from 'react'
import './NewsCardStyle.css'
import { Card,CardActionArea,CardContent,CardMedia,Button,Typography, CardActions } from '@mui/material'
const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},activeArticle,i}) => {

const [elRefs, setElRefs] = useState([]);

 //Function to scroll down to the reference of a card
const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

 //runs on the mounting of newscard component, creates a reference for the card that alan is currently reading do that we can scroll down to that card.
useEffect(() => {
  window.scroll(0, 0);

  setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
}, []);

 //runs every time alan starts reading a news article to update the position of the screen wrt alan's voice.
useEffect(() => {
  if (i === activeArticle && elRefs[activeArticle]) {
    scrollToRef(elRefs[activeArticle]);
  }
}, [i, activeArticle, elRefs]);
 //the above useEffect gets called everytime one of i,activeArticle or elRefs change.
    return (
        <div>
        <Card
        ref={elRefs[i]}
         style={{display: 'flex',
    flexDirection: 'column',
    margin:" 5px 0",
    // color:"purple",
    // height:"5",
    backgroundColor:`${activeArticle===i?"rgba(55, 26, 105, 1)":""}`,
    color:`${activeArticle===i?"white":"purple"}`,
    // borderBottom:`${activeArticle===i?"10px solid #22289a":""}`,
    justifyContent: 'space-between',
    }} className={`my-2 ${activeArticle===i?"active":""}`}>
            <CardActionArea href={url} target="_blank" style={{height:"470px"}}>
                <CardMedia style={{height:'200px',}} image={urlToImage || 'https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'}/>
                <div style={{ display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',}}>
                    <Typography variant ='body2' color="textSecondary" component="h2" style={{color:`${activeArticle===i?"white":"purple"}`,}}>
                     {(new Date(publishedAt)).toDateString()}
                    </Typography>
                    <Typography variant ='body2' color="textSecondary" component="h2" style={{color:`${activeArticle===i?"white":"purple"}`,}}>
                    {source.name}
                    </Typography>
                </div>
                <Typography gutterBottom component="h5" style={{padding: '0 16px',fontFamily:"'Montserrat', sans-serif",fontWeight:'bold',color:`${activeArticle===i?"white":"purple"}`}} >{title.split("").slice(0,100)}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{color:`${activeArticle===i?"white":"purple"}`,}}>{description.split("").slice(0,200)}...</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ padding: '5px 16px 5px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'}}>
                <Button size="small" color='primary' href={url} target="_blank" style={{color:`${activeArticle===i?"white":"purple"}`,}}>Learn More</Button>
                <Typography varient="h5" color="textSecondary" style={{color:`${activeArticle===i?"white":"purple"}`,}}>{i+1}</Typography>
            </CardActions>
        </Card>
        </div>
    )
}

export default NewsCard
