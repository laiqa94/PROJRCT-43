



let magician : string[] =['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumdore'];

function copyArry(arr:string[]){
    return[...arr]
}

function make_great(magicianArry:string[]){

      for(let i=0; i<magicianArry.length; i++){

         magician[i] = 'the Great' + magicianArry[i]
      }
}

function show_magician(magician:string[]){

   magician.forEach(element =>{
      console.log(element);
   })
}

const copyMagicianArry=copyArry(magician);

make_great(copyMagicianArry);

console.log('\n\nThis is my orignal arry:')
show_magician(magician);

console.log('\n\nThis is my modified copy of the arry:');
show_magician(magician);