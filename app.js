// write code here
<script>
        for (let m=2; m<13; m++) {
            for (let n=1; n<13; n++) {
                document.querySelector('#p1').innerHTML += `${m}x${n} = ${m*n} <br>`  
            }   // for n
            document.querySelector('#p1').innerHTML += "<hr>"
        }   //for m
    </script>
