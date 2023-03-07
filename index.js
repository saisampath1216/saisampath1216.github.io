
$(document).ready(async function () {

    let pageTitle = 'Shop Online';
    let cartTotal = 1099;
    let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzYW1wYXRoIiwiYWNyIjoibG9hMSIsInN1YiI6IjU0NDc1OTA2IiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzE0MTg1NTgwLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJTYW1wYXRoIiwicGhvbmVfbnVtYmVyIjoiKzEtMTAtMzQ0LTM3NjUzMzMifQ.WVX9hJvNMEHlKbMPgMsX4AdD2EyMdJm0TlHEPQgxdqOFauLN5z4cI_UCqJjiVER6ZekG5wzOudkFVLrXX1cDT4nfYA4QmgvNCVYxWBFFFAopV8Vfz3G2Lm5vBHpekPci0Ln6JFHVHXcm-rMi78x-Fosh1Csu-Ta6V23E3y8oR5nMm7w_O6CbIDUYKtrkgQUc1ikGYRrNd__xP9fIiFayYNxqNdtVvvDZ_FHiekVCaPNyarkstZwfv3TVSQEEbPgNGOjy8kTt8VUdQlXoXzE8a2DUlQwjYcI-pU86OAm6IUUoWz1FxDmvSWGA4LxsPOlrpAqi5S9IjNeAg2GNn6dkqg
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
  
