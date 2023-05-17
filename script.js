function threeSum(arr, target) {
    // write your code here
        let newArr = [];
        for(let i = 0; i < arr.length-2; i++){
            for(let j = i+1; j < arr.length-1; j++){
                for(let k = j+1; k < arr.length; k++){
                    let sumOfThree = arr[i] + arr[j] + arr[k];
                    newArr.push(sumOfThree);
                }
            }
        }
          newArr.push(target);
            newArr.sort((a, b)=> a-b);
            console.log(newArr);
            let targetIndex = 0;
            for(let[index, value] of newArr.entries()){
                if(target === value){
                    targetIndex = index;
                }
            }
            if(targetIndex !== 0 && targetIndex !== newArr.length-1){
                let lowestNumOne = newArr[targetIndex] - newArr[targetIndex-1];
                let lowestNumTwo = newArr[targetIndex+1] - newArr[targetIndex];
                return Math.min(lowestNumOne, lowestNumTwo);
            }else if(targetIndex === 0){
                return newArr[targetIndex+1] - newArr[targetIndex];
            }else{
                return newArr[targetIndex] - newArr[targetIndex-1];
            }
    }

module.exports = threeSum;
