
$(document).ready(async function () {

    let pageTitle = 'Shop Online';
    let cartTotal = 1099;
    let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ
'
    appendData();
  
  
    $('.home').click(function () {
      localStorage.clear();
      window.location.href = 'index.html';
    })
  
    $('#authenticated').click(function () {
  
      localStorage.setItem('token',token)
      window.location.href = 'authenticated.html';
  
    })
    $('#unauthenticated').click(function () {
  
      localStorage.clear();
      window.location.href = 'unauthenticated.html';
  
    })
  
  
    function appendData() {
      $('#cartTotal').val(cartTotal);
      $('#pageTitle').text(pageTitle)
    }
  
  
  
  });
  
