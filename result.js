
let img = document.getElementById("ImG");
let price,len,vp,num;
let qt = document.getElementById("Qt");
let Tt = document.getElementById("Tt");

window.addEventListener('load',() => { 

    const params = (new URL(document.location)).searchParams;
    const n_ame  = params.get("NAME");
    const p_rice = params.get("PRICE");
    const i_mg   = params.get("Image");

    document.getElementById("PNAME").innerHTML = n_ame;
    document.getElementById("PPRICE").innerText = p_rice;

     price = document.getElementById("PPRICE").innerText;
     len = price.length-1;
     vp = price.substring(0,len); // for eg 65$ convert to 65
     num = Number(vp);
   
  
    img.src = i_mg;
    
})

// document.write(typeof(num));


  
let tval,x; 

function inputFun(latest_qt)
{

    // alert(latest_qt);

    x = latest_qt.value; 
    
    // Tt.innerHTML = x*num;

    tval = x*num;

    document.getElementById("tval").value = tval;
    
}









