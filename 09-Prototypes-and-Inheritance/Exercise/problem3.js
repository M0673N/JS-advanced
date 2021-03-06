function extensibleObject() {
    let obj = {};
    let objProto = Object.getPrototypeOf(obj);
    obj.extend = function (otherObj) {
        for (const key in otherObj) {
            if (typeof otherObj[key] === 'function') {
                objProto[key] = otherObj[key];
            } else {
                obj[key] = otherObj[key];
            }
        }
    }
    return obj;
}

// const myObj = extensibleObject();
// const template = {
//     extensionMethod: function () {
//     },
//     extensionProperty: 'someString'
// }
// myObj.extend(template);
// console.log(myObj)