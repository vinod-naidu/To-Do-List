 let input = document.getElementById('input');
let btn = document.getElementById('btn');
let taskBody = document.getElementById('taskBody');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  let task = input.value.trim();
  if (task === '') return;

  // Create table row
  let row = document.createElement('tr');

  // Create name column
  let nameCell = document.createElement('td');
  nameCell.textContent = task;

  // Create delete column
  let deleteCell = document.createElement('td');
  let delBtn = document.createElement('button');
  delBtn.innerHTML = '<img src="deleteSymbol.png" width:"20px" height:"20px">';
  delBtn.classList.add('delete-btn');
  delBtn.addEventListener('click', () => {
    row.remove();
  });

  deleteCell.appendChild(delBtn);

  // Add cells to row
  row.appendChild(nameCell);
  row.appendChild(deleteCell);

  // Add row to table
  taskBody.appendChild(row);

  // Clear input
  input.value = '';
});


    
