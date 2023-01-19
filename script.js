
let eventDate;
let promotionLength;
let productHandoff;
let marketingHandoff;
let productionLaunch;


$(":submit").click(function(event) {
    // prevents page from refreshing on submit
    event.preventDefault();

    // grabs date from date input
    eventDate = new Date($("#eventDate").val());
    let day = eventDate.getUTCDate();
    let month = eventDate.getUTCMonth();
    let year = eventDate.getUTCFullYear();

    eventDate = new Date(year, month, day);
    
    // grabs promotion length
    promotionLength = $("#promotionLength").val();
    // converts weeks to days
    promotionLength = promotionLength * 7;
    // subtracts promotionLength in days from the event launch date to give starting promotion date
    let promotionDate = new Date(eventDate.getTime() - (promotionLength * 24 * 60 * 60 * 1000));
    console.log(eventDate);
    console.log(promotionDate);
    productHandoff = new Date(promotionDate.getTime() - (42 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-us');
    marketingHandoff = new Date(promotionDate.getTime() - (28 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-us');
    productionLaunch = new Date(promotionDate.getTime() - (2 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-us');

    $("#productHandoff").text(productHandoff);
    $("#marketingHandoff").text(marketingHandoff);
    $("#productionLaunch").text(productionLaunch);
})