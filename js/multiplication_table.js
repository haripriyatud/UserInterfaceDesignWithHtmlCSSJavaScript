function createMultiplicationTable(rows,columns){
    let html ='<table style="font-family: arial, sans-serif;border-collapse: collapse;  width: 100%;">';
    for(let rowNumber of Array(rows).keys()){
        html = html + '<tr style="text-align: left;  border: 1px solid #dddddd;  padding: 8px;">';
        for(let columnumber of Array(columns).keys()){
            html = html + `<td style="text-align: left;  border: 1px solid #dddddd;  padding: 8px;">${(rowNumber+1)*(columnumber+1)}</td>`
        }

        html = html + '</tr>'
    }

    html=html+ '</table>'

    return html;

}

function generateTable() {
    let rowsInput = document.getElementById('rows-input').value;
    let columnsInput = document.getElementById('columns-input').value;
    let rows=Number(rowsInput);
    let columns= Number(columnsInput);
    if(!isNaN(rows)&&!isNaN(columns)){
        let tableHTML = createMultiplicationTable(rows,columns);
        document.write(tableHTML);
    }
    else {
        alert("Invalid input");
    }  
}
  