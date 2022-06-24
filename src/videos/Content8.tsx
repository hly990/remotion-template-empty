import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdown = `
import test from folder + '/test.js'

`
const markdown2 = `
import test from \`\${folder}/test.js\`

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
					<BigTitle>怎样动态导入javascript模块?</BigTitle> <br />
					<SecTitle></SecTitle> <br />
				</div>
				<div>
					<SectionTitle>
            你碰到过需要动态加载一个 JavaScript 模块吗？
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            你想从未知的文件夹中加载一些东西。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            但你不知道文件夹的名称。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            你想动态导入它。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            这样写：
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle2>
						<SyntaxHighlighter language="json" style={docco}>
							{markdown}
						</SyntaxHighlighter>
          </CodeTitle2><br />
				</div>
				<div>
					<SectionTitle>
            或者
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle2>
						<SyntaxHighlighter language="json" style={docco}>
							{markdown2}
						</SyntaxHighlighter>
          </CodeTitle2><br />
				</div>
				<div>
					<SectionTitle>
            都不起作用。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            正确的动态导入写法是：
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle2>
						<SyntaxHighlighter language="json" style={docco}>
							{markdown3}
						</SyntaxHighlighter>
          </CodeTitle2><br />
				</div>
				
			</div>

		</div>
	)
};
