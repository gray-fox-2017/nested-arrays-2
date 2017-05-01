let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ]
  // [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  // [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  // [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

function convert_roster_format (nestedArray) {
  let hasil = [];
  for(let i=1; i<nestedArray.length; i++){
    let tampung = {};
    for (let j=0; j<nestedArray[i].length; j++) {
      tampung[ nestedArray[0][j] ]  = nestedArray[i][j];
    }
    hasil.push(tampung);
  }
  return hasil;
}

let object_roster = convert_roster_format(roster)
console.log(object_roster);
// console.log(object_roster[2])
