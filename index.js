// Write your solution in this file!
const driver = {
  foo: "bar",
  broadway:"firsthand",
  foo: "bar"
};

function updateDriverWithKeyAndValue(driver, key, value){
 return  Object.assign({}, driver, {[key]:value});
 
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  
  return Object.assign(driver, {[key]:value});
}

function deleteFromDriverByKey(driver, key){
 let newdriver =  Object.assign({}, driver);
  delete newdriver[key];
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver
 let newdriver = deleteFromDriverByKey(driver, "broadway")
 delete newdriver.key;
 return newdriver;
}

function destructivelyDeleteFromDriverByKey(){
  

}