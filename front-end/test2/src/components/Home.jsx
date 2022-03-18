import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Minha homepage</h1>
        <Link to='/about'>About</Link> {/* Link faz o papel do componente ancor <a> , sem a necessidade de recarregar a página e ele se integra a lógica do react-router */}
        <Link to='/howto'>How to</Link>
      </div>
    )
  }

}

export default Home;