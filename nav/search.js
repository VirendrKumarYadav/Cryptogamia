let cryptoContainer = document.querySelector('.cryptoContainer');
let input=document.querySelector('.input input');
let search_btn=document.querySelector('.input button');

let count = 0;
async function crptosearch() {
    const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${input.value}`)
    const Jdata = await data.json();
    appendSearchResult(Jdata);
    console.log(Jdata);
}

function appendSearchResult(res) {
    cryptoContainer.innerHTML = "";
    for (let i = 0; i <res.coins.length; i++) {
        let ele = res.coins[i];
        let cryptoCard = document.createElement('div');
        cryptoCard.classList.add('cryptoCard');
        cryptoCard.innerHTML = `
    <div class="cryptoName">
            <p>${i + 1}</p>
            <img src="${ele.thumb}" alt="">
            <p>${ele.name} &nbsp ${ele.symbol}</p>
    </div>
    <a href="../nav/more.html?id=${ele.id}"><button>More Info</button></a>`;
        cryptoContainer.appendChild(cryptoCard);
    };
};

search_btn.addEventListener('click', ()=>{
    crptosearch();
});