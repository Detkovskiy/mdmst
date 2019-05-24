window.onload = function() {

  const startCalc  = () => {
    const width = document.body.clientWidth;
    if (width >= 1024) {
      const button  = document.querySelector(`.popup-calc`);
      button.classList.add(`openButton`);
      button.addEventListener(`click`, () => {
        const popup  = document.querySelector(`.popup-block`);
        popup.classList.add(`showPopup`);
        const overlay = document.querySelector(`.overlay_popup`);
        overlay.classList.add(`openButton`);
        overlay.addEventListener(`click`, () => {
          popup.classList.remove(`showPopup`);
          overlay.classList.remove(`openButton`);
        });

        document.addEventListener(`keydown`, (evt) => {
          if (evt.keyCode === 27) {
            popup.classList.remove(`showPopup`);
            overlay.classList.remove(`openButton`);
          }
        });
      })
    }
  };

  setTimeout(startCalc, 3000);
};
