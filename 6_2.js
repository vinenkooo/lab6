var array = []
function input_array(m,n){
    for (let i = 0; i < m; i++){
        let time_array = [];
        for (let j = 0; j < n; j++){
            console.log('Введите', j, 'столбец', i, 'строки')
            let new_number = Number(prompt())
            time_array.push(new_number)
        }
        array.push(time_array)
    }
    console.log(array)
}
var m = Number(prompt("Введите количество строк"));
var n = Number(prompt("Введите количество столбцов"));
input_array(m,n)

var k = 1;
var m = array[0].length;
var n = array.length;

for (let i = 0; i < n; i++) {
    array[i].splice(k,1);
}
console.log(array);


