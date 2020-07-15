  function playChords(chord){
    const c = document.querySelector('audio[data-key="65"]');
    const e = document.querySelector('audio[data-key="83"]');
    const b = document.querySelector('audio[data-key="74"]');

    const eb = document.querySelector('audio[data-key="69"]');
    const bb = document.querySelector('audio[data-key="85"]');

    const dH = document.querySelector('audio[data-key="80"]');

    function removeTransition(e) {
      this.classList.remove("playing");
    }

    let keys = []

    let lightKeys = function(keys) {
        keys.forEach(key => {
          let whichKey = document.querySelector('[data-note='+key+']')
          whichKey.classList.add('playing')
          whichKey.addEventListener("transitionend", removeTransition);
      })
    }

    const cma7 = function() {
      c.play()
      e.play()
      b.play()
    }

    const cm7 = function() {
      c.play()
      eb.play()
      bb.play()
    }

    const c7 = function() {
      c.play()
      e.play()
      bb.play()
    }

    const c7H9 = function() {
      c.play()
      e.play()
      bb.play()
      dH.play()
    }

    if (chord == 'cma7') {
      cma7()
      lightKeys(['C','E','B'])
    } else if (chord == 'cm7') {
      cm7()
      lightKeys(['C','Dsharp','Asharp'])
    } else if (chord == 'c7') {
      c7()
      lightKeys(['C','E','Asharp'])
    } else if (chord == 'c7H9') {
      c7H9()
      lightKeys(['C','E','B','Dsharp2'])
    }
  }

const { Path, Point } = paper;

const offset = 10;
const segments = 20;
const strokeWidth = 5;
const strokeColor = 'black';

const canvas = document.querySelector('.squig');
paper.setup(canvas);
const view = paper.view;

const path = new Path();
path.strokeColor = strokeColor;
path.strokeWidth = strokeWidth;
path.strokeCap = 'round';

for (let i = 0; i <= segments; i++) {
  let width = view.size.width - (offset * 1);
  path.add(new Point((i / segments * width + offset), view.size.height / 2));
}

path.onFrame = (e) => {
	for (var i = 0; i <= segments; i++) {
    let height = 10;
    let sinus = Math.sin(e.time * 3 + i);
		path.segments[i].point.y = sinus * height + 25;
    path.smooth({
      type: 'continuous'
    });
	}
}

paper.view.draw();
