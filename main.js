var table = document.getElementById('tableOutput')
document.getElementById('revField').value = ''
const makeTableBtn = document.getElementById('makeTableBtn').addEventListener('click', function () {
    const revField = document.getElementById('revField');
    const tableField = document.getElementById('tableField');

    parseRev(revField.value);
});

function parseRev (revVal) {
    let revSpace = revVal;
    const tabPattern = /\t/;
    const linePattern = /\n/;
    let lineSplit = revSpace.split(linePattern);
    let spaceList = revSpace.split(/\n/g);
  let lineArray = []
  for (let line in lineSplit) {
    
    let split = lineSplit[line].split(tabPattern)
    lineArray[line] = split
  }
  //console.log(lineArray)
    
    
    
    // console.log('TAB LIST: ')
    // console.log(tabList)
    // console.log(lineSplit)
    createTable(lineArray)
    
}

function createTable(lineArray) {
  for (let row in lineArray) {
    var tr = document.createElement('tr')
    //console.log(lineArray[row])
  for (let cell in lineArray[row]) {
    var td= document.createElement('td')
    //console.log(lineArray[row][cell])
    td.appendChild(document.createTextNode(lineArray[row][cell]))
    tr.appendChild(td)
        }
   table.appendChild(tr)

    }
  console.log(table)
}