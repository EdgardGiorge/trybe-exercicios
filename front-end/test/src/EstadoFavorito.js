import React, {Component} from "react"


class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
        <textarea 
          name="estadoFavorito" 
          value={value} /* recebeu através de uma prop no filho */
          onChange={handleChange}  /* ,receber esta prop no filho, dentro do onChange (this.props.handleChange) *//>
      </label>
    )
  }
}

export default EstadoFavorito