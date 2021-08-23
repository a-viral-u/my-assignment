//Binary search

binarySearch = function(arr, low, high, key)
{
	var mid;
	if(low<=high)
	{
		mid = parseInt((high+low)/2);
        console.log(mid);
		if(key==arr[mid])
		{
			console.log("found:"+mid);
            return;
		}
		else if(arr[mid]<key)
		{
			binarySearch(arr, mid+1, high, key);
		}
		else
			binarySearch(arr, low, mid-1, key);
	}
    else
        return;
}

var arr = [-12,0,3,32,45,1200];
var key = 1200;
binarySearch(arr, 0, arr.length-1, key);