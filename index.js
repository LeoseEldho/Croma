const productarea = document.querySelector(".content-phone-container");

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

let categoriebox=document.querySelector('.categories-active')
let brandbox=document.querySelector('.brand-active')
let brandapply=document.getElementById('brandapply')
let pricebox=document.querySelector(".price-active")

let processorapply=document.getElementById('processorapply')
let ramapply=document.getElementById('ramapply')
let internalapply=document.getElementById('internalapply')
let delivaryapply=document.getElementById('delivaryapply')
// clear
let clear=document.querySelector('.content-clear-text')
const cateapply = document.getElementById("cateapply")
let active=document.querySelectorAll('.categories-apply')


let alldata = []
  
async function productfetch() {
  let response=await fetch('./product.json') 
  let data=await response.json()
  alldata=data
  getdata(alldata)
}
productfetch()

function getdata(datas){
  productarea.innerHTML=""
  datas.forEach((product)=>{
    productarea.innerHTML+=`<li class="content-phone-container-items">
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
  })
}

// button section

// item1.addEventListener("click", () => {
//   categories.classList.add("active");
// });
// item2.addEventListener("click", () => {
//   brand.classList.add("active");
// });
// item3.addEventListener("click", () => {
//   price.classList.add("active");
// });
// item4.addEventListener('click',()=>{
//   processor.classList.add('active')
// })
// item5.addEventListener('click',()=>{
//   ram.classList.add('active')
// })
// item6.addEventListener('click',()=>{
//   internal.classList.add("active")
// })
// item7.addEventListener('click',()=>{
//   delivary.classList.add("active")
// })

// cancel.forEach((cancels) => {
//   cancels.addEventListener("click", () => {
//     categories.classList.remove("active");
//     brand.classList.remove("active");
//     price.classList.remove("active");
//     processor.classList.remove("active")
//     ram.classList.remove("active")
//     internal.classList.remove('active')
//     delivary.classList.remove('active')
//   }); 
// });

document.querySelectorAll('.content-categories-items').forEach(x=>{
 x.addEventListener('click',()=>{
  x.classList.remove('active')
 })
})

// sort section //
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

// filters

let filters={
  category: [],
  brand: [],
  price: [],
  processor:[],
  ram: [],
  internal: [],
  delivary: [],
}

function allfilters(){
let result=alldata
  if(filters.category.length>0){
    result=result.filter((x)=>
    filters.category.includes(x.itemtype)||
    filters.category.includes(x.item))
  }
  if(filters.brand.length>0){
    result=result.filter((x)=> 
    filters.brand.includes(x.brand))
  }
  if(filters.ram.length>0){
    result=result.filter((x)=>
    filters.ram.includes(x.ram))
  }
  if(filters.processor.length>0){
    result=result.filter((x)=>
    filters.processor.includes(x.processorName))
  }
  if(filters.internal.length>0){
    result=result.filter((x)=>
    filters.internal.includes(x.internal))
  }
  if(filters.delivary.length>0){
    result=result.filter((x)=>
    filters.delivary.includes(x.delivary))
  }
  if(filters.price.length>0){
    result=result.filter((x)=>{
     return filters.price.some(Range=>{
      let [min,max]=Range.split("-")
      return x.price>=min&&x.price<=max
    })
    })
  }
  getdata(result)
  console.log(result)
}   

document.querySelectorAll('input[type=checkbox]').forEach((checkbox)=>{
  checkbox.addEventListener('click',()=>{
    let filtertype=checkbox.name
    if(checkbox.checked){
      filters[filtertype].push(checkbox.value)
    }else{
      filters[filtertype]=filters[filtertype].filter((x)=> x!==checkbox.value)
    }
  })
})

document.querySelectorAll('.categories-apply').forEach(x=>{
  x.addEventListener('click',()=>{
    allfilters()
  })
})

document.querySelectorAll('.content-categories-items').forEach(x=>{
  x.addEventListener('click',()=>{
    let targetclass=x.dataset.target
    let target=document.querySelector(`.${targetclass}`)
    if(target){
      target.classList.add('active')
    }
  })
})

document.querySelectorAll('.categories-h2-icon').forEach(cancelbtn=>{
  cancelbtn.addEventListener('click',()=>{
    document.querySelectorAll(".categories-active,.brand-active,.price-active,.processor-active,.ram-active,.internal-active,.delivary-active")
    .forEach(p=> p.classList.remove('active'))
  })
}) 