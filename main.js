let input = document.querySelector("input");
let btn = document.querySelector("button");
let boxs = document.querySelectorAll(".box");
let element;
btn.onclick =  () => {
    let val = input.value;
    if (val != "") {
        for (let i = 0; i < boxs.length; i++) {
            let flag = true;
            for (let j = 1; j < boxs[i].children.length; j++) {
                if (val == boxs[i].children[j].innerHTML) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                boxs[i].innerHTML += `
                <p draggable="true">${val}</p>
                `;
                break;
            }
        }
        input.value = "";
    }
    dragItem();
}
function dragItem() {
    let items = document.querySelectorAll("p");
    items.forEach(item => {
        item.addEventListener("dragstart", function () {
            this.style.opacity = .5;
            element = this;
        });
        item.addEventListener("dragend", function () {
            this.style.opacity = 1;
        });
        boxs.forEach(box => {
            box.addEventListener("dragover", function () {
                this.style.background = "green";
                this.style.color = "white";
                let flag = true;
                for (let i = 1; i < box.children.length; i++) {
                    if (box.children[i].innerHTML === element.innerHTML) {
                        flag = false;
                        break;
                    };
                };
                if (flag) this.append(element)
            });
            box.addEventListener("dragleave", function () {
                this.style.background = "white";
                this.style.color = "black";
            });
        });
    });
};
