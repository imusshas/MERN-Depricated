const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);

    if (button.id === event.target.id) {
      body.style.backgroundColor = event.target.id;
    }


    // switch (button.id) {
    //   case "grey":
    //     body.style.backgroundColor = "grey";
    //     break;
    //   case "white":
    //     body.style.backgroundColor = event.target.id;
    //     break;
    //   case "blue":
    //     body.style.backgroundColor = "blue";
    //     break;
    //   case "yellow":
    //     body.style.backgroundColor = "yellow";
    //     break;
    //   default:
    //     break;
    // }
  });
});