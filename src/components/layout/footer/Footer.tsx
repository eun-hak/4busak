import deleteFirstWord from '@/utils/deleteFirtstWord';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const pathName = usePathname();
  const filteredPathName = deleteFirstWord(pathName);

  const handleCommunityClick = () => {
    sessionStorage.removeItem('scrollPosition');
    sessionStorage.removeItem('savedData');
    router.push('/community');
  };

  return (
    <footer>
      <nav className=" fixed  mx-[auto] bottom-0 w-[393px]  h-[87.02px] px-[25px] pt-[25px] pb-[35px] bg-white border-t border-stone-50 justify-between items-center inline-flex z-[9999]">
        <Link href="/">
          <div className="  h-[44.84px] flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-[22.06px] h-[21.82px] flex-col justify-center items-center">
              {filteredPathName === '' ? (
                <img className="w-5 h-5 " src="/CheckedHome.svg" alt="home" />
              ) : (
                <img className="w-5 h-5 " src="/Home.svg" alt="home" />
              )}
            </div>
            <div className="text-center text-black text-xs font-normal font-['Pretendard']">
              홈
            </div>
          </div>
        </Link>
        <Link href="/reservation">
          <div className="h-[44.84px] flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-[22.06px] h-[21.82px] flex-col justify-center items-center">
              {filteredPathName.includes('reservation') ? (
                <img className="w-5 h-5 " src="/CheckedResoulvation.svg" alt="book" />
              ) : (
                <img className="w-5 h-5 " src="/Reservation.svg" alt="book" />
              )}
            </div>
            <div className="text-center text-black text-xs font-normal font-['Pretendard']">
              예약/일정
            </div>
          </div>
        </Link>
        <Link href="/map">
          <div className="h-[43.75px] flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-[22.06px] h-[21.82px]  flex-col  justify-center items-center">
              {filteredPathName === 'map' ? (
                <img className="w-5 h-5  " src="/CheckedNavigation.svg" alt="map" />
              ) : (
                <img className="w-5 h-5 " src="/Navigation.svg" alt="map" />
              )}
            </div>
            <div className="text-center text-black text-xs font-normal font-['Pretendard']">
              내 주변
            </div>
          </div>
        </Link>
        {/* 기존 링크 */}
        {/* <Link href="/community">
          <div className="h-[44.84px] flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-[22.06px] h-[21.82px] flex-col justify-center items-center">
              {filteredPathName === 'community' ? (
                <img className="w-5 h-5 " src="/CheckedCommunity.svg" alt="community" />
              ) : (
                <img className="w-5 h-5 " src="/Community.svg" alt="community" />
              )}
            </div>
            <div className="text-center text-black text-xs font-normal font-['Pretendard']">
              커뮤니티
            </div>
          </div>
        </Link> */}
        {/* session data 제거해야 하므로 아래 방식으로 변경 */}
        <div
          onClick={handleCommunityClick}
          className="cursor-pointer h-[44.84px] flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="w-[22.06px] h-[21.82px] flex-col justify-center items-center">
            {filteredPathName === 'community' ? (
              <img className="w-5 h-5 " src="/CheckedCommunity.svg" alt="community" />
            ) : (
              <img className="w-5 h-5 " src="/Community.svg" alt="community" />
            )}
          </div>
          <div className="text-center text-black text-xs font-normal font-['Pretendard']">
            커뮤니티
          </div>
        </div>
        <Link href="/mypage">
          <div className="h-[44.84px] flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-[22.06px] h-[21.82px] flex-col justify-center items-center">
              {filteredPathName === 'mypage' ? (
                <img className="w-5 h-5 " src="/CheckedProfile.svg" alt="mypage" />
              ) : (
                <img className="w-5 h-5 " src="/Profile.svg" alt="mypage" />
              )}
            </div>
            <div className="text-center text-black text-xs font-normal font-['Pretendard']">
              마이
            </div>
          </div>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
