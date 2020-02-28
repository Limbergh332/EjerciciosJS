const sum=nums=> {

    if (nums.length === 0) {
        return 0;
    }else{
        let [first, ...rest] = nums;
        return first + sum(rest);
    }
}
    console.log(sum([1 + 3 + 5 + 7 + 9]));
    