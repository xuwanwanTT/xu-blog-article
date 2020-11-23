import './layout.css';
import './markdown-style.css';
import './App.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [title, setTitle] = useState('');
  const [index, setIndex] = useState('');

  useEffect(() => {
    const id = window.location.pathname.slice(1);

    axios.get(`/static/article/${id}.md`).then(res => {
      const md = res.data;
      const title = md.match(/#(.+)\n/)[1];
      setMarkdownText(md);
      setTitle(title);
    });

  }, []);

  useEffect(() => {
    const getScrollTop = (e) => {
      const top = e.target.scrollTop;
      const h = document.querySelector('.article-title').offsetHeight;

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

        <footer>Copyright © 2018 - {new Date().getFullYear()} <a href="#/">xuwanwan</a>. All rights reserved.</footer>

      </div>

    </div >
  );
}

export default App;
