import ProfileInfoComponent from "./profileInfo.component";
import ProfileSectionHero from "./profileSection.hero";

const ProfileSection = () => {
    return(
        <div className="w-full flex-col h-[1070px] bg-white rounded-[18.96px] justify-start items-start inline-flex mt-[58px]">
                <ProfileSectionHero />
                <ProfileInfoComponent />

        </div>
    )
}
export default ProfileSection;