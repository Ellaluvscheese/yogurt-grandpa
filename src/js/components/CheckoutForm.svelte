<script>
  import { getLocalStorage, formDataToJSON } from "../utils.mjs";
    import { checkout } from "../externalServices.mjs";
  export let key = "";
  let list = [];
  let itemTotal = 0;
  let tax = 0;
  let shipping = 0;
  let orderTotal = 0;

  // Initial Setup
  const init = function () {
    list = getLocalStorage(key);
    calculateItemSummary();
  };
  const calculateItemSummary = function () {
    // calculate the total of all the items in the cart
    const amounts = list.map((item) => item.FinalPrice);
    itemTotal = amounts.reduce((sum, item) => sum + item);
  };
  const calculateOrderTotal = function () {
    shipping = 10 + (list.length - 1) * 2;
    tax = itemTotal * 0.06.toFixed(2);
    orderTotal = parseFloat(itemTotal) + parseFloat(shipping) + parseFloat(tax).toFixed(2);
  };
  // takes the items currently stored in the cart (localstorage) and returns them in a simplified form.
const packageItems = function (items) {
// convert the list of products from localStorage to the simpler form required for the checkout process. Array.map would be perfect for this.
  const packagedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: item.quantity,
    };
    return packagedItems;
  });
}

const handleSubmit = function (e) {
  // build the data object from the calculated fields, the items in the cart, and the information entered into the form
  // remember that the form that was submitted can be found two ways...this or e.target 
  // call the checkout method in our externalServices module and send it our data object.
}

  
</script>

<form name="checkout" on:submit|preventDefault={handleSubmit}>
<fieldset class="shipping">
  <legend>Shipping</legend>
  <label for="fname">First Name:</label>
  <input type="text" name="fname" required />

  <label for="lname">Last Name:</label>
  <input type="text" name="lname" required />

  <label for="street">Street:</label>
  <input type="text" name="street" required />

  <label for="city">City:</label>
  <input type="text" name="city" required />

  <label for="state">State:</label>
  <input type="text" name="state" required />

  <label for="zip">Zip:</label>
  <input
    type="text"
    id="zip"
    name="zip"
    title="Enter a valid ZIP Code"
    required
  />
</fieldset>

<fieldset class="payment">
  <legend>Payment</legend>
  <label for="cardNumber">Card number:</label>
  <input
    type="tel"
    name="ccardNumber"
    inputmode="numeric"
    
    autocomplete="cc-number"
    maxlength="19"
  />
  <label for="expiration">Expiration:</label>
  <input type="date" name="expiration" required />
  <label for="code">Security Code:</label>
  <input type="tel" name="code" inputmode="numeric" maxlength="3" required />
</fieldset>

<fieldset class="checkout-summary">
  <legend>Order Summary</legend>
  <p>Item Subtotal(${orderTotal}) ${orderTotal}</p>
  <p>Shipping Estimate ${shipping}</p>
  <p>Tax ${tax}</p>
  <p><b>Order Total</b> ${orderTotal}</p>
</fieldset>

<button id="checkoutSubmit" type="submit">Checkout</button>
</form>
<style>
    form {
      max-width: 500px;
      margin: 0 auto;
    }
    * + fieldset {
      margin-top: 1em;
    }
    label {
      display: block;
    }
    input {
      width: 100%;
      font-size: 1.2em;
    }
  
    .checkout-summary > ul {
      padding-left: 0;
      list-style-type: none;
    }
    .checkout-summary li {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  </style>

<!-- Things to add and names
    { 
  orderDate: '2021-01-27T18:18:26.095Z',
  fname: "John",
  lname: "Doe",
  street: "123 Main",
  city: "Rexburg",
  state: "ID",
  zip: "83440",
  cardNumber: "1234123412341234",
  expiration: "8/21",
  code: "123",
  items: [{
    id: "20CXG"
    name: "The North Face Pivoter 27 L Backpack"
    price: 39.99,
    quantity: 1
  }, {
    id: "14GVF",
    name: "Marmot 5°F Rampart Down Sleeping Bag - 650 Fill, Mummy (For Men and Women)",
    price: 229.99,
    quantity: 1
  }],
  orderTotal: "298.18",
  shipping: 12,
  tax: "16.20"
}

pattern="[0-9\s]{(13, 19)}"
-->
