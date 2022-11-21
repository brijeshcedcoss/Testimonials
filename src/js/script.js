// add testimonial form
var form = document.getElementById("add_testimonial_form");
// commnets array
var commnets = [
  {
    username: "John",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et laudantium natus enim, laboriosam totam explicabo officia reprehenderit recusandae a officiis consectetur ab omnis architecto soluta, sunt eaque incidunt repellat.",
    status: "active",
  },
];

// call display function
display(commnets);

// add comments in array
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = event.currentTarget.name.value;
  let comment = event.currentTarget.content.value;
  //   by default all values will inactive
  commnets.forEach((element) => {
    element.status = "inactive";
  });
  //   only that comment will active which added
  let comment_obj = {
    username: username,
    comment: comment,
    status: "active",
  };
  //   add comment in array
  commnets.push(comment_obj);
  //   call display function
  display(commnets);
});

// on click next button
function next() {
  // get total elements of comments
  let total_elements = document.querySelectorAll(".comments").length - 1;
  let get_active_index = 0;
  let comment_element_array = document.querySelectorAll(".comments");
  //   loop all commmets element
  comment_element_array.forEach((element, index) => {
    // check active class index number and store in get_active_index variable
    if (element.classList.contains("active")) {
      // if last index then 0 else +1
      if (index == total_elements) {
        get_active_index = 0;
      } else {
        get_active_index = index + 1;
      }
      //   remove and add classes in current element
      element.classList.add("inactive");
      element.classList.remove("active");
    }
  });
  //   remove and add classes in next element
  comment_element_array[get_active_index].classList.remove("inactive");
  comment_element_array[get_active_index].classList.add("active");
}

function prev() {
  // get total elements of comments
  let total_elements = document.querySelectorAll(".comments").length - 1;
  let get_active_index = 0;
  let comment_element_array = document.querySelectorAll(".comments");
  //   loop all commmets element
  comment_element_array.forEach((element, index) => {
    // check active class index number and store in get_active_index variable
    if (element.classList.contains("active")) {
      // if first index then store last index else - 1
      if (index == 0) {
        get_active_index = total_elements;
      } else {
        get_active_index = index - 1;
      }
      //   remove and add classes in current element
      element.classList.add("inactive");
      element.classList.remove("active");
    }
  });
  //   remove and add classes in prev element
  comment_element_array[get_active_index].classList.remove("inactive");
  comment_element_array[get_active_index].classList.add("active");
}

// function for display testimonials
function display(commnets) {
  let data = "";
  //   loop comments
  commnets.forEach((element) => {
    data += `<div class="comments ${element.status}" >
        <img class="profile_img" src="./img/no-profile.gif" alt="" />
        <p class="name">${element.username}</p>
        <p class="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        <p class="comment">
        ${element.comment}
        </p>
      </div>`;
  });
  //   show testimonials
  document.getElementById("testimonial").innerHTML = data;
}
