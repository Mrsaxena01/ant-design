import React from 'react';
import { QRCode } from 'antd';

const App: React.FC = () => (
  <QRCode
    errorLevel="H"
    value="https://mrsaxena.netlify.app//"
    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
);

export default App;
