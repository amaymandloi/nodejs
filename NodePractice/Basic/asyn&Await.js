(async function p(){
    const instruction = await word ("amay mandloi");
    const food = await makefood (instruction);
    const present = await WebGLProgram(food, instruction);
    console.log(present);
}) 
();