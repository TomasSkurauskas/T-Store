var itemName = new Array();
	itemName[0] = "Apple";
	itemName[1] = "Apricot";
	itemName[2] = "Avocado";
	itemName[3] = "Breadfruit";
	itemName[4] = "Bilberry";
	itemName[5] = "Blackberry";
	itemName[6] = "Blackcurrant";
	itemName[7] = "Blueberry";
	itemName[8] = "Boysenberry";
	itemName[9] = "Cantaloupe";
	itemName[10] = "Currant";
	itemName[11] = "Cherry";
	itemName[12] = "Cherimoya";
	itemName[13] = "Chili";
	itemName[14] = "Cloudberry";
	itemName[15] = "Coconut";
	itemName[16] = "Damson";
	itemName[17] = "Dragonfruit";
	itemName[18] = "Durian";
	itemName[19] = "Elderberry";
	itemName[20] = "Grape";
	itemName[21] = "Grapefruit";
	itemName[22] = "Kiwi";
	itemName[23] = "Lemon";
	itemName[24] = "Lime";
	itemName[25] = "Loquat";
	itemName[26] = "Melon";
	itemName[27] = "Mango";
	itemName[28] = "Legume";
	itemName[29] = "Guava";
	itemName[30] = "Huckleberry";
	itemName[31] = "Huckleberry";
	itemName[32] = "Jambul";
	itemName[33] = "Feijoa";
	itemName[34] = "Lychee";
	itemName[35] = "Jujube";
	itemName[36] = "Pear";
	
var itemPrice = new Array();
	itemPrice[0] = "1.23";
	itemPrice[1] = "0.96";
	itemPrice[2] = "3.12";
	itemPrice[3] = "3";
	itemPrice[4] = "4.2";
	itemPrice[5] = "2";
	itemPrice[6] = "2.33";
	itemPrice[7] = "0.65";
	itemPrice[8] = "0.54";
	itemPrice[9] = "0.88";
	itemPrice[10] = "0.78";
	itemPrice[11] = "0.54";
	itemPrice[12] = "0.88";
	itemPrice[13] = "0.99";
	itemPrice[14] = "1.99";
	itemPrice[15] = "2.99";
	itemPrice[16] = "2.2";
	itemPrice[17] = "3.21";
	itemPrice[18] = "2.12";
	itemPrice[19] = "1.21";
	itemPrice[20] = "2.3";
	itemPrice[21] = "2.1";
	itemPrice[22] = "0.50";
	itemPrice[23] = "2.1";
	itemPrice[24] = "1.63";
	itemPrice[25] = "2.21";
	itemPrice[26] = "3.12";
	itemPrice[27] = "2.32";
	itemPrice[28] = "1.56";
	itemPrice[29] = "2.99";
	itemPrice[30] = "1.99";
	itemPrice[31] = "2.3";
	itemPrice[32] = "1.32";
	itemPrice[33] = "0.99";
	itemPrice[34] = "2.3";
	itemPrice[35] = "4.12";
	itemPrice[36] = "3.21";
	
function start()
{	
createButtons();
var salePersonName = document.getElementById("username").value;
var salePersonPassword  = document.getElementById("password").value;

salePersonPassword.ignoreCase
	if(salePersonName== "Tomas" && salePersonPassword == "Tomas")
	{
		window.location.href="HTML/store.html";
	}
	else
	{
		alert("Erorr wrong details\nName:Tomas\nPassword: Tomas");
	}
}

function getDateTime() 
{
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
	
		
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
  //  var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second; 
	var date = year+'/'+month+'/'+day;
	var time =  hour+':'+minute+':'+second; 
	 document.getElementById("date").innerHTML = date;
	 document.getElementById("time").innerHTML = time;
	 // refresh the clock to tick
	 setInterval("getDateTime() ",1000)
}

function createButtons()
{
	
	var presetButton = document.getElementById("itemsButtons");
	
	for(i =1 ; i<itemName.length  ;i++)
	{
	var buttonnode = document.createElement('input');
	var action = 'onClickButton('+i+')';
	
	buttonnode.setAttribute('type','button');
	buttonnode.setAttribute('id','itemButton');
	buttonnode.setAttribute('name','me');
	buttonnode.setAttribute('value',itemName[i]);
	buttonnode.setAttribute('OnClick',action);
	presetButton.appendChild(buttonnode);	
	}
	
}
function onClickButton(i)
{
	register.registerItem( itemName[i], parseFloat( itemPrice[i] ),parseFloat(prompt("Please enter Quantity:","1") ));
}

function CashRegister()
{
	this.numOfTransacton = 0;	
    this.grandTotal = 0;
    this.total = 0;
	this.totalCashSales = 0;
	this.totalCreditCardSales = 0;
	this.resetReceipt = false;
	this.numOfItems = 0;
}


CashRegister.prototype.display = function (itemDis, price,itemQuantity )
{
    var receipt = document.getElementById("receipt")
	 var vat = document.getElementById("vat")
    
     var tr = document.createElement("tr");
	
	 var itemNo = document.createElement("td");
     itemNo.innerHTML = this.numOfItems+".";
	 itemNo.id = "no"; 
	 itemNo.className = "alignCenter";
     tr.appendChild(itemNo);
	
	 var itemName = document.createElement("td");
     itemName.innerHTML = itemDis;
	 itemName.id = "item"; 
	 itemName.className = "alignCenter";
     tr.appendChild(itemName);
	 
	 var amount = document.createElement("td");
     amount.innerHTML = '\u20AC'+ price.toFixed(2); 
	 amount.className = "alignRigh";
	 amount.id = "price"; 	 
     tr.appendChild(amount);
	 
	 
	 var quanitity = document.createElement("td");
     quanitity.innerHTML = itemQuantity; 
	 quanitity.className = "alignCenter";
	 quanitity.id = "quantity"; 	 
     tr.appendChild(quanitity);
	 
	 
	 var itemTotal = price * itemQuantity;
	 var totalItem = document.createElement("td");
     totalItem.innerHTML = '\u20AC'+itemTotal.toFixed(2); 
	 totalItem.className = "alignRigh";
	 totalItem.id = "quantity"; 	 
     tr.appendChild(totalItem);
	 
	document.getElementById('subtotal').innerHTML = itemTotal.toFixed(2); 
   receipt.appendChild(tr); 

    document.getElementById("item").value = "";
	document.getElementById("amount").value = "";
}

CashRegister.prototype.clearReceipt = function () 
{
    document.getElementById("receipt").innerHTML = " "; 
}


CashRegister.prototype.registerItem = function (itemName, price,quantity )
{
	this.total = (this.total + price) * quantity;
	this.numOfItems +=1;
    this.display(itemName, price,quantity );	
}




var register = new CashRegister();

function EnteritemDetails()
{
    var itemText = document.getElementById("item").value ;
	var amountText = document.getElementById("amount").value ;
	var quantity = document.getElementById("quant").value ;
	register.registerItem( itemText, parseFloat( amountText ),parseFloat(quantity));
}


