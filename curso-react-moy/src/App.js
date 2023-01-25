import './App.css';
import React from 'react';
import wojakSad from './assets/img/wojak-sad.png';
import wojakDumb from './assets/img/wojak-dumb.jpg';
import wojakWither from './assets/img/wojak-wither.jpg';
import wojakPhone from './assets/img/wojak-phone.png';
import html2canvas from 'html2canvas'

const memes = [
  {memeName: 'Wojak Cry', src: wojakSad},
  {memeName: 'Wojak Dumb', src: wojakDumb},
  {memeName: 'Wojak Wither', src: wojakWither},
  {memeName: 'Wojak Phone', src: wojakPhone},
]

function Welcome(props) {
  return <h2>Meme Generator</h2>;
}

class SelectMeme extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      imgSrc: memes[0].src,
      line1: 'Sample text',
      line2: 'Sample text',
    }

    this.changeImageSrc = this.changeImageSrc.bind(this);
    this.onLine1Change = this.onLine1Change.bind(this);
    this.onLine2Change = this.onLine2Change.bind(this);
  }

  onLine1Change(e){
    this.setState(prevState => ({line1: e.target.value}))
  }
  onLine2Change(e){
    this.setState(prevState => ({line2: e.target.value}))
  }

  changeImageSrc(e){
    this.setState(prevState => ({imgSrc: e.target.value}))
  }

  onExport(e){
    html2canvas(document.querySelector("#capture")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    })
  }

  render (){
    return (
      <div className='d-flex flex-column'>
        <label htmlFor="selectMeme">Select your meme</label>
        <select onChange={this.changeImageSrc} id='selectMeme'>
          {
            this.props.memes.map(meme => {
              return <option key={meme.memeName} value={meme.src}>{meme.memeName}</option>
            })
          }
        </select>

        <div className='row mt-2'>
          <input onChange={this.onLine1Change} value={this.state.line1} type="text" name="line-1" placeholder='Line 1'></input>
        </div>
        <div className='row mt-2'>
          <input onChange={this.onLine2Change} value={this.state.line2} type="text" name="line-2" placeholder='Line 2'></input>
        </div>
        <div className='row mt-2'>
          <button type="button" onClick={this.onExport}>Export</button>
        </div>
        <div id="capture" className='meme-img mt-4'>
          <div className='meme-line line-1'>
            <span className='meme-text'>{this.state.line1}</span>
          </div>
          <div className='meme-line line-2'>
            <span className='meme-text'>{this.state.line2}</span>
          </div>
          <img className='meme' src={this.state.imgSrc} alt='Not found'/>
        </div>
      </div>
    ); 
  }; 
}

class App extends React.Component {
  render(){
    return (
      <div className="App bg-primary text-primary p-5">
      <div className="container-fluid">
        <div className='row d-flex justify-content-center text-center'>
          <Welcome name="Juanimen"/>
        </div>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <SelectMeme memes={memes} />
          </div>
        </div>
      </div>
    </div>
    );
  }   
}

export default App;
