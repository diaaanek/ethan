import "./App.scss";

function App() {
  return (
    <>
      <div class='wrapper'>
        <div class='magic-trick'>
          <div class='rabbit'>
            <div class='ears'>
              <div class='ear'></div>
              <div class='ear'></div>
            </div>
            <div class='head'>
              <div class='face'>
                <div class='eyes'>
                  <div class='eye'></div>
                  <div class='eye'></div>
                </div>
                <div class='nose'></div>
                <div class='mouth'>X</div>
              </div>
            </div>
            <div class='body'>
              <div class='paws'>
                <div class='paw'></div>
                <div class='paw'></div>
              </div>
            </div>
            <div class='feet'>
              <div class='foot-left'></div>
              <div class='foot-right'></div>
            </div>
          </div>
          <div class='hat'>
            <div class='hat-top'></div>
            <div class='hat-body'>
              <div class='hat-border'></div>
            </div>
          </div>

          <div class='text'>
            <h1 class='illusion'>
              show me a <span class='preIllusion'>magic trick</span> already!
            </h1>
            <h1 class='static-text'>hey ethan</h1>
          </div>
          <div class='heart'></div>
        </div>
      </div>
    </>
  );
}

export default App;
