import { useEffect, useState } from 'react'

function DataFetch() {
  const [mainStr, setMainStr] = useState('');


  useEffect(() => {
    fetch("https://www.terriblytinytales.com/test.txt")
    .then((response) => response.text())
    .then((data) => setMainStr(data))
  });

const lower = mainStr.toLowerCase();
const textArr = lower.split(" ");

const obj = {};
function giveFreq() {
  for (let i = 0; i <= textArr.length; i++) {
    obj[textArr[i]] = 0;
  }
  for (let i = 0; i <= textArr.length; i++) {
    obj[textArr[i]]++;
  }
  return obj;
}

const newObj = giveFreq();

let sortable = [];
for (var count in newObj) {
  sortable.push([count, newObj[count]]);
}

sortable.sort(function(a, b) {
  return (a[1] > b[1] ? -1 : 1);
});

let resArr = sortable.slice(0, 20);

return resArr;
}

export default DataFetch
