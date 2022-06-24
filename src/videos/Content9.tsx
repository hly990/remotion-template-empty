import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdown = `

import fs from 'fs'

const filenames = fs.readdirSync('content')

`
const markdown2 = `

filenames.map((filename) => {
  console.log(filename)
})

`
const markdown3 = `
const test = await import(folder + '/test.js')

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
	font-size: 100px;
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
					<BigTitle>node.js怎样从文件夹中获取文件列表?</BigTitle> <br />
					<SecTitle></SecTitle> <br />
				</div>
				<div>
					<SectionTitle>
            首先导入fs内置模块，然后调用fs.readdirSync()，
						传递你想要读取的文件夹名称。
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle2>
						<SyntaxHighlighter language="javascript" style={docco}>
							{markdown}
						</SyntaxHighlighter>
          </CodeTitle2><br />
				</div>
				<div>
					<SectionTitle>
            你可以使用一个相对或绝对的URL。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            然后你可以用这种方式遍历文件名:
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle2>
						<SyntaxHighlighter language="javascript" style={docco}>
							{markdown2}
						</SyntaxHighlighter>
          </CodeTitle2><br />
				</div>
				
			</div>

		</div>
	)
};
