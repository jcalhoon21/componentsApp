import React from 'react';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  
  return (
    <div>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail author="Todd" time="Today at 1:54PM" comment="sweeeet" />
        </ApprovalCard>
        <CommentDetail author="Sam" time="Today at 4:54PM" comment="Nice blog post!" />
        <CommentDetail author="Jen" time="Today at 3:54PM" comment="this is so cool!" />
      </div>
    </div>
  );
}

export default App;
