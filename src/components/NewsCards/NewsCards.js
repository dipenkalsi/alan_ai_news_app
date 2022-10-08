import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import { Grow ,Grid, Typography} from '@mui/material'
import logo from '../../assets/logolight2.png'
import './styles.css'

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];
const NewsCards = ({articles,activeArticle})  => {
  if(articles.length===0){
    return(
      <>
      <img src={logo} alt="" className='w-25 mt-1' style={{margin:"0 37vw"}}/>
      <div className='mt-4'>
        <div className="mt-4">.</div>
        <h2 className="text-center display-3 mt-5 mb-0">We strive to become your vision</h2>
{/* //card carousel */}
<div
  id="carouselMultiItemExample"
  className="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
  data-mdb-pause={false}
>
  <div className='mt-4'>.</div>
  <div className="carousel-inner py-4">
    <div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img
                src="https://cdn1.expresscomputer.in/wp-content/uploads/2021/03/24161745/EC_Artificial_Intelligence_AI_750.jpg"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">AI Integrated Technology</h5>
                <p className="card-text text-muted">
                  We use a sophisticated AI system to keep track of user experience and provide you the news adapting to your activity on our platform.
                </p>
                <a href="#!" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://www.fpri.org/wp-content/uploads/2017/01/media-outlets.jpg"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Trusted Sources</h5>
                <p className="card-text text-muted">
                  We try to bring you news from the most beloved and trusted sources of the world so that you can be sure of your facts.
                </p>
                <a href="#!" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://www.techfunnel.com/wp-content/uploads/2020/01/voice-search.jpg"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Interactive Voice Assistant</h5>
                <p className="card-text text-muted">
                  Thanks to Alan AI, we are now able to provide voice AI with our services , improving the user experience. Scroll down to see a list of commands.
                </p>
                <a href="#!" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <img
                src="https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png"
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">Search By Source</h5>
                <p className="card-text text-muted">
                  Ignite provides you the ability to look up news from your favourite sources so that you can know what's going around from your trusted news providers.
                </p>
                <a href="#!" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://img.onmanorama.com/content/dam/mm/en/sports/football/images/2022/10/6/chelse.jpg"
                className="card-img-top"
                alt="Storm Clouds"
              />
              <div className="card-body">
                <h5 className="card-title">Search By Category</h5>
                <p className="card-text text-muted">
                  Ignite provides you the ability to search news about your desired category like sports,technology,entertainment etc... so tht you only see what you want.
                </p>
                <a href="#!" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/04/New-year-new-phone-Top-5-smartphones-to-launch-in-2022-scaled.jpg?fit=2560%2C1440&ssl=1"
                className="card-img-top"
                alt="Hot Air Balloons"
              />
              <div className="card-body">
                <h5 className="card-title">Search By Keyword</h5>
                <p className="card-text text-muted">
                  Wanna know about a specific topic? Don't worry , we got you covered. Ignite provides you the ability to search for news about a particular keyword.
                </p>
                <a href="#!" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card">
              <img
                src="https://searchengineland.com/wp-content/seloads/2015/10/graph-line-trend-analytics-magnifying-glass-ss-1920.jpg"
                className="card-img-top"
                alt="Peaks Against the Starry Sky"
              />
              <div className="card-body">
                <h5 className="card-title">Up To Date</h5>
                <p className="card-text text-muted">
                  We make sure to get you the latest news by staying up to date and adapting to the needs of our users. We know the trends out there because we set 'em ;)
                </p>
                <a href="#!" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <img
                src="https://www.newsawards.co.uk/wp-content/uploads/2019/05/newsawards_2019_winners.jpg"
                className="card-img-top"
                alt="Bridge Over Water"
              />
              <div className="card-body">
                <h5 className="card-title">Winner of the 2022 MPNA</h5>
                <p className="card-text text-muted">
                  All thanks to the hardwork of our team and the love and support of our users. We are proud to serve you and will keep on improving in the future!
                </p>
                <a href="#!" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mumbrella.com.au/wp-content/uploads/2018/08/social-media-facebook-likes-emojis-e1562652024170.jpg"
                className="card-img-top"
                alt="Purbeck Heritage Coast"
              />
              <div className="card-body">
                <h5 className="card-title">Public's Most Beloved</h5>
                <p className="card-text text-muted">
                  And Finally , all our achievements are worthless without the love and support of our userbase. We try our best to bring the best to you and will be doing so in the future aas well.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-center mb-4">
    <button
      className="carousel-control-prev position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>


{/* //partners */}
<div className='mt-4'>.</div>
      <h2 className='text-center my-3 mt-5 display-3'>Our Partners</h2>
      </div>
      <div className="container">

<div id="carouselExampleIndicators" className="carousel slide" data-pause={false}>
  <div className="carousel-inner bg-black">

    <div className="carousel-item active bbc">
      <div className="carousel-caption d-md-block">
        
      </div>
    </div>

    <div className="carousel-item cnn">
      <div className="carousel-caption d-md-block">
       
      </div>
    </div>

    <div className="carousel-item bb">
      <div className="carousel-caption d-md-block">
       
      </div>
    </div>

    <div className="carousel-item sn">
      <div className="carousel-caption d-md-block">
        
      </div>
    </div>
  </div>

  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
<div className="mt-5">`</div>
<h2 className='text-center mt-5 display-3 text-success'>Getting Started</h2>

    <Grow in>
      <Grid style={{padding:'0 5%',width:'100%',margin:'0',display:'flex',alignItems:'center',justifyContent:'center'}} container alignItems="stretch" spacing={3} className="py-4">
        {infoCards.map((infoCard)=>(
          <Grid item xs={12} sm={6} md={6} lg={6} style={{padding:"0",}} className="my-3 px-3" >
              <div style={{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'center',
    width:"100%",
    height:'40vh',
    textAlign:'center',
    padding:'10%',
    borderRadius:'10px',
    color:'whitesmoke',
    fontSize:"0.5rem",
    // borderBottom: '10px solid white',
    backgroundColor:`${infoCard.color}`}} className="py-2">
      <Typography variant="h5">{infoCard.title}</Typography>
      {infoCard.info?(<Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}</strong>
      <br/>
      {infoCard.info}
      </Typography>):null}
          <Typography variant="h6">Try Saying : <br/><i>{infoCard.text}</i></Typography>
              </div>
          </Grid>
        ))}
      </Grid>

    </Grow>
 
    </>
    )
  }
  return (
    <Grow in>
      <Grid style={{padding:'0 5%',width:'100%',margin:'0',display:'flex',alignItems:'center',justifyContent:'center'}} container alignItems="stretch" spacing={3} className="py-4">
      {articles.map((article,i)=>(
        <Grid item xs={12} sm={6} md={4} lg={4} style={{display:'flex',alignItems:'center',justifyContent:'center',padding:"initial"}} className="px-3 ">
        <NewsCard article={article} i={i} activeArticle={activeArticle}/>
        </Grid>
      ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards
