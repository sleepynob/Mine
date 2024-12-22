import emailjs from 'emailjs-com';


// Initialize EmailJS
emailjs.init("ycPnsEIuZ-S6HXxYA"); // Replace with your EmailJS User ID

// DOM Elements
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// "Yes" Button Click Event
yesBtn.addEventListener("click", () => {
    // Update question and gif
    question.innerHTML = "Yayyyyyy mwah mwah:33";
    gif.src =
        "https://media.giphy.com/media/4N1wOi78ZGzSB6H7vK/giphy.gif?cid=ecf05e47mi4y68ngclzuwxsdeqo8bz54joc2my8ck9v6qyly&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    // Send an email notification
    emailjs
        .send("service_9sf7bmt", "template_ehrh4xr", {
            to_email: "nobpark871@gmail.com", // Replace with your email
            message: "She said yes",
        })
        .then(
            () => {
                console.log("Email sent successfully!");
                alert("Email notification sent!");
            },
            (error) => {
                console.error("Failed to send email:", error);
                alert("Failed to send email.");
            }
        );
});

// "No" Button Hover Event
noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
