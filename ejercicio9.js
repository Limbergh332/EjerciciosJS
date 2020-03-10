//9.Realizar una función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N
const sum=nums=> {

    if (nums.length === 0) {
        return 0;
    }else{
        let [first, ...rest] = nums;
        return first + sum(rest);
    }
}
    console.log(sum([1 + 3 + 5 + 7 + 9]));
    
