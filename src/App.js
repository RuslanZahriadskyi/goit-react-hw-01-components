import s from './App.module.css';
import Profile from './components/Profile/Profile';
import profileInfo from './profile.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friendsList from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionsList from './transactions.json';

function App() {
  return (
    <>
      <div className={s.container}>
        <Profile
          url={profileInfo.avatar}
          tag={profileInfo.tag}
          location={profileInfo.location}
          name={profileInfo.name}
          followers={profileInfo.stats.followers}
          views={profileInfo.stats.views}
          likes={profileInfo.stats.likes}
        />
      </div>
      <div className={s.container}>
        <Statistics title="Upload stats" items={statisticalData} />
      </div>
      <div className={s.container}>
        <Statistics items={statisticalData} />
      </div>
      <div className={s.container}>
        <FriendList items={friendsList} />
      </div>
      <div className={s.container}>
        <TransactionHistory items={transactionsList} />
      </div>
    </>
  );
}

export default App;
