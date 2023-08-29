// _app.tsx
import 'antd/dist/antd.css'; // 引入 Ant Design 的样式文件
import { Layout } from 'antd';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
