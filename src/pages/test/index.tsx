import { Navigate, Link } from 'react-router-dom';

function Test() {
  return (
    <h2>
      hello Test
      <Link to='..'>返回</Link>
    </h2>
  );
}

export default Test;
