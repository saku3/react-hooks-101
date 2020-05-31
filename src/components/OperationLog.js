import React, { useContext } from 'react';

const OperationLog = ({ operationLog }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
      {/* <td>
        <button className="btn btn-danger">削除</button>
      </td> */}
    </tr>
  );
};

export default OperationLog;
