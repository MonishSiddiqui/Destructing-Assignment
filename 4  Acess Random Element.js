function extract(arr){
    const [first,second,third, , , , last] = arr;
    return [first,second,last];
}
const array = [1,2,3,4,5,6,7];
console.log(extract(array));