window.addEventListener("load", () => {
  const topic = document.querySelectorAll(".topic");
  const progressBG = document.querySelectorAll(".progress-bg");
  const progression = document.querySelectorAll(".progression");
  const description = document.querySelectorAll(".descriptions");
  const img = document.querySelectorAll(".img-container");

  // Temps de l'animation (en ms)
  const timeAnimation = 6000;
  const nbItems = topic.length;
  let pos = 0;

  function showAnim() {
    topic[pos].classList.add("topic-show");
    progressBG[pos].classList.add("progress-bg-show");
    progression[pos].classList.add("in-progress");
    description[pos].classList.add("descr-visible");
    img[pos].classList.add("img-visible");

    setTimeout(() => {
      progressBG[pos].classList.add("progress-bg-end");
      topic[pos].classList.remove("topic-show");

      // Enlève les classes des items après animation (pour éviter les bugs)
      setTimeout(() => {
        progressBG[pos].classList.remove("progress-bg-show", "progress-bg-end");
        progression[pos].classList.remove("in-progress");
        description[pos].classList.remove("descr-visible");
        img[pos].classList.remove("img-visible");

        // Itération de pos, et retour à 0 s'il atteint la fin du tabeleau
        pos = (pos + 1) % nbItems;

        showAnim();
      }, 400); // Temps de l'animation CSS sur le transform 
    }, timeAnimation);
  }
  
  showAnim();
});
