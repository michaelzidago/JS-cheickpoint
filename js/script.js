// function counttrue (tab)
// {
//   let sum=0;
//   for (let i=0; i<tab.length; i++)
//   {
//     if (tab [i]==true)
//     {
//       sum=sum+1;
//     }
//   }
//   return sum;
  
// }

// console.log (counttrue([true,false,true,false,true] ))

function filterarray (tab)
{
  let arr= [];
  for (let i=0; i<tab.length; i++)
  {
    if(typeof tab[i]=="number")
    {
      arr.push (tab[i]);
    }

  }

  return arr;

}

console.log(filterarray(['a',12,'g',18]))