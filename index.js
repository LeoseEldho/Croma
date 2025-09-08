const productarea = document.querySelector(".content-phone-container");
//sort
let sort = document.querySelector(".sort");
let sortbtn = document.querySelector(".content-sort");
let sortcancel = document.querySelector(".sort-icon");

let cleardata=document.querySelector('.content-clear-text')
let filterContainer=document.getElementById('selected-filters')

// json data fetch 
let alldata = [];
async function productfetch() {
  let response = await fetch("./product.json");
  let data = await response.json();
  alldata = data;
  getdata(alldata);
}
productfetch();


function getdata(datas) {
  productarea.innerHTML = "";
  datas.forEach((product) => {
    let li = document.createElement("li");
    li.classList.add("content-phone-container-items");

    li.innerHTML+=`
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
                                 `;
li.querySelector(".cpci-item").addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });
    productarea.appendChild(li);
  });
}

sortbtn.addEventListener('click',()=>{
  sort.classList.add('active');
})
function closingsort() {
  sort.classList.remove("active");
}
sortcancel.addEventListener("click", closingsort);


let currentSort="";


// sorting input 
document.querySelectorAll('.sort-list').forEach((x)=>{
  x.addEventListener('click',()=>{
    if(x.id=="sortlp"){
      currentSort="price-low"
    }else if(x.id=="sorthp"){
      currentSort="price-high"
    }else if(x.id=="sortd"){
      currentSort="discount"
    }else if(x.id=="sorttop"){
      currentSort="rating"
    }
    allfilters()
    closingsort()
  })
})

 
// pannel open    
document.querySelectorAll(".content-categories-items").forEach((x) => {
  x.addEventListener("click", () => {
    let click = x.dataset.target;
    let clicked = document.querySelector(`.${click}`);
    if (clicked) {
      clicked.classList.add("active");
    }
  });
});

// pannel close 
document.querySelectorAll(".categories-h2-icon").forEach((x) => {
  x.addEventListener("click", () => {
    document
      .querySelectorAll(
        ".categories-active,.brand-active,.price-active,.processor-active,.ram-active,.internal-active,.delivary-active"
      )
      .forEach((x) => {
        x.addEventListener("click", () => {
          x.classList.remove("active");
        });
      });
  });
});

// data storing filtering
let filters = {
  category: [],
  brand: [],
  price: [],
  processor: [],
  ram: [],
  internal: [],
  delivary: [],
};

// filter input
document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    let filtertype = checkbox.name;
    if (checkbox.checked) {
      filters[filtertype].push(checkbox.value);
    } else {
      filters[filtertype] = filters[filtertype].filter(
        (x) => x !== checkbox.value
      );
    }
    console.log(filtertype);
    console.log(filters);
  });
});

// data filtering 
function allfilters() {
  let result = alldata;
  if (filters.category.length > 0) {
    result = result.filter(
      (x) =>
        filters.category.includes(x.itemtype) ||
        filters.category.includes(x.item)
    );
  }
  if (filters.brand.length > 0) {
    result = result.filter((x) => filters.brand.includes(x.brand));
  }
  if (filters.ram.length > 0) {
    result = result.filter((x) => filters.ram.includes(x.ram));
  }
  if (filters.internal.length > 0) {
    result = result.filter((x) => 
      filters.internal.includes(x.internal));
  }
  if (filters.processor.length > 0) {
    result = result.filter((x) => filters.processor.includes(x.processorName));
  }
  if (filters.delivary.length > 0) {
    result = result.filter((x) => filters.delivary.includes(x.delivary));
  }
  if (filters.price.length > 0) {
    result = result.filter((x) =>
      filters.price.some((range) => {
        let [min, max] = range.split("-");
        return x.price >= min && x.price <= max;
      })
    );
  }

// sorting input 
if(currentSort=="price-low"){
  result.sort((a,b)=> a.priced-b.priced)
}else if(currentSort=="price-high"){
  result.sort((a,b)=> b.priced-a.priced)
}else if(currentSort=="discount"){
  result.sort((a,b)=> b.offerd-a.offerd)
}else if(currentSort=="rating"){
  result.sort((a,b)=> b.rating-a.rating)
}

getdata(result)
console.log(result)
}

// apply button  
document.querySelectorAll('.categories-apply').forEach((x)=>{
  x.addEventListener('click',()=>{
    filterContainer.innerHTML=""
    cleardata.style.display="block"
    Object.keys(filters).forEach(type=>{
      filters[type].forEach(value=>{
        let tag=document.createElement('span')
        tag.classList.add('filter-tag')
        tag.setAttribute('data-value',value)
        tag.innerHTML= value + `<button class="remove-btn">x</button>`
        filterContainer.appendChild(tag)
        
        // tag closeing 
        tag.querySelector('.remove-btn').addEventListener('click',()=>{
          let checkbox=document.querySelector(`input[name="${type}"][value="${value}"]`)
          if(checkbox) checkbox.checked=false
          filters[type]=filters[type].filter((x)=> x!==value)
          tag.remove()
          allfilters()
          clearbtn()
        })        
        })
      })
    allfilters()
    clearbtn()
    document.querySelectorAll('.categories-active,.brand-active,.price-active,.processor-active,.ram-active,.internal-active,.delivary-active').forEach((x)=> x.classList.remove('active'))
  })
})
// clear button
cleardata.addEventListener('click',()=>{
  document.querySelectorAll('input[type=checkbox]').forEach((x)=> x.checked=false)
  filterContainer.innerHTML=""
  Object.keys(filters).forEach((type)=> filters[type]=[])
  cleardata.style.display=""
  allfilters()
}) 

function clearbtn(){
  let allclear=Object.keys(filters).every(x=> filters[x].length==0)
  cleardata.style.display=allclear?"none":"block"
}

card.addEventListener('click',()=>{
  window.location.href=`product.html?id=${product.id}`
})
document.getElementById('product').appendChild(card);

