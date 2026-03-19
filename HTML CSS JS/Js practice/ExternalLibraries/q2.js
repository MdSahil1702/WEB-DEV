import cloneDeep from "https://esm.sh/lodash.clonedeep"

export function deepclone(){
const a={
    name: "Siddiqui Md Sahil Ashfaq Ahmed",
    rollno:20252651055
}

const copy=cloneDeep(a);

console.log(`this is the deepclone copy using the external library from q2 :`);

console.log(copy);
}