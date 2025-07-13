function removeGivenElement(arr,val)
{
    let x = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] != val)
        {
            arr[x] = arr[i];
            x++;
        }
    }
    return arr;
}

console.log(removeGivenElement([8,3,7,6,3,5,3],3))