import getCurrentUser from "./getCurrentUser"
import prisma from '@/app/libs/prismadb'
const getConversation = async () =>{
    const currentUser = await getCurrentUser()
    if(!currentUser?.id){
        return []
    }
    try {
        const conversation = await prisma?.conversation.findMany({
            orderBy : {
                createdAt : 'desc'
            },
            where : {
                userIds : {
                    has : currentUser.id
                }
            },
            include : {
                users : true,
                messages : {
                    include : {
                        sender : true,
                        seen : true
                    }
                }
            }
        })
return conversation
    } catch (error:any) {
        return []
    }
}
export default getConversation