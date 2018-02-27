module.exports = function getZerosCount(number) {
  // your implementation
    let zeros = 0;
    let j = 1;
    if (number>4) {
        for (let i=5; i<=number; i+=5) {
            j = i;
            while (j%5==0) {
                j/=5;
                zeros++;
            }
        }
    }
    return zeros;
}
