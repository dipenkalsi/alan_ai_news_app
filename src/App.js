import React,{useState,useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logolight from './assets/logolight2.png'
import wordsToNumbers from 'words-to-numbers'
import Navbar from 'react-bootstrap/Navbar';
const alanKey='65dd3cb7c294df40d70552aeca9033062e956eca572e1d8b807a3e2338fdd0dc/stage';
function  App(){
  const [newsArticles,setNewsArticles]=useState([]);
  const [activeArticle,setActiveArticle]=useState(-1);
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles,number})=>{
        if(command==='newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);
        }
        else if(command==='highlight'){
          setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
        }
        else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn.play(`Sorry there's no article number ${number} on this page`);
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn.play(`article number ${parsedNumber} coming right up...`);
          } else {
            alanBtn.play(`Sorry there's no article number ${number} on this page`);
          }
        }
      }
    })
  },[]) 
  return (
    <>
    <Navbar bg="light" className="fixed-top py-0" expand="lg">
      <Container className="my-0 ">
        <Navbar.Brand href="/"><img src={logolight} alt="" style={{width:"80px",marginLeft:"8px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="dark"/>
        <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-end">
          <Nav className=" mx-0" style={{fontWeight:"500",fontSize:"1rem"}}>
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#link" className="mx-2">General</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Health</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Sports</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Bussiness</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Science</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Entertainment</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  <div style={{marginTop:"50px"}}>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>

<footer className="text-center text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span className="lead">Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
           <img src={logolight} style={{width:"120px"}}/>
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
    © 2021 Copyright :
    <a className="text-reset fw-bold" href="/"> Ignite inc.</a>
  </div>
</footer>
    </>
  );

}

export default App;
