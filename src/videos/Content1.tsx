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
				{/* <div>
					<BigTitle>长恨歌</BigTitle> <br />
					<SecTitle>白居易</SecTitle> <br />
				</div> */}
				<div>
					<SectionTitle>
            如果谢晖当国足主帅，以谢晖在大连人执教的风格谁会入选国足。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
            按谢晖就压着打的战术，入选的队员首先体能好必须能跑，
            比赛积极性高，必须适应快节奏，高对抗，要有激情有性格。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
              像插腰散步的于大宝，回传的张稀哲，躲球的吴曦应该都不在了。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
               门将颜骏凌可以不用了，我看广州城韩佳琪很好，
               申花的马镇都比颜骏凌强。这俩年纪不大。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
               中后卫即便现在蒋光太一般，但实力上还是中国第一后卫。和他搭档朱辰杰，和辉子是老乡。
               实在没人了张五，李昂，李圣龙等人可以当替补
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
               左后卫大连人孙国文，现在是辉子爱将。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
               右后卫三镇邓涵文，拼抢比赛态度都够积极，身体体能也好。
          </SectionTitle> <br />
				</div>
         <div>
					<SectionTitle>
               童磊，赵宏略，李磊，石焱可以当替补。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
               中场也得需要几个跑不死的池忠国别看岁数大了但真能跑，
               还有广州城的李提香也不错，戴韦俊肯定算一个，少不了韦世豪，
               山东的陈浦，河南的黄紫昌，钟义皓，还有阿拉定定，得需要几个有性格
               的球员，另外冯劲，还有彭欣力，踢球态度都不错，徐新也可以当个替补。
          </SectionTitle> <br />
				</div>
        <div>
					<SectionTitle>
               前锋郭玉田主力，张玉宁替补，巴顿，王子铭，方昊这都是积极能跑的。
               最后别忘了最能拼的洛国富，对了还有武磊。
          </SectionTitle> <br />
				</div>
				
			</div>

		</div>
	)
};
