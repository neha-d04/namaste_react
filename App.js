const heading = React.createElement('div', { id: "parent" },
  [
    React.createElement('div', { id: "div1" }, [
      React.createElement('h1', { id: "heading" }, "Hello World from Div1!!"),
      React.createElement('h1', { id: "heading" }, "Hello World from Div1!!"),
      React.createElement('h1', { id: "heading" }, "Hello World from Div1!!")
    ]),
    React.createElement('div', { id: "div2" }, [
      React.createElement('h1', { id: "heading" }, "Hello World from Div2!!"),
      React.createElement('h1', { id: "heading" }, "Hello World from Div2!!"),
      React.createElement('h1', { id: "heading" }, "Hello World from Div2!!")
    ])
  ])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)