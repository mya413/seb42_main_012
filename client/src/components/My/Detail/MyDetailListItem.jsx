import { useLocation } from 'react-router-dom';
import ReviewScore from '../../Gym/Review/ReviewScore';
import TabButton from '../../UI/Button/TabButton';

function MyDetailListItem({ tabName, title, created, grades, image }) {
  const location = useLocation();

  return (
    <li className="flex items-center justify-between px-4 py-8 border-y border-[var(--main-border)] active:bg-[var(--main-active)]">
      <div className="flex items-center justify-center">
        {location.pathname === '/my/board' ? (
          <TabButton tabName={tabName} />
        ) : location.pathname === '/my/comments' ? (
          <TabButton tabName={tabName} />
        ) : location.pathname === '/my/reviews' ? (
          <ReviewScore grades={grades} />
        ) : location.pathname === '/my/bookmarks/gyms' ? (
          <img className="w-40" src={image} alt="헬스장이미지" />
        ) : location.pathname === '/my/bookmarks/board' ? (
          <TabButton tabName={tabName} />
        ) : null}
        <h3 className="ml-2 line-clamp-1">{title}</h3>
      </div>
      <span className="text-[var(--second)]">{created}</span>
    </li>
  );
}

export default MyDetailListItem;
