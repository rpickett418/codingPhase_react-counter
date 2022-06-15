import React, {Component} from 'react';
// import ReactDOM from 'react-dom';



export default class Button extends Component {
  constructor(){
    super();
    this.state = {
      hover: false
    }
  }
  toggleHover = () => {
     this.setState({
      hover: !this.state.hover
     })
  }
  render(){
    const styleButton = {
      color: this.props.fontColor,
      width: '50%',
      display: 'flex',
      border: '3px solid black',
      padding: '20px',
      fontSize: '2rem',
      fontWeight: '900',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all .6s ease-in-out',
      background: this.state.hover ? 
      this.props.hoverColor :
      this.props.backgroundColor
    };
    
    
    return (
    <div className={`button ${this.props.action}`} style={styleButton} onMouseEnter={this.toggleHover}
    onMouseLeave={this.toggleHover}
    onClick={this.props.trigger}
    > 
    {this.props.children}
    </div>
    );
  }
}


