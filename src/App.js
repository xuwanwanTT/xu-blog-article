import './App.css';
import './layout.css';
import './markdown-style.css';
import ReactMarkdown from 'react-markdown';

const testMd = `
# 这是一个测试一级标题

### 这是一个测试三级标题

这就是一段文字，略略略~这就是一段文字，略略略~这就是一段文字，略略略~这就是一段文字，略略略~
这就是一段文字，略略略~这就是一段文字，略略略~这就是一段文字，略略略~

这里空了一行是第二自然段了，**我加粗了**

[这是个链接](https://www.baidu.com)
`

function App() {
  return (
    <div className={'App layout-type1-wrap'}>

      <div className={'header'}>

        <header>xuwanwan.com</header>

      </div>

      <div className={'main'}>

        <ReactMarkdown children={testMd} className={'markdown-content'} />

      </div>

      <div className={'footer'}>

        <footer>Copyright © 2018 - 2020 <a href="#/">xuwanwan</a>. All rights reserved.</footer>

      </div>

    </div>
  );
}

export default App;
