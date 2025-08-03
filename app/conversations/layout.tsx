import getConversation from "../actions/getConversation";
import { Sidebar } from "../components/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationLayout({
children
}:{children : React.ReactNode}){
    const conversations = await getConversation()
return <Sidebar>
    <div className="h-full" >
        <ConversationList initalItems={conversations} />
{children}
    </div>
</Sidebar>
}