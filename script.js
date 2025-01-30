let fromcurr=document.querySelector(".from");
let tocurr=document.querySelector(".to");
let select1=document.querySelector("#select1");
let select2=document.querySelector("#select2");
let btn=document.querySelector(".submit");
let msg=document.querySelector(".msg");
const countryList = {
    AUD: "AU",
    BGN: "BG",
    BRL: "BR",
    CAD: "CA",
    CHF: "CH",
    CNY: "CN",
    CZK: "CZ",
    DKK: "DK",
    EUR: "FR",
    GBP: "GB",
    HKD: "HK",
    HRK: "HR",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    ISK: "IS",
    JPY: "JP",
    KRW: "KR",
    MXN: "MX",
    MYR: "MY",
    NOK: "BV",
    NZD: "NZ",
    PHP: "PH",
    PLN: "PL",
    RON: "RO",
    RUB: "RU",
    SEK: "SE",
    SGD: "SG",
    THB: "TH",
    TRY: "TR",
    USD: "US",
    ZAR: "ZA"
};

for(code in countryList){
    let el=document.createElement("option");
    el.innerText=code;
    el.value=code;
    let el2=document.createElement("option");
    el2.innerText=code;
    el2.value=code;
    select1.append(el);
    select2.append(el2);
};
select1.addEventListener("change",(e)=>{
    tocurr.value=" ";
    updateflag(e.target);
})
select2.addEventListener("change",(e)=>{
    tocurr.value=" ";
    updateflag(e.target);
})
const updateflag=(element)=>{
    let currcode=element.value;
    let code=countryList[currcode];
    let parentDiv = element.parentElement;
    let flag = parentDiv.querySelector('img');
    flag.src=`https://flagsapi.com/${code}/shiny/64.png`;
}
btn.addEventListener("click",()=>{
    updateexchange();
})
const updateexchange=async()=>{
    let data1=select1.value;
    let data2=select2.value;
    let inputdata=fromcurr.value;
    let response=await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_vjEOjsGaPHT0eSuuomYoVpzIYyCPO5EpicVCMbOi");
    console.log(response);
    let op_obj=await response.json();
    tocurr.value=((op_obj["data"][data2]/op_obj["data"][data1])*inputdata);
    msg.innerText=`1 ${data1} equal to ${(op_obj["data"][data2]/op_obj["data"][data1]).toFixed(3)} ${data2}`;
}





