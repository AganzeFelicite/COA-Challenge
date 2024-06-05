document.addEventListener("DOMContentLoaded", function () {
  const boxElements = document.querySelectorAll(".box");

  boxElements.forEach(function (box) {
    const knowMoreElement = box.querySelector(".knowmore");

    box.addEventListener("mouseenter", function () {
      knowMoreElement.style.display = "block";
      box.classList.add("blurred");
    });

    box.addEventListener("mouseleave", function () {
      knowMoreElement.style.display = "none";
      box.classList.remove("blurred");
    });
  });
});
