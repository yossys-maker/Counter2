(() => {
    const $counter = document.getElementById("js-counter");
    const $message = document.getElementById("js-message");
    const clickHandler = () => {
        $counter.textContent = 0;
        $message.textContent = "";
  };


    document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();