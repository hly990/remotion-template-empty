import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdown = `
{
  "author": "Your name",
  "title": "The book title"
}

`
const markdown2 = `
# Summary

- [Preface](README.md)
- [First chapter](content/1-first.md)
- [Second chapter](content/2-second.md)

`
const markdown3 = `
npx honkit pdf  ./ ./book.pdf
npx honkit epub ./ ./book.epub
npx honkit mobi ./ ./book.mobi

`

const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {}
    </SyntaxHighlighter>
  );
};

const BigTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 120px;
	text-align: center;
	line-height: 1;
	font-weight: bold;
	margin: 30px 60px 30px 90px;
`;
const SecTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 80px;
	text-align: center;
	line-height: 1;
	font-weight: bold;
	margin-bottom: 60px;
`;

const SectionTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 80px;
	font-weight: bold;
	margin: 30px 60px 30px 90px;
	text-align: left;
`;

const CodeTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 50px;
	font-weight: bold;
	margin: 30px 60px 60px 90px;
	text-align: left;
`;
const CodeTitle2 = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 30px;
	font-weight: bold;
	margin: 30px 60px 60px 90px;
	text-align: left;
`;

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const translation = interpolate(frame, [0, 150], [150, -300]);
	
	return (
		<div
			style={{
				flex: 1,
				backgroundColor: '#fece83',
				fontFamily: '--apple-system',
				flexDirection: 'row',
				display: 'flex',
				justifyContent: 'flex-start',
			}}
		>
			<div style={{flex: 1, transform: `translateY(${translation}px)`}}>
				<div>
					<BigTitle>怎样使用markdown创建电子书?</BigTitle> <br />
					<SecTitle></SecTitle> <br />
				</div>
				<div>
					<SectionTitle>
            我使用了一个名为honkit的工具创建电子书。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            它是gitbook工具的一个分支。gitbook已经停止更新了。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            honkit非常不错。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            honkit开源免费，使用markdown创建电子书，可以生成PDF/ePub/Mobi版本。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            更新一本书，只需一个命令，就可以将它上传到网站。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            这是我知道的、最简单的制作电子书的工具了。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            虽然还有其他工具，但是它的功能是最方便的。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            现在开始吧。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            创建一个文件夹，并在其中添加一个book.json文件:
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle>
						<SyntaxHighlighter language="json" style={docco}>
							{markdown}
						</SyntaxHighlighter>
          </CodeTitle><br />
				</div>
				<div>
					<SectionTitle>
            创建用于封面的cover.jpg图像。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            如果你也想制作ePub/Mobi 版本，请添加一个cover_small.jpg。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            使用 ToC 创建一个 Summary.md 文件:
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle2>
						<SyntaxHighlighter language="md" style={docco}>
							{markdown2}
						</SyntaxHighlighter>
          </CodeTitle2><br />
				</div>
				<div>
					<SectionTitle>
            现在添加一个 README.md 文件，这是前言的 markdown 文件。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            添加一个 content/1-first .md，这是第一章的markdown文件。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            其他章节也按这样添加。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            现在下载Calibre并安装它。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            然后运行：
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle2>
						<SyntaxHighlighter language="md" style={docco}>
							{markdown2}
						</SyntaxHighlighter>
          </CodeTitle2><br />
				</div>
				<div>
					<SectionTitle>
            这时候，PDF，ePub和Mobi (Kindle) 将出现在文件夹中！
          </SectionTitle> <br />
				</div>
				
			</div>

		</div>
	)
};
