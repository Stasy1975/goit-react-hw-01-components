import { Profile } from './profile/profile';
// import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendList/FriendList';
// import { TransactionsTable } from './Transactions/TransactionsTable';

import user from '../data/user.json';
// import data from '../data_collections/data.json';
// import friends from '../data_collections/friends';
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
      {/* <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsTable transactions={transactions} /> */}
    </div>
  );
};