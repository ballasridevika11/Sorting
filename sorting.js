function sort(){
    let arr=[100,20,320,1,0,21]
    console.log(arr.sort((a,b)=>{
    return b-a
    }));
}
sort()