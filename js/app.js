document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let hireDate = document.getElementById('hire_date').value;
    let photo = document.querySelector("form input[type=file]").files[0];

    
    let newRow = document.createElement('tr');
    
    // 
    newRow.innerHTML = `
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${email}</td>
      <td>${hireDate}</td>
      <td><img src="${URL.createObjectURL(photo)}" style="max-width: 100px;"></td>
      <td><button onclick="deleteUser(this)">Delete</button></td>
    `;

   
        document.getElementById('employeeList').appendChild(newRow);

    
    this.reset();
  });

  // delete user
  function deleteUser(button) {
    
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }