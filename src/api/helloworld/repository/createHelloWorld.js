import HelloWorldModel from './../../../model/helloworld';

export default async (request, h) => {
    try {
        const helloWorld = await HelloWorldModel.create({title: "Hello World!"});
        return helloWorld;
    }catch(error){
        console.error(error);
        throw Error("Internal Server Error");
    }
}