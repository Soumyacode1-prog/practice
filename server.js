const express=require('express');
const cluster=require('cluster');
const os=require('os');
const numCPUs=os.cpus().length;
// console.log(`Number of CPUs: ${numCPUs}`);
//cluster mode
if(cluster.isPrimary){
    for(let i=0;i<numCPUs;i++){
        cluster.fork(); 
    }}
    else{
        const app=express();
        const port=3000;
        app.get("/",(req,res)=>{
            return res.json({message:`Hello, World from server !${process.pid}`});
        })
        app.listen(port,()=>console.log(`Server running on port ${port}`));
    }
