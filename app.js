const itemWrappers = document.querySelectorAll(".item_wrapper");
const inputClick = document.querySelectorAll(".item_wrapper_individual");

itemWrappers.forEach((itemWrapper) => {
  itemWrapper.addEventListener("click", (e) => {
    const radioButtonEnable = e.target.querySelector('input[type="radio"]');
    const enableValue = e.target.querySelector(".size_clr_section");
    const hideAll = document.querySelectorAll(".size_clr_section");
    const hideBorder = document.querySelectorAll(".item_wrapper");
    hideAll.forEach((element) => {
      element.classList.add("section_hide");
    });

    hideBorder.forEach((hide) => {
      hide.classList.remove("content_active");
    });

    radioButtonEnable.checked = true;
    enableValue.classList.remove("section_hide");
    itemWrapper.classList.add("content_active");
  });
});

inputClick.forEach((itemWrapper) => {
  itemWrapper.addEventListener("click", (event) => {
    event.stopPropagation();
    const clickedInput = event.target.closest(".item_wrapper");
    const clickEvent = new Event("click");
    clickedInput.dispatchEvent(clickEvent);
  });
});
