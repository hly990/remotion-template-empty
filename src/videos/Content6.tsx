import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from 'react-dom'
import rehypeRaw from 'rehype-raw'
import '../styles/main_styles.css';
import gfm from 'remark-gfm'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

export const MyComposition = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`./src/markdown/js_create_an_image_slider.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  const input = `## Hello World

                  Bold **bold text**
                  Italic _italicized text_
                  Blockquote > blockquote
                  Ordered List
                  `

  return (
    <div className="container">
      <ReactMarkdown remarkPlugins={[gfm]} children={content} />
    </div>
  );
};

export default MyComposition;