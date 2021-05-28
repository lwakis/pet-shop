if (window.NodeList && !NodeList.prototype.forEach) 
    NodeList.prototype.forEach = Array.prototype.forEach;


const cats = [
    {
        name: "Кот полосатый",
        age: 3,
        color: "Коричневый",
        paws: 4,
        sold: false,
        price: 30000,
        photo: "../assets/photo/cat1.png"
    },
    {
        name: "Кот полосатый",
        age: 1,
        color: "Коричневый",
        paws: 4,
        sold: true,
        price: 40000,
        photo: "../assets/photo/cat2.png"
    },
    {
        name: "Кот полосатый",
        age: 2,
        color: "Коричневый ",
        paws: 4,
        sold: false,
        price: 20000,
        photo: "../assets/photo/cat3.png"
    },
    {
        name: "Кот полосатый",
        age: 2,
        color: "Коричневый",
        paws: 4,
        sold: false,
        price: 25000,
        photo: "../assets/photo/cat1.png"
    },
    {
        name: "Кот полосатый",
        age: 4,
        color: "Коричневый",
        paws: 4,
        sold: false,
        price: 30000,
        photo: "../assets/photo/cat3.png"
    },
    {
        name: "Кот полосатый",
        age: 2,
        color: "Коричневый",
        paws: 4,
        sold: true,
        price: 10000,
        photo: "../assets/photo/cat2.png"
    }
]

window.onscroll = function() {
    let btn = document.querySelector('.btn__up');
    if (window.scrollY > 252 && document.documentElement.clientWidth > 768) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
    btn.onclick = function() {
        window.scrollTo(pageXOffset, 0);
    }

    window.addEventListener('scroll', function() {
        btn.hidden = (pageYOffset < document.documentElement.clientHeight);
    });
}


document.querySelector('.sorting__price').addEventListener('change', function() {
    const sorting = document.querySelector('.sorting__price').value;
    if (sorting == "Возрастанию") {
        cats.sort(function(prev, next) { next.price - prev.price });
    } else {
        cats.sort(function(prev, next) { prev.price - next.price });
    }
    catsDraw(cats);
})

document.querySelector('.sorting__age').addEventListener('change', function() {
    const sorting = document.querySelector('.sorting__age').value;
    if (sorting == "Возрастанию") {
        cats.sort(function(prev, next) { next.age - prev.age });
    } else {
        cats.sort(function(prev, next) { prev.age - next.age });
    }
    catsDraw(cats);
})

function catsDraw(cats) {
    let cards = '';
    cats.forEach(function(cat) {
        cards+=`
            <div class="card">
                <img src=${cat.photo}> <br>
                <h1 class="card__name">${cat.name}</h1> 
                <div class="card__info">
                    <div>
                        <hr class="card__info-line" width="5" size="27">
                        <span>${cat.color}<br> окрас</span>
                    </div>
                    <div>
                        <h2 class="card__info-age">${cat.age} мес.</h2>
                        <span>Возраст</span>
                    </div>
                    <div>
                        <h2 class="card__info-paws">${cat.paws}</h2>
                        <span>Кол-во лап</span>
                    </div>
                </div>
                <h1 class="card__price">${cat.price} руб.</h1>
                ${cat.sold 
                    ? '<button style="background-color: #000; cursor: default;">Продан</button>'
                    : '<button>Купить</button>' 
                }
            </div>
        `
    })
    document.querySelector('.cards').innerHTML = cards;
}

catsDraw(cats);