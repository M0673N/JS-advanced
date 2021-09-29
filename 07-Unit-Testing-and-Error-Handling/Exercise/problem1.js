function solve(obj) {
    let possibleMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let regexUri = /^[A-Za-z0-9.]+$/gm;
    let possibleVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let regexMessage = /^[^<>\\&'"]*$/gm;

    if (!possibleMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (obj.uri === undefined || !regexUri.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!possibleVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (obj.message === undefined || !regexMessage.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj;
}

// console.log(solve({
//         method: 'GET',
//         uri: 'svn.public.catalog',
//         version: 'HTTP/1.1',
//         message: ''
//     }
// ));
// console.log(solve({
//         method: 'OPTIONS',
//         uri: 'git.master',
//         version: 'HTTP/1.1',
//         message: '-recursive'
//     }
// ));
// console.log(solve({
//         method: 'POST',
//         uri: 'home.bash',
//         message: 'rm -rf /*'
//     }
// ));

// module.exports = createCalculator;