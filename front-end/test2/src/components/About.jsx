import React, { Component } from "react";
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
        <span>Conteúdo descrito dentro do ABOUT</span>
        <Link to='/'>Voltar à Home</Link>
      </div>
    )
  }

}

export default About;