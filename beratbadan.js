var beratbadan = [90,31,55,70,80,40,30]
var jumlahdiatasrata = 0
var total 


for (let index = 0; index < beratbadan.length; index++) {
        total += beratbadan[index];
        var ratarata = total / beratbadan.length;
        if (beratbadan[index] > ratarata) {    
            jumlahdiatasrata++
        }
    } 
    
console.log("jumlah berat badan :"+jumlahdiatasrata)
console.log("Jumlah Rata : "+ratarata)
