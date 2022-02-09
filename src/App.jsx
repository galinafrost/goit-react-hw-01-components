import user from './user.json';
import Profile from './components/Profile';

import Statistics from './components/Statistics';
import data from './data.json';

import FriendList from './components/FriendList';
import friends from './friends.json';

import transactions from './transactions.json';
import Transactions from './components/Transaction';

export default function App() {
  return (
    <div className='container'>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />;
    </div>
  );
}
