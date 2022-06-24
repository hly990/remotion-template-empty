import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';

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
	margin: 30px 90px 30px 80px;
	text-align: left;
`;

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const translation = interpolate(frame, [0, 150], [250, -900]);
	
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
					<BigTitle>董宇辉经典语录</BigTitle> <br />
					<SecTitle></SecTitle> <br />
				</div>
				<div>
					<SectionTitle>
            我每天都坚持做仰卧起坐，早上一个起坐，晚上一个仰卧。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            所有的故事都会有结局，只有生活跟你没完。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
              原以为生命是个奇迹，实际上你只是个劳动力。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              不喝奶茶的人，都是懦夫，他们既怕花钱又怕胖。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              代沟就是，我做什么你都看不惯我，你说什么我都不想听。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              成年人的世界，除了长胖，其他什么都不容易。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              其实表白未必是件好事，因为那样显得手黑。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              做选择题最难过的，不是选错，而是曾经选对过。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              你的脖子真可爱，顶着一个猪脑袋。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              为什么国庆节大家都高兴？祖国母亲富强了，我就是富二代了。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              我被生活磨光了棱角，简单的说就是，我被生活盘了。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              为什么骗钱犯法，而骗感情不犯法？因为感情不值钱。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              可以做朋友吗？还可以做朋友吗？这是一个故事的开始和终止。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              56个民族，55个加分。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              白天嘈杂得不愿意醒，夜晚安静得舍不得睡。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              吵架后总是会后悔，为什么当初，没有多骂几句？
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
              你站在女孩身边，打一个字，妞。
          </SectionTitle> <br />
				</div>
				
			</div>

		</div>
	)
};
