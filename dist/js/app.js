document.addEventListener('DOMContentLoaded', () =>{

    const apiLink = 'https://areactdeveloper.github.io/FronedEnd-mentor-timetracking-app/data.json'
    const buttons = document.querySelectorAll('.nav-btn')
    var currentTimeFrame = 'daily'

    //this function would look huge takes up so many line thanks
    //to arrow functions it doesnt
    const fetchData = ()=>{
    fetch(apiLink)//the fetch fun i guess i could use axious as well
    .then(res=>res.json())
    .then(data=>displayData(data))
    .catch(err=>console.log(err))

    const displayData= (data) =>{
        //where all the magic happends
        const container = document.querySelector('.wrapper__cards-container')
        container.innerHTML = ''
        data.forEach(item => {
            //create a card
            const card = document.createElement('div')
            container.appendChild(card)
            // create an inner
            const cardInner = document.createElement('div')
            card.appendChild(cardInner)
            //post the content from our fetch request
            card.className = `wrapper__cards-container__card bg-${item.title.toLowerCase()}`
            cardInner.className = 'wrapper__cards-container__card__inner'
            //get exact timeframe and put it in a var so we can change it later with our buttons
            cardInner.innerHTML = `
                <h2>${item.title}</h2>
                <a href="#">...</a>
                <p>${item.timeframes[currentTimeFrame].current}Hrs</p>
                <span>Last Week - ${item.timeframes[currentTimeFrame].current}Hrs</span>
            `;
        });
    }

    }

    //intial data fetching like Awake() in unity
    fetchData()

    buttons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            currentTimeFrame = btn.innerHTML.toLowerCase()
            //recalling the function here in important 
            fetchData()
        })
    })

})