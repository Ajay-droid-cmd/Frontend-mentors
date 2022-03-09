let arr = {}
const slip_id= Math.floor(Math.random() * 1001);
async function fetchquote() {
    const resp = await fetch(`https://api.adviceslip.com/advice`)
    const data = await resp.json();
    console.log(data.slip.id, data.slip.advice);
     document.getElementById('main1').innerText=`ADVICE #${data.slip.id}`;
     document.getElementById('main2').innerText= data.slip.advice;

}
fetchquote();
