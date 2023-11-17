let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #0b94aa;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Soy una estudiante eterna de las ciencias.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
