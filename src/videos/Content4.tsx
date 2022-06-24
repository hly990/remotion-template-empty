import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdown = `
{
  let a = 0;
  a //0
}
/*报错: 
a is not defined */
a 

`
const markdown2 = `
{
  let a = 0;
  var b = 1;
}
a  //a is not defined
b  //1
`
const markdown3 = `
const PI="3.1415";
//3.1415 
PI  
/*SyntaxError: 
Missing initializer 
in const declaration*/
const MY_AGE;  
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
	margin-top: 20px;
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
	margin: 30px 90px 30px 30px;
	text-align: left;
`;

const CodeTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 50px;
	font-weight: bold;
	margin: 60px 90px 60px 60px;
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
					<BigTitle>ES6 let 与 const</BigTitle> <br />
					<SecTitle></SecTitle> <br />
				</div>
				<div>
					<SectionTitle>
            ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: let 和 const。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            let 声明的变量只在 let 命令所在的代码块内有效。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            const 声明一个只读的常量，一旦声明，常量的值就不能改变。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            let基本用法
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle>
						<SyntaxHighlighter language="javascript" style={docco}>
						{markdown}
						</SyntaxHighlighter>
          </CodeTitle>
				</div>						
				<div>
					<SectionTitle>
            let 是在代码块内有效，var 是在全局范围内有效:
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle>
						<SyntaxHighlighter language="javascript" style={docco}>
						{markdown2}
						</SyntaxHighlighter>
          </CodeTitle><br />
				</div>
				<div>
					<SectionTitle>
            const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            基本用法:
          </SectionTitle> <br />
				</div>
				<div>
					<CodeTitle>
						<SyntaxHighlighter language="javascript" style={docco}>
							{markdown3}
						</SyntaxHighlighter>
          </CodeTitle><br />
				</div>
				
				
			</div>

		</div>
	)
};
