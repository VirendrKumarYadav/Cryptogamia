

async function fetchData() {
    let res = await fetch('https://api.coingecko.com/api/v3/search/trending');
    let data = await res.json();
    // console.log(data);
    let list_data = data.coins;
    list_data.forEach((element) => {
        // console.log(element);
        fetchCoinsSliderData(element, element.item.id);
    });

}
fetchData();

// ------------------------ slider ----------------------

const slide_cont = document.querySelector('.slides_container')
async function fetchCoinsSliderData(data, coin_id) {
    let res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}\?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
    let data_coin = await res.json();
    // console.log(data_coin);
    const flex_side = document.createElement('div');
    flex_side.classList = `slide`

    flex_side.innerHTML = `
    <img src = "${data.item.small}">
    <h2>${data.item.name} (${data.item.symbol})</h2>
    <p>₹ ${data_coin.market_data.current_price.inr}</p>
`

    flex_side.addEventListener('click', () => {
        const url = "./more_data.html?id=" + data.item.id;
        window.open(url, '_blank')
    })
    slide_cont.appendChild(flex_side);
}
// -------------------- search button-------------------
let count=0;
let search_btn = document.querySelector('.right');
search_btn.addEventListener('click', () => {
    console.log("Searching...");
    const url = "./nav/serach.html?id=" + count++;
    window.open(url, '_blank');
});