{
    //
    function removeDuplicates(nums: number[]): number[] {
        return nums.filter((item, index) => nums.indexOf(item) === index);
    }
    // const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    // console.log(result);
    //
}