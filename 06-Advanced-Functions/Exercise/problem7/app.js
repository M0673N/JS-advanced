function calculator() {
    let selector1 = '';
    let selector2 = '';
    let result = '';

    let mapper = {
        init: (sl1, sl2, rs) => {
            selector1 = document.querySelector(sl1);
            selector2 = document.querySelector(sl2);
            result = document.querySelector(rs);
        },
        add: () => {
            result.value = Number(selector1.value) + Number(selector2.value)
        },
        subtract: () => {
            result.value = Number(selector1.value) - Number(selector2.value)
        }
    }
    return mapper;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');