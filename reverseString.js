a=prompt();
var b=a.split(" ")
for(var i=0;i<b.length;i++){
    s=b[i];
    temp=""
    j=s.length-1;
    while(j>=0){
        temp+=s[j];
        j-=1
    }
    b[i]=temp;
}
console.log(b.join(" "));
