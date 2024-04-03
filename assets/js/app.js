const addBtn = document.querySelector("#add");
const save = document.querySelector("#save");
const counter = document.querySelector("#counter");
const store = document.querySelector("#store");

addBtn.addEventListener("click", function () {
    counter.innerHTML = +counter.innerHTML + 1;
});

save.addEventListener("click", function () {
    if (counter.innerHTML != 0) {
        if (store.innerHTML == 0) {
            store.innerHTML = counter.innerHTML
        }
        else {
            store.innerHTML += ", " + counter.innerHTML
        }
    }
    counter.innerHTML = 0;
})