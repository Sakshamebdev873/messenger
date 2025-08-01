import { PrismaClient } from "../generated/prisma";
// In the global scope (globalThis), there might be a variable called prisma that is either a PrismaClient instance or undefined.
declare global{
    var prisma : PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV!== 'production') globalThis.prisma = client;
export default client