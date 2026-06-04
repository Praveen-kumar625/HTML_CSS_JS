// api fetching
let input=document.querySelector("input");
let btn=document.querySelector("button");
let list=document.querySelector("#list");
btn.addEventListener("click" (){
    let data = input.value;
    
    fetch(`https://api.tvmaze.com/search/shows?q=${data}`)
    .then(info => {
        return info.json();
    })
    .then(value) => {
        console.log(value[0].show.image.medium);
        show(value)
    }
    function show(value){
        let img = document.createElement("img");
        img.src = value[0].show.image.medium;
        list.appendChild(img);
        list.appendChild(h1.textContent = value[0].show.name);
        list.appendChild(p.textContent = value[0].show.summary);
        list.appendChild(h3.textContent = value[0].show.rating.average);
        list.appendChild(div.appendChild(img));
        list.appendChild(div.appendChild(h1));
        list.appendChild(div.appendChild(p));
        list.appendChild(div.appendChild(h3));
        list.appendChild(div);
    }