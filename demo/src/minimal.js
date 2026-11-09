import { loadSoundfont, startPresetNote } from '../../src';

const sf2 = await loadSoundfont(
  // './soundfonts/Earthbound_NEW.sf2'
  './soundfonts/Layered_Grand_2026.sf2'
)

console.log(sf2)

let ctx = null

const app = document.getElementById("app")

const vels = [20, 40, 60, 80, 100, 120]

vels.forEach(v => {
  const btn = document.createElement('button')
  btn.textContent = v
  btn.addEventListener('click', () => {
    if (ctx === null) {
      ctx = new AudioContext()
    }
    let time = .1;
    let note = 60;
    let velocity = v;
    const stopHandle = startPresetNote(ctx, sf2.presets[0], note, velocity, time)
    setTimeout(() => {
      stopHandle()
    }, 2000)
  });
  app.appendChild(btn)
})
