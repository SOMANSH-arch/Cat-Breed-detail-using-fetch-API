console.log("somansh");
// let searchBox=document.querySelector('#searchbox');
// let goBox=doucument.querySelector('#goBox');
async function fetching(){
    let response=await fetch('https://catfact.ninja/breeds');
    
    let data=await response.json();
    let arr=data.data;
    console.log(arr);
    let searchBox=document.querySelector('#search-Box');
    let goBox=document.querySelector('#go-Box');
    let fParagraph=document.querySelector('#fpara');
    let sParagraph=document.querySelector('#spara');
    let tParagraph=document.querySelector('#tpara');
    let foParagraph=document.querySelector('#fopara');
    function showOutput(){
        let inp=searchBox.value;
        fParagraph.classList.remove("result-style","animated-text");
        sParagraph.classList.remove("result-style","animated-text");
        tParagraph.classList.remove("result-style","animated-text");
        foParagraph.classList.remove("result-style","animated-text");
        let bo=false;
        for(let a=0;a<25;a++){
            
            if(arr[a]["breed"]===inp){
                
                fParagraph.innerText="COUNTRY : "+arr[a]["country"];
                sParagraph.innerText="ORIGIN : "+arr[a]["origin"];
                tParagraph.innerText="COAT : "+arr[a]["coat"];
                foParagraph.innerText="PATTERN : "+arr[a]["pattern"];
               fParagraph.classList.add("result-style","animated-text");
               tParagraph.classList.add("result-style","animated-text");
               foParagraph.classList.add("result-style","animated-text");
               sParagraph.classList.add("result-style","animated-text");
                bo=true;
                break;
            }
        }
        if(bo==false){
            fParagraph.innerText="oops no result found";
            fParagraph.classList.add("result-style","animated-text");
            sParagraph.innerText="";
            tParagraph.innerText="";
            foParagraph.innerText="";

            
        }
    }
    goBox.addEventListener('click',showOutput);
}
fetching();