function kthSmallest(arr, n, k)
{
    arr.sort((a,b) => a-b);
    return arr[k - 1];
}
    let arr = [ 12, 3, 5, 7, 19 ];
    let n = arr.length, k = 2;
    document.write("K'th smallest element is " + kthSmallest(arr, n, k));
