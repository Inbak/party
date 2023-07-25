const color = ["#4A772F" , "#61ba49" ,"#337aad" ,"#b2a533" ,"#c227b7" , "#2ac050", "#000000"];
    const text = ["Alappara kelapparom"," Dha paaru da","Kalavaram yeranguna " ,"Dha.. daaru da","Nelavaram puriyidha okkaruda","Thalivaru kalathula", "SUPERSTAR da"];
    
    const title = document.querySelector(".text");
    const bg = document.querySelector(".back");
    let i =0;
    setInterval(()=>{
    switch(i)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            {
            title.innerHTML = text[i];
            bg.setAttribute("style", `background: ${color[i]}; opacity:0.8;`);
            i++;
            break;
            }
            default:
                {
                    i=0;
                }
    }
    },700);
