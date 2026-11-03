(() => {
  const $counter = document.getElementById("js-counter");
  const $message = document.getElementById("js-message");

  const updateCounter = (newCount) => {
    $counter.textContent = newCount;

    if (newCount > 0 && newCount % 10 === 0) {
      $message.textContent = "目標達成！" + newCount + " になりました！";
    } else {
      $message.textContent = "";
    }
  };

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    const currentCount = parseInt($counter.textContent, 10);
    if ($targetButton.textContent === "+") {
      updateCounter(currentCount + 1);
    } else {
      updateCounter(Math.max(0, currentCount - 1));
    }
  };

  for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
      document.getElementsByClassName("js-button")[index].addEventListener("click", clickHandler);
  }
})();