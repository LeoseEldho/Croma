const productarea = document.querySelector(".content-phone-container");
let item1 = document.getElementById("categorie-item-add");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4=document.getElementById('item4')
let item5=document.getElementById('item5')
let item6=document.getElementById('item6')
let item7=document.getElementById('item7')
let categories = document.querySelector(".categories-active");
let brand = document.querySelector(".brand-active");
let price = document.querySelector(".price-active");
let priceapply=document.getElementById("price-apply")
let processor=document.querySelector('.processor-active')
let ram=document.querySelector('.ram-active')
let internal=document.querySelector('.internal-active')
let delivary=document.querySelector('.delivary-active')
let cancel = document.querySelectorAll(".categories-h2-icon");
let sort = document.querySelector(".sort");
let sortbtn = document.querySelector(".content-sort");
let sortcancel = document.querySelector(".sort-icon");
let cateapply = document.getElementById("cateapply");
let check1 = document.getElementById("cb-android");
let sortlp = document.getElementById("sortlp");
let check2 = document.getElementById("cb-iphone");
let check3 = document.getElementById("cb-smart");
let check4 = document.getElementById("cb-band");
let categoriebox=document.querySelector('.categories-active')
let brandbox=document.querySelector('.brand-active')
let brandcheck1=document.getElementById('cb-apple')
let brandcheck2=document.getElementById('cb-noise')
let brandcheck3=document.getElementById('cb-vivo')
let brandcheck4=document.getElementById('boat')
let brandapply=document.getElementById('brandapply')
let pricebox=document.querySelector(".price-active")
let pricecheck1=document.getElementById("cb-greater10")
let pricecheck2=document.getElementById("cb-greater20")
let pricecheck3=document.getElementById("cb-greater30")
let pricecheck4=document.getElementById("cb-greater40")
let processorapply=document.getElementById('processorapply')
let ramapply=document.getElementById('ramapply')
let internalapply=document.getElementById('internalapply')
let delivaryapply=document.getElementById('delivaryapply')
let ramcheck1=document.getElementById('cb-ram1')
let ramcheck2=document.getElementById('cb-ram2')
let ramcheck3=document.getElementById('cb-ram3')
let ramcheck4=document.getElementById('cb-ram4')
let internalcheck1=document.getElementById('cb-internal1')
let internalcheck2=document.getElementById('cb-internal2')
let internalcheck3=document.getElementById('cb-internal3')
let internalcheck4=document.getElementById('cb-internal4')
let delivarycheck1=document.getElementById('cb-home')
let delivarycheck2=document.getElementById('cb-express')
// button
let filteritems=document.querySelector('.filter-items')
let filteritemsbrand=document.querySelector('.filter-items-brand')
let filteritemsprice=document.querySelector('.filter-items-price')
let filteritemsprocessor=document.querySelector('.filter-items-processor')
let filteritemsram=document.querySelector('.filter-items-ram')
let filteritemsinternal=document.querySelector('.filter-items-internal')
let filteritemsdelivary=document.querySelector('.filter-items-delivary')
let valueicon=document.querySelector('.value-icon')
let valueiconbrand=document.querySelector('.value-icon-brand')
let valueiconprice=document.querySelector('.value-icon-price')
let valueiconprocessor=document.querySelector('.value-icon-processor')
let valueiconram=document.querySelector('.value-icon-ram')
let valueiconinternal=document.querySelector('.value-icon-internal')
let valueicondelivary=document.querySelector('.value-icon-delivary')
let valuetext=document.querySelector('.value-text')
let valuetextbrand=document.querySelector('.value-text-brand')
let valuetextprice=document.querySelector('.value-text-price')
let valuetextprocessor=document.querySelector('.value-text-processor')
let valuetextram=document.querySelector('.value-text-ram')
let valuetextinternal=document.querySelector('.value-text-internal')
let valuetextdelivary=document.querySelector('.value-text-delivary')
// clear
let clear=document.querySelector('.content-clear-text')



item1.addEventListener("click", () => {
  categories.classList.add("active");
});
item2.addEventListener("click", () => {
  brand.classList.add("active");
});
item3.addEventListener("click", () => {
  price.classList.add("active");
});
item4.addEventListener('click',()=>{
  processor.classList.add('active')
})
item5.addEventListener('click',()=>{
  ram.classList.add('active')
})
item6.addEventListener('click',()=>{
  internal.classList.add("active")
})
item7.addEventListener('click',()=>{
  delivary.classList.add("active")
})

cancel.forEach((cancels) => {
  cancels.addEventListener("click", () => {
    categories.classList.remove("active");
    brand.classList.remove("active");
    price.classList.remove("active");
    processor.classList.remove("active")
    ram.classList.remove("active")
    internal.classList.remove('active')
    delivary.classList.remove('active')
  });
});

let alldata = [];

async function productfetch() {
  try {
    const response = await fetch("./product.json");
    let data = await response.json();

    alldata = data;
    getdata(alldata);
  } catch (error) {
    console.log(error);
  }
}
productfetch();


 function getdata(datas) {
  datas.forEach((product) => {
    productarea.innerHTML += `
<li class="content-phone-container-items">
                                    <div class="cpci-item">
                                        <div class="cpci-item-image">
                                            <img src="${product.image}"
                                                alt="iphone">
                                            <div class="cpci-item-compare">
                                                <div class="item-compare-box">
                                                    <input type="checkbox">
                                                    <label class="item-compare-box-label" for="">
                                                        <span class="icbl-box"></span>
                                                        <span class="icbl-text">Compare</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <button class="item-compare-like">
                                                    <span class="item-compare-like-img"></span>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="cpci-item-detail">
                                            <div class="cpci-item-detail-text">
                                                <div class="cpci-prodect-text">
                                                    <h3 class="cpci-product-text-h3">${
                                                      product.name
                                                    }</h3>
                                                </div>
                                                <div class="cpci-product-rating">
                                                    <span class="product-rating-icon">
                                                        <span class="product-rating-text">
                                                            ${
                                                              product.rating
                                                                ? ` ${product.rating}
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M8.00004 11.514L12.12 14.0007L11.0267 9.31398L14.6667 6.16065L9.87337 5.75398L8.00004 1.33398L6.12671 5.75398L1.33337 6.16065L4.97337 9.31398L3.88004 14.0007L8.00004 11.514Z"
                                                                    fill="#12DAA8"></path>
                                                            </svg>
                                                        </span>`
                                                                : ""
                                                            }
                                                        <span class="product-rating-count">
                                                            ${product.user}
                                                        </span> 
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="cpci-item-detail-price">
                                                <div class="item-detail-price">
                                                    <span class="item-detail-price-text">${
                                                      product.price
                                                    }</span>
                                                </div>

                                                <div class="item-detail-discount">
                                                    <span class="item-detail-discount-price">${
                                                      product.totalprice
                                                    }</span>
                                                    <span class="item-detail-discount-saving"> (Save ${
                                                      product.saving
                                                    })</span>
                                                    <span class="item-detail-discount-off">${
                                                      product.offer
                                                    } Off</span>
                                                </div>
                                            </div>

                                            <div class="cpci-item-detail-delivary">
                                                <div class="item-detail-delivary">
                                                    <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path
                                                                d="M8.00008 3.99398L13.0201 12.6673H2.98008L8.00008 3.99398ZM8.00008 1.33398L0.666748 14.0007H15.3334L8.00008 1.33398ZM8.66675 10.6673H7.33342V12.0007H8.66675V10.6673ZM8.66675 6.66732H7.33342V9.33398H8.66675V6.66732Z"
                                                                fill="#FF5959"></path>
                                                        </svg></span>
                                                    <span class="item-detail-delivary-text">Not Available at pincode
                                                        <span class="item-detail-delivary-text-two">
                                                            Mumbai, 400049
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="line-content"></div>
                                     <div class="content-emi">
                                        <div class="content-emi-btn">
                                            ${
                                              product.isemi
                                                ? `<span class="content-emi-btn-text">${product.isemi}</span>`
                                                : ""
                                            } ${
      product.isemi2
        ? `<span class="content-emi-btn-text">${product.isemi2}</span>`
        : ""
    }
                                        </div>
                                    </div>  
                                </li>`;
  });
}



sortlp.addEventListener("click", () => {
  productarea.innerHTML = "";
  const priceproduct = alldata.sort((a, b) => a.priced - b.priced);
  getdata(priceproduct);
  closingsort();
});

sorthp.addEventListener("click", () => {
  productarea.innerHTML = "";
  let highest = alldata.sort((x, y) => y.priced - x.priced);
  getdata(highest);
  closingsort();
});

sortd.addEventListener("click", () => {
  productarea.innerHTML = "";
  let discountprice = [...alldata].sort((x, y) => y.offerd - x.offerd);
  getdata(discountprice);
  closingsort();
});
sorttop.addEventListener("click", () => {
  productarea.innerHTML = "";
  let toprated = [...alldata].sort((a, b) => b.rating - a.rating);
  getdata(toprated);
  closingsort();
});

sortbtn.addEventListener("click", () => {
  sort.classList.add("active");
});

function closingsort() {
  sort.classList.remove("active");
}
sortcancel.addEventListener("click", closingsort);


function short(){
  clear.style.display="none"
  productarea.innerHTML=""
  getdata(alldata)
}


function categoriesclose(){
  categoriebox.classList.remove("active")
}
valueicon.addEventListener('click',()=>{
  filteritems.style.display="none"
  short()
})
cateapply.addEventListener("click", () => {
  productarea.innerHTML = "";
  if (check1.checked) {
    let androidchecked = alldata.filter(
      (element) => element["processorName"] === "android"
    );
    getdata(androidchecked);
    closingsort();
  } else if (check2.checked) {
    let iphonecheck = alldata.filter((x) => x["processorName"] === "ios");
    getdata(iphonecheck);
    
  } else if (check3.checked) {
    let smartwatch = alldata.filter((x) => {
      return x["item"] === "watch";
    });
    getdata(smartwatch);
  } else if (check4.checked) {
    let allphone = alldata.filter((x) => {
      return x["item"] === "phone";
    });
    getdata(allphone);
  }
  categoriesclose()     
  filteritems.style.display="block" 
  clear.style.display="block"
  if(check1.checked){ 
    valuetext.textContent="android"
                
  }else if(check2.checked){
    valuetext.textContent="i phone"
  }else if(check3.checked){
    valuetext.textContent="Smart watch"
  }else if(check4.checked){
    valuetext.textContent="all phones"  
  }
});       



function brandclose(){
  brandbox.classList.remove("active")
}
valueiconbrand.addEventListener('click',()=>{
  productarea.innerHTML=""
  filteritemsbrand.style.display="none"
  short()
})
brandapply.addEventListener('click',()=>{
  productarea.innerHTML=""
  let checkedbrand=document.querySelector("input[name='brand']:checked");
  let filtereddata
  
  if(checkedbrand){
    let branddata=checkedbrand.value
    filtereddata=alldata.filter((x)=> x["brand"]==branddata)
    valuetext.innerHTML=branddata
  }
 
  getdata(filtereddata)
  filteritemsbrand.style.display="block"
  brandclose()
})



function priceclose(){
  pricebox.classList.remove("active")
}
valueiconprice.addEventListener('click',()=>{
  filteritemsprice.style.display="none"
  short()
})
priceapply.addEventListener("click",()=>{
  productarea.innerHTML=""
  if(pricecheck4.checked){
    let below80=alldata.filter((x)=>{
      return  x.priced>=40000 && x.priced <=80000
    })
    getdata(below80)
  }else if(pricecheck3.checked){
    let below40=alldata.filter((x)=> {
      return x.priced>=30000 && x.priced<=40000
    })
    getdata(below40)
  }else if(pricecheck2.checked){
    let below30=alldata.filter((x)=> x.priced>=20000 && x.priced<=30000)
    getdata(below30)
  }else if(pricecheck1.checked){
    let below20=alldata.filter((x)=> x.priced<=20000);
    getdata(below20)
  }
  priceclose();
  filteritemsprice.style.display="block"
  clear.style.display="block"
  if(pricecheck1.checked){
    valuetextprice.innerHTML="0-20,000"
  }else if(pricecheck2.checked){
    valuetextprice.innerHTML="20,001-30,000"
  }else if(pricecheck3.checked){
    valuetextprice.innerHTML="30,001-40,000"
  }else{
    valuetextprice.innerHTML="40,001-80,000"
  }
});

  

function processorclose(){
  processor.classList.remove('active')
}
processorapply.addEventListener('click',()=>{
  processorclose()
}) 


function ramclose(){
  ram.classList.remove('active')
}
valueiconram.addEventListener('click',()=>{
  filteritemsram.style.display="none"
  short()
})
ramapply.addEventListener('click',()=>{
  productarea.innerHTML=""
  if(ramcheck1.checked){
    let gb4=alldata.filter((x)=> x.ram=="4")
    getdata(gb4)
  }else if(ramcheck2.checked){
    let gb6=alldata.filter((x)=>{
      return x.ram=="6"
    })
    getdata(gb6)
  }
  ramclose()
  filteritemsram.style.display="block"
  clear.style.display="block"
  if(ramcheck1.checked){
    valuetextram.innerHTML="4 GB-RAM"
  }else{
    valueiconram.innerHTML="6 GB-RAM"
  }
})



function internalclose(){
  internal.classList.remove('active')
}
valueiconinternal.addEventListener('click',()=>{
  filteritemsinternal.style.display="none"
  short()
})
internalapply.addEventListener('click',()=>{
  productarea.innerHTML=""
  if(internalcheck1.checked){
    let gb64=alldata.filter((x)=> x.internal==64)
    getdata(gb64)
  }else if(internalcheck2){
    let gb128=alldata.filter((x) => x.internal==128)
    getdata(gb128)
  }
  internalclose()
  filteritemsinternal.style.display="block"
  clear.style.display="block"
  if(internalcheck1.checked){
    valuetextinternal.innerHTML="64 GB"
  }else{
    valuetextinternal.innerHTML="128 GB"
  }
})



function delivaryclose(){
  delivary.classList.remove('active')
}
valueicondelivary.addEventListener('click',()=>{
  filteritemsdelivary.style.display="none"
  short()
})
delivaryapply.addEventListener('click',()=>{
  productarea.innerHTML=""
  if(delivarycheck1.checked){
    let home=alldata.filter((x)=> x["delivery"]=="cash on delivery")
    getdata(home)
  }else if(delivarycheck2.checked){
    let express=alldata.filter((x)=> x["delivery"]=="express delivery")
    getdata(express)
  }
  delivaryclose()
  filteritemsdelivary.style.display="block"
  clear.style.display="block"
  if(delivarycheck1.checked){
    valuetextdelivary.innerHTML="Home Delivary"
  }else {
    valuetextdelivary.innerHTML="Express Delivary"
  }
})

      

clear.addEventListener('click',()=>{
  categoriesclose()
  brandclose()
  priceclose()
  processorclose()
  ramclose()  
  internalclose()
  delivaryclose()
  filteritems.style.display="none"
  filteritemsbrand.style.display="none"
  filteritemsprice.style.display="none"
  filteritemsprocessor.style.display="none"
  filteritemsram.style.display="none"
  filteritemsinternal.style.display="none"
  filteritemsdelivary.style.display="none"
  short()
})


