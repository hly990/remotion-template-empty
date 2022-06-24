import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';
import { MDXProvider } from "@mdx-js/react";
import Content from "./videos/Content1.mdx";
import { useMemo } from "react";
// import { getStepsFromMDX } from "./step-parser";


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
	margin-top: 30px;
	text-align: center;
`;

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const translation = interpolate(frame, [0, 150], [250, -900]);
	
	return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  );
};

const components = {
  wrapper: Wrapper,
};

function Wrapper({  }) {
  // const steps = useMemo(() => getStepsFromMDX(children), []);

  // const { videoSteps, browserSteps, editorSteps, captionSteps } = steps;
  return (
    // <TalkLayout
    //   videoSteps={videoSteps}
    //   browserSteps={browserSteps}
    //   editorSteps={editorSteps}
    //   captionSteps={captionSteps}
    // />
		<>hello,world!</>
  );
}
