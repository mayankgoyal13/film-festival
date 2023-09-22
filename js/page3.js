const validateUserInput = () => {
  let ticketTypeError;
  let ticketQtyError;
  let cardDetailsError;

  const ticketQty = document.getElementById("ticketQty").value;
  const ticketType = document.getElementById("ticketType").value;
  const cardNumber = document.getElementById("cardDetails").value;

  /**Validation for ticket type selction */
  if (!ticketType) {
    ticketTypeError = "Please select ticket type";
    document.getElementById("ticketTypeError").innerHTML = ticketTypeError;
  } else {
    ticketTypeError = "";
    document.getElementById("ticketTypeError").innerHTML = "";
  }

  /**Validation for ticket number field */
  if (!ticketQty) {
    ticketQtyError = "Please enter number of tickets";
    document.getElementById("ticketQtyError").innerHTML = ticketQtyError;
  } else if (isNaN(ticketQty)) {
    ticketQtyError = "Ticket quantity should be a number";
    document.getElementById("ticketQtyError").innerHTML = ticketQtyError;
  } else {
    ticketQtyError = "";
    document.getElementById("ticketQtyError").innerHTML = "";
  }

  /**Validation for card number field */
  if (!cardNumber) {
    cardDetailsError = "Please enter your card number";
    document.getElementById("cardDetailsError").innerHTML = cardDetailsError;
  } else if (isNaN(cardNumber)) {
    cardDetailsError = "Card information should be a number";
    document.getElementById("cardDetailsError").innerHTML = cardDetailsError;
  } else if (cardNumber.length !== 16) {
    cardDetailsError = "Invalid Card number. Card number should be 16 digits";
    document.getElementById("cardDetailsError").innerHTML = cardDetailsError;
  } else {
    cardDetailsError = "";
    document.getElementById("cardDetailsError").innerHTML = "";
  }

  if (
    ticketTypeError === "" &&
    ticketQtyError === "" &&
    cardDetailsError === ""
  ) {
    return true;
  } else {
    return false;
  }
};

const calculateFinalAmount = (ticketPrice, ticketQty) => {
  const subTotal = ticketPrice * ticketQty;
  const taxAmount = (subTotal * 13) / 100;
  const totalAmount = subTotal + taxAmount;

  return {
    sub_total: subTotal,
    tax_amount: taxAmount,
    total_amount: totalAmount,
  }
}

const finalOutputHtml = (ticketPrice, ticketQty, subTotal, tax, total) => {
  const output = `
  <div class="orderSummaryContainer">
    <h1>Successfull!!!</h1>
    <br />
    <div class="summaryList">
      <ul class="resultList">
        <li>
          <strong>Number of Tickets:</strong> 
          <p class="listItem">${ticketQty}</p>
        </li>
        <li>
          <strong>Price per Ticket:</strong> 
          <p class="listItem">$${ticketPrice}</p>
        </li>
      </ul>
    </div>
    <div class="billContainer">
      <div class="billList">
        <p class="billItem">Sub Total: $${subTotal}</p>
        <p class="billItem">HST @ 13%: $${tax}</p>
      </div>
      <div class="billList">
        <p class="final">Final Amount: $${total}</p>
      </div>
    </div>
  </div>
      `
    return output
}
const onPayNow = () => {
  const valitdationResult = validateUserInput();
  let ticketPrice = 0;

  if (valitdationResult) {
    const ticketType = document.getElementById("ticketType").value;
    if (ticketType === "one-day-pass") {
      ticketPrice = 40;
    } else if (ticketType === "full-day-pass") {
      ticketPrice = 100;
    } else if (ticketType === "vip-pass") {
      ticketPrice = 250;
    }

    let ticketQty = document.getElementById("ticketQty").value;

    const finalAmount = calculateFinalAmount(ticketPrice, ticketQty);
    console.log('finalAmount', finalAmount);

    let finalOp = finalOutputHtml(ticketPrice, ticketQty, finalAmount.sub_total, finalAmount.tax_amount, finalAmount.total_amount)
    
    console.log("finalOp", finalOp);
    document.getElementById("orderSummary").innerHTML = finalOp;
  } else {
    document.getElementById("orderSummary").innerHTML = '';
  }


};

document.getElementById("payNowBtn").addEventListener("click", onPayNow);
