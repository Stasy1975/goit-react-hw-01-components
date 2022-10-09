import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import FriendList from './FriendList/friendList';
// import { TransactionsTable } from './Transactions/TransactionsTable';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends';
// import transactions from '../data_collections/transactions';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
      <FriendList friends={friends} />
      {/* <TransactionsTable transactions={transactions} /> */}
    </div>
  );
};