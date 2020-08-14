var obj = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value){
 object,[key];value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
var object1=delete object[key];
return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
