import { getHelloWorld, createHelloWorld } from "./repository";

export default [
    {
        method: 'GET',
        path: '/helloworld',
        handler: getHelloWorld
    },
    {
        method: 'POST',
        path: '/helloworld',
        handler: createHelloWorld
    }
]