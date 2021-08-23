
#Deepcopy an object

const obj = {
    b : 10,
    c : {
            d : {
		e : 20
		}
    	}
}

var objCopy = {};

function deepCopy(sourceObject, destinationObject) {

    for(key in sourceObject) {
        if(typeof sourceObject[key] != "object") {
            destinationObject[key] = sourceObject[key];
        } else {
            destinationObject[key] = {};
            deepCopy(sourceObject[key], destinationObject[key]);
        }
    }
}

deepCopy(obj, objCopy);
console.log(obj.c.d.e); //will print 30
console.log(objCopy.c.d.e); //will print 20