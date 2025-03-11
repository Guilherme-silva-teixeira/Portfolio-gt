import './App.css'
import './wallpaper.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <div id="header">
            <div id="logo">
                <h3>Portfolio</h3>
            </div>
            <div id="menu">
                <a href="#">teste</a>
                <a href="#">teste</a>
                <a href="#">teste</a>
            </div>
        </div>
    </header>
    <section id="main_sec">
        <div id="firstPage">
            <div id="left">
                <div id="photo">
                  <img src="wallpaper.jpg" alt=""  />
                </div>
            </div>
            <div id="right" draggable="false">
                <h1 draggable="false">Seu novo Dev Fullstack ;<span>)</span></h1>
                <div id="title" draggable="false">
                    <p draggable="false">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dolorum dolore sequi, fugiat sit cumque quaerat numquam reiciendis. Quae minima et quas nulla enim aliquid soluta quam eaque harum aperiam.</p>
                </div>
            </div>
        </div>
        <div id="scroll">
            <span id="scrollToBottom">
                {">"}
            </span>
        </div>

    </section>
    <footer>
    </footer>
      </div>
  )
}

export default App
