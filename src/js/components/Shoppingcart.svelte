<script>
    import {getLocalStorage} from "../utils.mjs";
    const cartItems = getLocalStorage("so-cart");

    //Cart total
    function calculateTotal() {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.FinalPrice;
        });
        if (totalPrice == 0) {
            //document.getElementById("cart-footer").style.display = "none";
            return totalPrice;
        }
        else {
        return totalPrice;
        }   
    }

    //Remove item from cart
    function removeItem() {
        let id = document.getElementsByTagName("span")[0].id;
        let index = cartItems.findIndex(item => item.Id == id);
        cartItems.splice(index, 1);
        localStorage.setItem("so-cart", JSON.stringify(cartItems));
        location.reload();
    }
</script>

<h2>My Cart</h2>

{#if cartItems.length === 0}
    <p>Your cart is empty</p>
    <a href="/index.html">Continue Shopping</a>
{:else}
    <ul class="product-list">
        {#each cartItems as item}
        <li class="cart-cart divider">
            <div class="remove-button-flex">
                <button class="remove-item-button" on:click={removeItem}><span id="{item.Id}">X</span></button>
            </div>
            <a href="/product_pages/index.html?productid={item.Id}"
            class="cart-card__image">
            <img src={item.Image} alt={item.Name}>
            </a>
            <a href="#">
                <h2 class="card__name">{item.Name}</h2>
            </a>
            <p class="cart-card__color">{item.Colors[0].ColorName}</p>
            <p class="cart-card__quantity">Quantity:{item.quantity}</p>
            <p class="cart-card__price">${item.FinalPrice}</p>
        </li>
        {/each}
    </ul>
    <div id="cart-footer"><p>Total Price: $<span id="totalPrice">{calculateTotal()}</span></p></div>
    <a href="/checkout/index.html">
        <button>Checkout</button>
    </a>
{/if}
