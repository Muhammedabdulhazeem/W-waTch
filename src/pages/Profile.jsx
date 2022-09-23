import ProfileMain from '../components/profile/ProfileMain';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import './Profile.css'

const Profile = () => {
    const { user } = useAuth()
    const { color } = useTheme()

    return (
        <div className="profile container">
            <ProfileSidebar />
            <ProfileMain />
        </div>
    );
}
 
export default Profile;