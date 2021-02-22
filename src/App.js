import s from './App.module.css';
import Profile from './components/Profile';
import profileInfo from './profile.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList';
import friendsList from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactionsList from './transactions.json';

function App() {
  const { avatar, tag, location, name, stats } = profileInfo;
  return (
    <>
      <div className={s.container}>
        <Profile
          url={avatar}
          tag={tag}
          location={location}
          name={name}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
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
