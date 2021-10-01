


let isBadVersion = (num)=>{
  if (num === 4) {
    return true
  } else {
    return false
  }
}


var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let low = 0;
    let high = n;
    while (low<high) {

      const mid = Math.floor((high+low)/2)

      if (isBadVersion(mid)) {
        high = mid
      } else {
        low = mid+11

      }
    }

    return high;
  };
};


console.log(solution(isBadVersion(4)));



// console.log([...Array(5)]);