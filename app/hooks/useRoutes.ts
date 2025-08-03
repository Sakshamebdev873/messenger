import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiChat } from "react-icons/hi"
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2"
import useConversation from "./useConversation"
import { signOut } from "next-auth/react"

const useRoutes = () => {
  const pathName = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(() => [
    {
      label: 'Chat',
      href: '/conversations',
      icon: HiChat,
      active: pathName === '/conversations' || !!conversationId
    },
    {
      label: 'Users',
      href: '/users',
      icon: HiUsers,
      active: pathName === '/users'
    },
    {
      label: 'Logout',
      href: '#', // Avoid accidental navigation
      onClick: () => signOut({ callbackUrl: '/' }),
      icon: HiArrowLeftOnRectangle
    }
  ], [pathName, conversationId])

  return routes
}
export default useRoutes