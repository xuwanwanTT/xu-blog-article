import './layout.css';
import './markdown-style.css';
import './App.css';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const demoMd = `
# 这是一个测试一级标题

### 这是一个测试三级标题

这就是一段文字，略略略~这就是一段文字，略略略~这就是一段文字，略略略~这就是一段文字，略略略~
这就是一段文字，略略略~这就是一段文字，略略略~这就是一段文字，略略略~

这里空了一行是第二自然段了，**我加粗了**

[这是个链接](https://www.baidu.com)

这里是一个列表
- 第一项
- 第二项
- 第三项


`
const testMd = demoMd + demoMd;
const testTitle = '这是一个测试一级标题';

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [title, setTitle] = useState('');
  const [index, setIndex] = useState('');

  useEffect(() => {
    setMarkdownText(testMd);
    setTitle(testTitle);
  }, []);

  useEffect(() => {
    const getScrollTop = (e) => {
      const top = e.target.scrollTop;
      const h = document.querySelector('.article-title').offsetHeight;
      console.log(1234, new Date())
      if (top > h + 32) {
        if (!+index) setIndex(1);
      } else {
        if (+index) setIndex(0);
      }
    };

    document.querySelector('.main').addEventListener('scroll', getScrollTop);

    return () => {
      document.querySelector('.main').removeEventListener('scroll', getScrollTop)
    };

  }, [index]);

  return (
    <div className={'App layout-type1-wrap'}>

      <div className={'header'}>

        <header className={`animated faster ${!+index ? 'fadeInDown active' : 'fadeOutUp'}`}>xuwanwan.com</header>

        <header className={`article-title animated faster ${+index ? 'fadeInUp active' : 'fadeOutDown'}`}>{title}</header>

      </div>

      <div className={'main'}>

        <ReactMarkdown children={markdownText} className={'markdown-content'} />

      </div>

      <div className={'footer'}>

        <footer>Copyright © 2018 - 2020 <a href="#/">xuwanwan</a>. All rights reserved.</footer>

      </div>

    </div >
  );
}

export default App;
