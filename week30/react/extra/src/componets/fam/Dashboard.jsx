import React, { Suspense, useState } from "react";

export const Dashboard = () => {
  const LazyUser = React.lazy(()=>import("./User.jsx"));

  const [data, setData] = useState(false);

  return (
    <div>
      <h4>This is Dashboard</h4>

      <Suspense fallback={<p>Loading.....</p>}>
      {data && <LazyUser />}
      </Suspense>
      <button onClick={() => setData(!data)}>load user</button>
    </div>
  );
};
