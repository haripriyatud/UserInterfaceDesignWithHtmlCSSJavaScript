function insert_data(){
    var table_data = [{
        EmployeeID:1676771,
        EmployeeName: "Sam",
        Designation: "System Engineer"
      }, {
        EmployeeID:78788823,
        EmployeeName: "Bobby",
        Designation: "Database Engineer"
      }, {
        EmployeeID:78451299,
        EmployeeName: "Patricia",
        Designation: "Machine Learning Engineer"
      }];

      
      table = document.getElementById("table");
      
      var currentTransaction;
      var columns = ["EmployeeID", "EmployeeName", "Designation"];
      for (var i = 0; i < table_data.length; i++) {
        var newRow = table.insertRow(table.length);
      
        currentTransaction = table_data[i];
        for (var b = 0; b < columns.length; b++) {
          var cell = newRow.insertCell(b);
          cell.innerText = currentTransaction[columns[b]];
        }
      }
}

insert_data();


