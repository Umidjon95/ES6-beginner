const btn = document.getElementById("btn");
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');

btn.addEventListener("click", () => {
    createNotification1()
})
btn.addEventListener("click", () => {
    createNotification2()
})

function createNotification1() {
    const notif = document.createElement("div");
    notif.classList.add('toast');

    notif.innerText = "Oh, yeah. Press quickly again! ))";
    
    container1.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);

}

function createNotification2() {
    const notif = document.createElement("div");
    notif.classList.add('toast');

    notif.innerText = "Oh, yeah. Press quickly again! ))";
    
    container2.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}