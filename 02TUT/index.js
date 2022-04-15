const fsPromises=require('fs').promises;

// fs.readFile('./files/starter.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
// console.log('Hello...');

const fileOps=async()=>{
    try{
        const data=await fsPromises.readFile('./files/starter.txt','utf-8');
        console.log(data);
        await fsPromises.unlink('./files/starter.txt');
        await fsPromises.writeFile('./files/promiseWrite.txt',data);
        await fsPromises.appendFile('./files/promiseWrite.txt','\n\nNice to meet you.');
        await fsPromises.rename('./files/promiseWrite.txt','./files/promiseComplete.txt');
        const newData=await fsPromises.readFile('./files/promiseComplete.txt','utf-8');
        console.log(newData);
    }catch(err){
        console.error(err);
    }
}
fileOps();
// fs.writeFile('./files/reply.txt','Nice to meet you',(err)=>{
//     if(err) throw err;
//     console.log('Write complete');

//     fs.appendFile('./files/reply.txt','\n\n Yes it is',(err)=>{
//         if(err) throw err;
//         console.log('Append complete');
//         fs.rename('./files/reply.txt','./files/newReply.txt',(err)=>{
//             if(err) throw err;
//             console.log('Rename complete');
//         })
//     })
    
// })



//reading reply
// fs.appendFile('./files/test.txt','Append test',(err)=>{
//     if(err) throw err;
//     console.log('Append complete');
// })

//exception
process.on('uncaughtException',err=>{
    console.error(`Error: ${err}`)<
    process.exit(1);
})