a=prompt();
b=prompt();
a=a.toLowerCase();
b=b.toLowerCase();
c=[...a];
d=[...b];
c=c.sort().join("");
d=d.sort().join("");
if(c==d){
    console.log(true);
}
else{
    console.log(false);
}