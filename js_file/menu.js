// ------------------------- Js for the cart display or not ---------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const cartModal = document.getElementById("cart_modal");
  const cartNav = document.getElementById("cartNav");
  const closebtn = document.getElementById("close");
  if (cartNav && cartModal) {
    cartNav.addEventListener("click", function (e) {
      e.preventDefault();
      cartModal.classList.add("active");
    });
  }
  if (closebtn && cartModal) {
    closebtn.addEventListener("click", function () {
      cartModal.classList.remove("active");
    });
  }
});

// ------------------ Js for the add items to the cart -------------------------------------------------
let cart_items = document.getElementById("cart");
let cart_modal = document.getElementById("cart_modal");

let product1 = document.getElementById("pd1");
let product2 = document.getElementById("pd2");
let product3 = document.getElementById("pd3");
let product4 = document.getElementById("pd4");
let product5 = document.getElementById("pd5");
let product6 = document.getElementById("pd6");
let product7 = document.getElementById("pd7");
let product8 = document.getElementById("pd8");
let total_price = document.getElementById("total_price");
let total = 0;
function extractPrice(priceStr) {
  return parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
}
document.addEventListener("DOMContentLoaded", function () {
  const grid1 = document.querySelector(".grid1");
  if (grid1) {
    const addtocart = grid1.querySelector(".addtocart");
    const buynow = grid1.querySelector(".buy_btn");
    if (addtocart) {
      addtocart.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product1.querySelector("h1")?.textContent || "";
        let name = product1.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        console.log(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
    if (buynow) {
      buynow.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product1.querySelector("h1")?.textContent || "";
        let name = product1.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const grid2 = document.querySelector(".grid2");
  if (grid2) {
    const addtocart = grid2.querySelector(".addtocart");
    const buynow = grid2.querySelector(".buy_btn");
    if (addtocart) {
      addtocart.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product2.querySelector("h1")?.textContent || "";
        let name = product2.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;

        console.log(li);
        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
    if (buynow) {
      buynow.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product2.querySelector("h1")?.textContent || "";
        let name = product2.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;

        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const grid3 = document.querySelector(".grid3");
  if (grid3) {
    const addtocart = grid3.querySelector(".addtocart");
    const buynow = grid3.querySelector(".buy_btn");
    if (addtocart) {
      addtocart.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product3.querySelector("h1")?.textContent || "";
        let name = product3.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        console.log(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
    if (buynow) {
      buynow.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product3.querySelector("h1")?.textContent || "";
        let name = product3.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const grid4 = document.querySelector(".grid4");
  if (grid4) {
    const addtocart = grid4.querySelector(".addtocart");
    const buynow = grid4.querySelector(".buy_btn");
    if (addtocart) {
      addtocart.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product4.querySelector("h1")?.textContent || "";
        let name = product4.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        console.log(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
    if (buynow) {
      buynow.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product4.querySelector("h1")?.textContent || "";
        let name = product4.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const grid5 = document.querySelector(".grid5");
  if (grid5) {
    const addtocart = grid5.querySelector(".addtocart");
    const buynow = grid5.querySelector(".buy_btn");
    if (addtocart) {
      addtocart.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product5.querySelector("h1")?.textContent || "";
        let name = product5.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        console.log(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
    if (buynow) {
      buynow.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product5.querySelector("h1")?.textContent || "";
        let name = product5.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const grid6 = document.querySelector(".grid6");
  if (grid6) {
    const addtocart = grid6.querySelector(".addtocart");
    const buynow = grid6.querySelector(".buy_btn");
    if (addtocart) {
      addtocart.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product6.querySelector("h1")?.textContent || "";
        let name = product6.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        console.log(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
    if (buynow) {
      buynow.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product6.querySelector("h1")?.textContent || "";
        let name = product6.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const grid7 = document.querySelector(".grid7");
  if (grid7) {
    const addtocart = grid7.querySelector(".addtocart");
    const buynow = grid7.querySelector(".buy_btn");
    if (addtocart) {
      addtocart.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product7.querySelector("h1")?.textContent || "";
        let name = product7.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        console.log(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
    if (buynow) {
      buynow.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product7.querySelector("h1")?.textContent || "";
        let name = product7.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const grid8 = document.querySelector(".grid8");
  if (grid8) {
    const addtocart = grid8.querySelector(".addtocart");
    const buynow = grid8.querySelector(".buy_btn");
    if (addtocart) {
      addtocart.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product8.querySelector("h1")?.textContent || "";
        let name = product8.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        console.log(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
    if (buynow) {
      buynow.addEventListener("click", function () {
        let li = document.createElement("li");
        let price = product8.querySelector("h1")?.textContent || "";
        let name = product8.querySelector("h2")?.textContent || "";
        li.textContent = `${name} - ${price}`;
        cart_items.appendChild(li);
        total += extractPrice(price);
        total_price.innerText = `₹${total.toFixed(2)}`;
      });
    }
  }
});

// ----------------------- Js for the Items add into menu --------------------------------------------------

const addItemBtn = document.getElementById("addItemBtn");

if (addItemBtn) {
  addItemBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const imageUrl = document.getElementById("dishImg").value;
    const price = document.getElementById("dishPrice").value;
    const name = document.getElementById("dishName").value;
    const description = document.getElementById("dishDesc").value;

    if (!imageUrl || !price || !name || !description) {
      alert("Please fill all fields.");
      return;
    }

    const newItem = {
      id: `pd${Date.now()}`,
      imageUrl,
      price,
      name,
      description,
    };

    let items = JSON.parse(localStorage.getItem("menuItems")) || [];
    items.push(newItem);
    localStorage.setItem("menuItems", JSON.stringify(items));
    
    alert("Item added successfully!");

    // Optionally clear the form fields
    document.getElementById("dishImg").value = "";
    document.getElementById("dishPrice").value = "";
    document.getElementById("dishName").value = "";
    document.getElementById("dishDesc").value = "";
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const productGrid = document.querySelector(".product_grid");

  if (productGrid) {
    let items = JSON.parse(localStorage.getItem("menuItems")) || [];

    items.forEach((item, index) => {
      const productDiv = document.createElement("div");
      const newId = `pd${productGrid.children.length + 1}`;
      productDiv.className = `grid${productGrid.children.length + 1}`;
      productDiv.id = newId;
      productDiv.style.border = "1px solid black";
      productDiv.style.width = "306px";
      productDiv.style.height = "460px";
      productDiv.style.textAlign = "center";
      productDiv.style.overflow = "hidden";
      productDiv.style.borderRadius = "15px";
      productDiv.style.boxShadow = "0 4px 24px rgba(0,0,0,0.10)";
      productDiv.innerHTML = `
                <img src="${item.imageUrl}" alt="" style="width:306px; height:230px;">
                <h1 style="color:#Ad343E;padding-top:15px;font-size:25px;padding-bottom:20px">₹${item.price}</h1>
                <h2>${item.name}</h2>
                <p style="font-size:18px;padding-top:20px">${item.description}</p>
                <button type="button" class="addtocart">Add to Cart</button>
                <button type="button" class="buy_btn" style="padding: 10px 15px; background-color:#AD343E; color:white; cursor:pointer; border-radius:15px; margin-top:15px; margin-bottom: 15px; border:none"><a href="#" style="font-style:none; text-decoration:none; color:white;">Buy Now</a></button>
            `;

      // Append the product to the grid
      productGrid.appendChild(productDiv);

      // Add cart logic
      const addtocart = productDiv.querySelector(".addtocart");
      const buynow = productDiv.querySelector(".buy_btn");
      if (addtocart) {
        addtocart.addEventListener("click", function () {
          let li = document.createElement("li");
          li.textContent = `${item.name} - ₹${item.price}`;
          cart_items.appendChild(li);
          total += extractPrice(item.price);
          total_price.innerText = `₹${total.toFixed(2)}`;
        });
      }
      if (buynow) {
        buynow.addEventListener("click", function () {
          let li = document.createElement("li");
          li.textContent = `${item.name} - ₹${item.price}`;
          cart_items.appendChild(li);
          total += extractPrice(item.price);
          total_price.innerText = `₹${total.toFixed(2)}`;
        });
      }
    });
  }
});

// ----------------------------- JS for manage menu items-------------------------------------------
let menuItems = [
  { name: "Fried Eggs", price: 150 },
  { name: "Hawawaiian pizza", price: 500 },
  { name: "Martinez Cocktail", price: 250 },
  { name: "Butterscotch Cake" , price: 350 },
  { name: "Mint Lemonade" , price:150},
  { name: "Chocolate Icecream" , price:100},
  { name: "Cheese Burger" , price:450},
  { name: "Classic Waffles" , price:300}
];

const menuListContainer = document.getElementById('menuListContainer');

function renderMenuItems (){
    menuListContainer.innerHTML ='';

    menuItems.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";
        itemDiv.style.fontSize = '18px';
      itemDiv.innerHTML = `
        <span><strong>${item.name}</strong> - ₹${item.price}</span>
        <button onclick="deleteItem(${index})" class="delete-btn">Delete</button>
      `;

      menuListContainer.appendChild(itemDiv);
    });
}
function deleteItem(index) {
    menuItems.splice(index, 1);
    renderMenuItems();
}

if (document.getElementById('menuListContainer')) {
  renderMenuItems();
}



// ---------------------------- JS for cart items to admin panel -------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const orderBtn = document.querySelector('.place_order_btn');
  if (!orderBtn) {
    console.warn("No place_order_btn found on this page.");
    return;
  }

  orderBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullname')?.value.trim() || "";
    const email = document.getElementById('email')?.value.trim() || "";
    const phone = document.getElementById('phone')?.value.trim() || "";
    const ordertype = document.getElementById('ordertype')?.value || "";
    const instructions = document.getElementById('instructions')?.value.trim() || "";

    const cartItems = document.querySelectorAll('#cart li');
    let items = [];
    let total = 0;

    cartItems.forEach(li => {
      const text = li.textContent; // e.g. "Burger - ₹150"
      const parts = text.split(" - ");
      if (parts.length === 2) {
        const itemName = parts[0].trim();
        const price = parseFloat(parts[1].replace(/[₹$]/g, "").trim());
        if (!isNaN(price)) {
          items.push(`${itemName} - ₹${price}`);
          total += price;
        }
      }
    });

    const order = {
      name,
      email,
      phone,
      ordertype,
      instructions,
      items,
      total
    };

    const existingOrders = JSON.parse(localStorage.getItem("recentOrders")) || [];
    existingOrders.push(order);
    localStorage.setItem("recentOrders", JSON.stringify(existingOrders));

    alert("Order placed successfully!");
    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('ordertype').value = '';
    document.getElementById('instructions').value = '';
  });
});


function loadRecentOrders() {
  const orders = JSON.parse(localStorage.getItem('recentOrders')) || [];
  const rOrders = document.getElementById('rOrders');
  rOrders.innerHTML = '';

  if (orders.length === 0) {
    rOrders.innerHTML = '<p>No orders found.</p>';
    return;
  }
  document.getElementById('totalOrder').innerHTML = orders.length
  orders.forEach(order => {
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order-box';
    orderDiv.innerHTML = `
      <h3>${order.name} (${order.ordertype})</h3>
      <p><strong>Email:</strong> ${order.email}</p>
      <p><strong>Phone:</strong> ${order.phone}</p>
      <p><strong>Items:</strong><br>${order.items.join('<br>')}</p>
      <p><strong>Total:</strong> ₹${order.total}</p>
      <p><strong>Instructions:</strong> ${order.instructions}</p>
      <hr>
    `;
    rOrders.appendChild(orderDiv);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('adminLoggedIn') === 'true') {
    loadRecentOrders();
  }
});
