function twoSum(array,target){
    const mp = new Map();
    for (let i = 0; i < array.length; i++) {
        const data = target -array[i];
        if (mp.has(data)) {
            return [mp.get(data),i]
        }
        mp.set(array[i],i)
    }
    throw new Error('not found')
}

const array =[2,7,11,13]
const target = 9
console.log(twoSum(array,target));