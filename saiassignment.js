const List1=['Arjun','Adwait','Swapnil','Amit','Vishal','Adnan']
const List2=['Adwait','Laxman','Amit','Adnan','Nitin','Gaurav']

const uniqueSetOfList1NotInList2=[]
const uniqueSetOfList2NotInList1=[]
const setOfUsersPresentInBothList1AndList2=[]


for (let j of List2){
    if (List1.includes(j)){
        continue;
    }else{
        uniqueSetOfList2NotInList1.push(j)
    }
}

for (let i of List1){
    if (List2.includes(i)){
        continue;
    }else{
        uniqueSetOfList1NotInList2.push(i)
    }
}


for (let k of List1){
    if (List2.includes(k)){
        setOfUsersPresentInBothList1AndList2.push(k)
    }
}

console.log(uniqueSetOfList1NotInList2)
console.log(uniqueSetOfList2NotInList1)
console.log(setOfUsersPresentInBothList1AndList2)
