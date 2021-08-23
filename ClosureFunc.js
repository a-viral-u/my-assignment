#Closure func

function sum(x) 
{

	return function (y)
 
	{

		return x + y

	}

}



function sub(x) 
{

	return function (y)
 
	{

		return x - y

	}

}


function reset(x) 
{

	return function ()
 
	{

		x = 0;
	}

}


function counter(x)
{
	return function incCounter()
	
	{
		x = x+1;
	}
	return function decCounter()
	
	{
		x = x-1;
	}
}

function print(x) 
{

	return function ()
 
	{

		console.log(x);
	}

}



var x = 10;
var y = 23;
console.log(sum((x)(y)));
console.log(sub((x)(y)));
reset(x);
const incCounter = counter(x);
incCounter(x);
const decCounter = counter(x);
decCounter(x);
print((x));
