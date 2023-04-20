import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import "./Quotestyle.css"
function Quote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    // http://api.quotable.io/random
    useEffect(() => {
      fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    },[]);
  let fetchNewQuote = () => {
      fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    }
  return (
    <div className='App'>
        <div className="quote">
            <h2>{quote}</h2>
            <small>-{author}-</small>
        </div><br />
        <center>
            <Button style={{textColor:"#8B0000"}} variant="primary" onClick={fetchNewQuote}>New Quote</Button>
        </center>
    </div>
  )
}
export default Quote