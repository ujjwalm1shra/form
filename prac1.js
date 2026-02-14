function reverse(str){
    let rev="";
    for(let i=0;i<str.length;i++){
        rev=rev+str[str.length-i-1];
    }
    console.log(rev);
}
reverse("Heelo");