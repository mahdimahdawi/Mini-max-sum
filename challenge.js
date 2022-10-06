function miniMaxSum(arr) {
     arr = arr.sort((a, b) => a - b);
    const sum = arr.reduce(function(a, b) { return a + b; }, 0);
    const min = sum-arr[arr.length-1];
    const max = sum-arr[0];
    const a = [min, max];
    console.log(min,max);
    return a;
}
