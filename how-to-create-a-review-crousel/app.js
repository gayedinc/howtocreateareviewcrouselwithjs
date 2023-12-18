//local reviews data
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.1.1276046557.1702823450&semt=sph",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quis! Vero aspernatur libero nisi modi laboriosam quaerat nulla architecto neque!",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=996&t=st=1702826004~exp=1702826604~hmac=7c99f2c688f9995a2db1a11fa7b6253bda9000cbd3baabcb82421311e108be33",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quis! Vero aspernatur libero nisi modi laboriosam quaerat nulla architecto neque!",
    },
    {
        id: 3,
        name: "Peter Johns",
        job: "Intern",
        img: "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?size=626&ext=jpg&ga=GA1.1.1276046557.1702823450&semt=sph",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quis! Vero aspernatur libero nisi modi laboriosam quaerat nulla architecto neque!",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.1.1276046557.1702823450&semt=sph",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quis! Vero aspernatur libero nisi modi laboriosam quaerat nulla architecto neque!",
    }
]

// select items 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load intial item 

window.addEventListener('DOMContentLoaded',function() { // Tarayıcı penceresi yüklendiğinde yapılacak işlemler
    showPerson(currentItem);
});

// show person based on item 

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent =item.text;
}

// show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person


randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

