function countProps(object) {
    let propCount = 0;
    // Change code below this line
    for (const key in object) {
        if (object.hasOwnProperty(key)){

            propCount += 1;

        }
    }
    // Change code above this line
    return propCount;
}
countProps({ name: "Mango", age: 2 })







function swapElements(nums) {
    const tmp = nums[0];
    nums[0] = nums[1];
    nums[1] = tmp;
}

function swapLastTwoElements(nums) {
    const len = nums.length;
    const tmp = nums[len - 1];
    nums[len - 1] = nums[len - 2];
    nums[len - 2] = tmp;
}