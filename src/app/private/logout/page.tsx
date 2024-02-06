
import {Logout as LogoutLayout} from '../../../components/auth/Logout'
import { redirect } from 'next/navigation'
import { logout } from '../../../actions/auth'


export default function Logout() {
   return <LogoutLayout />
}