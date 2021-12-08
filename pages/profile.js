import dynamic from "next/dynamic";

const ProfilePage = dynamic(() => import("../src/components/pages/profile"));

const Profile = () => <ProfilePage />;

export default Profile;
