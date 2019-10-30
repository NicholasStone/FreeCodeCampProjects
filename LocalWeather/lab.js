let obj = {
    a:1,
    b:2,
    c:3
};

let queries = [];
if (Object.getOwnPropertyNames(obj).length !== 0){
    for (let [key, val] of Object.entries(obj)){
        queries.push(`${key}=${val}`);
    }
}
let query = queries.join("&");
console.log(`?${query}`);