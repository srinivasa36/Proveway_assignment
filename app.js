const itemWrappers = document.querySelectorAll(".item_wrapper");
const inputClick = document.querySelectorAll(".item_wrapper_individual");
const totalTxtElement = document.getElementById("total_txt");

itemWrappers.forEach((itemWrapper) => {
  itemWrapper.addEventListener("click", (e) => {
    const radioButtonEnable = e.currentTarget.querySelector(
      'input[type="radio"]'
    );
    const enableValue = e.currentTarget.querySelector(".size_clr_section");
    const hideAll = document.querySelectorAll(".size_clr_section");
    const hideBorder = document.querySelectorAll(".item_wrapper");
    const priceElement = e.currentTarget.querySelector("h4");

    if (priceElement) {
      const price = parseFloat(priceElement.textContent.replace("DKK ", ""));
      total = price;
      updateTotalValue();
    }

    hideBorder.forEach((hide) => {
      hide.classList.remove("content_active");
    });

    hideAll.forEach((element) => {
      element.classList.add("section_hide");
    });

    if (radioButtonEnable) {
      radioButtonEnable.checked = true;
    }

    enableValue.classList.remove("section_hide");

    if (e.currentTarget) {
      e.currentTarget.classList.add("content_active");
    }
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

//To update the pricing values
let total = 0;
function updateTotalValue() {
  totalTxtElement.textContent = `Total : DKK ${total.toFixed(2)}`;
}
