let main=document.getElementById("main-content")
let input=document.getElementById("search-input")
let button=document.getElementById("enter")

button.addEventListener("click",function () {
let valueofInput=input.value
console.log(valueofInput)
    fetch(`https://newsapi.org/v2/everything?q=${valueofInput}&apiKey=67894c4e782d40c0b271c7c27a97aca4`)
    .then(response => response.json())
    .then(data => {console.log(data)
        let list=data.articles
        let result=list.map(function (listing) {
            return `<p> <span>  ${listing.title} <span> </p>
            <p> ${listing.author} </p>
            <p>${listing.description}</p>`
        }).join("");
    main.innerHTML=result
    })
})