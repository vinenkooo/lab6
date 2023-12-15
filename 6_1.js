function quadratic_equation(a,b,c){
    let discriminant = (b**2)-(4*a*c);
    if (discriminant > 0) {
        let result_1 = ((((-1)*b)+Math.sqrt((discriminant)))/(2*a));
        let result_2 = ((((-1)*b)-(Math.sqrt(discriminant)))/(2*a));
        console.log('уравнение имеет 2 корня');
        console.log(result_1);
        console.log(result_2);
    }

    if (discriminant == 0) {
        let result_1 = (((-1)*b)/2*a);
        console.log('уравнение имеет 1 корень');
        console.log(result_1);
    } 
    if (discriminant < 0){
        console.log("Нет действительных корней");
    }
}

var a = Number(prompt("Введите коэффициент A"));
var b = Number(prompt("Введите коэффициент B"));
var c = Number(prompt("Введите коэффициент C"));
quadratic_equation(a,b,c);

