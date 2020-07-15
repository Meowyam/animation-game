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
      drawcma7()
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
const rad = 15;

const canvas = document.querySelector('.squig');
paper.setup(canvas);
const view = paper.view;

const width = view.size.width

const path1 = new Path.Line(new Point(100,50), new Point((width - 100), 50));
const path2 = new Path.Line(new Point(100,80), new Point((width - 100), 80));
const path3 = new Path.Line(new Point(100,110), new Point((width - 100), 110));
const path4 = new Path.Line(new Point(100,140), new Point((width - 100), 140));
const path5 = new Path.Line(new Point(100,170), new Point((width - 100), 170));

const paths = [path1, path2, path3, path4, path5]

paths.forEach(p => {
  p.strokeColor = strokeColor;
  p.strokeWidth = strokeWidth;
  p.strokeCap = 'round';
})

let notes = []

let fillNotes = function(notes) {
  notes.forEach(n => {
    n.fillColor = strokeColor;
  })
}

const cNote = new Path.Circle({
  center: [(width/2), 200],
  radius: rad,
})
const cNoteLine = new Path.Line({
  from: [(width/2 - 20), 200],
  to: [(width/2 + 20), 200],
})

const eNote = new Path.Circle({
  center: [(width/2), 170],
  radius: rad,
})

const bNote = new Path.Circle({
  center: [(width/2), 110],
  radius: rad,
})

const drawcma7 = function() {
  fillNotes([cNote, eNote, bNote])
  cNoteLine.strokeColor = strokeColor
  cNoteLine.strokeWidth = strokeWidth
}

paper.view.draw();
