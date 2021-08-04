class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = {
      visibility: false,
    }
  }

  toggleVisibility () {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// let details = ""
// let visibility = false;
// const showDetails = () => {
//   if(details) {
//     details = ""
//     visibility = false
//   } else {
//     details = "These are the details you need to see."
//     visibility = true
//   }
//   render()
// }

// const app = document.getElementById('app')

// const render = () => {
//   const homepage = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>{visibility ? "Hide Details" : "Show Details"}</button>
//       <p>{details}</p>
//     </div>
//   )
//   ReactDOM.render(homepage, app)
// }

// render()


