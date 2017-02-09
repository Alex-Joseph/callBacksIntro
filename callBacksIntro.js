// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach( function (name, index) {
    if (name === "Waldo") {found (index)} } )
}


function actionWhenFound(indexNum) {
  console.log(`Found Waldo at ${indexNum}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
/* Modify the callback function in the previous example so that logs the index
of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will
need to modify actionWhenFound to receive the index.) */
