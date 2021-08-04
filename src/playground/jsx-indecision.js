console.log("App.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Helping you make decisions you can't",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.entered.value;

  if (option) {
    app.options.push(option)
    e.target.elements.entered.value = ""
    render()
  }
}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const appRoot = document.getElementById('app')

function render() {
  const template = (
    <div>
      <h2>{app.title}</h2>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p>{"Here are your options: "}</p> : <p>No options</p> }
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="entered" />
        <button>Add Option</button>
      </form>
    </div> 
    );

  ReactDOM.render(template, appRoot)
}

render()

