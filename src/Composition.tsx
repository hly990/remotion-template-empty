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
	margin-top: 30px;
	text-align: center;
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
					<BigTitle>长恨歌</BigTitle> <br />
					<SecTitle>白居易</SecTitle> <br />
				</div>
				<div>
					<SectionTitle>汉皇重色思倾国，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>御宇多年求不得。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>杨家有女初长成，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>养在深闺人未识。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>天生丽质难自弃，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>一朝选在君王侧。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>回眸一笑百媚生，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>六宫粉黛无颜色。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>春寒赐浴华清池，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>温泉水滑洗凝脂。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>侍儿扶起娇无力，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>始是新承恩泽时。</SectionTitle> <br />
				</div>
				
				<div>
					<SectionTitle>云鬓花颜金步摇，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>芙蓉帐暖度春宵。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>春宵苦短日高起，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>从此君王不早朝。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>承欢侍宴无闲暇，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>春从春游夜专夜。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>后宫佳丽三千人，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>三千宠爱在一身。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>金屋妆成娇侍夜，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>玉楼宴罢醉和春。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>姊妹弟兄皆列土，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>可怜光彩生门户。</SectionTitle> <br />
				</div>

				<div>
					<SectionTitle>遂令天下父母心，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>不重生男重生女。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>骊宫高处入青云，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>仙乐风飘处处闻。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>缓歌慢舞凝丝竹，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>尽日君王看不足。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>渔阳鼙鼓动地来，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>惊破霓裳羽衣曲。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>九重城阙烟尘生，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>千乘万骑西南行。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>翠华摇摇行复止，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>西出都门百余里。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>六军不发无奈何，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>宛转蛾眉马前死。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>花钿委地无人收，</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>翠翘金雀玉搔头。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>君王掩面救不得，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>回看血泪相和流。</SectionTitle> <br />
				</div><div>
					<SectionTitle>黄埃散漫风萧索，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>云栈萦纡登剑阁。</SectionTitle> <br />
				</div><div>
					<SectionTitle>峨嵋山下少人行，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>旌旗无光日色薄。</SectionTitle> <br />
				</div><div>
					<SectionTitle>蜀江水碧蜀山青，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>圣主朝朝暮暮情。</SectionTitle> <br />
				</div><div>
					<SectionTitle>行宫见月伤心色，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>夜雨闻铃肠断声。</SectionTitle> <br />
				</div><div>
					<SectionTitle>天旋日转回龙驭，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>到此踌躇不能去。</SectionTitle> <br />
				</div><div>
					<SectionTitle>马嵬坡下泥土中，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>不见玉颜空死处。</SectionTitle> <br />
				</div><div>
					<SectionTitle>君臣相顾尽沾衣，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>东望都门信马归。</SectionTitle> <br />
				</div><div>
					<SectionTitle>归来池苑皆依旧，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>太液芙蓉未央柳。</SectionTitle> <br />
				</div><div>
					<SectionTitle>芙蓉如面柳如眉，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>对此如何不泪垂。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>春风桃李花开夜，
</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>秋雨梧桐叶落时。</SectionTitle> <br />
				</div><div>
					<SectionTitle>西宫南苑多秋草，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>落叶满阶红不扫。</SectionTitle> <br />
				</div><div>
					<SectionTitle>梨园弟子白发新，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>椒房阿监青娥老。</SectionTitle> <br />
				</div><div>
					<SectionTitle>夕殿萤飞思悄然，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>孤灯挑尽未成眠。</SectionTitle> <br />
				</div><div>
					<SectionTitle>迟迟钟鼓初长夜，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>耿耿星河欲曙天。</SectionTitle> <br />
				</div><div>
					<SectionTitle>鸳鸯瓦冷霜华重，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>翡翠衾寒谁与共。</SectionTitle> <br />
				</div><div>
					<SectionTitle>悠悠生死别经年，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>魂魄不曾来入梦。</SectionTitle> <br />
				</div><div>
					<SectionTitle>临邛道士鸿都客，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>能以精诚致魂魄。</SectionTitle> <br />
				</div><div>
					<SectionTitle>为感君王辗转思，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>遂教方士殷勤觅。</SectionTitle> <br />
				</div><div>
					<SectionTitle>排空驭气奔如电，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>升天入地求之遍。</SectionTitle> <br />
				</div><div>
					<SectionTitle>上穷碧落下黄泉，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>两处茫茫皆不见。</SectionTitle> <br />
				</div><div>
					<SectionTitle>忽闻海上有仙山，
</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>山在虚无缥渺间。</SectionTitle> <br />
				</div><div>
					<SectionTitle>楼阁玲珑五云起，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>其中绰约多仙子。</SectionTitle> <br />
				</div><div>
					<SectionTitle>中有一人字太真，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>雪肤花貌参差是。</SectionTitle> <br />
				</div><div>
					<SectionTitle>金阙西厢叩玉扃，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>转教小玉报双成。</SectionTitle> <br />
				</div><div>
					<SectionTitle>闻道汉家天子使，
</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>九华帐里梦魂惊。</SectionTitle> <br />
				</div><div>
					<SectionTitle>揽衣推枕起徘徊，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>珠箔银屏迤逦开。</SectionTitle> <br />
				</div><div>
					<SectionTitle>云鬓半偏新睡觉，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>花冠不整下堂来。</SectionTitle> <br />
				</div><div>
					<SectionTitle>风吹仙袂飘飖举，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>犹似霓裳羽衣舞。</SectionTitle> <br />
				</div><div>
					<SectionTitle>玉容寂寞泪阑干，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>梨花一枝春带雨。</SectionTitle> <br />
				</div><div>
					<SectionTitle>含情凝睇谢君王，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>一别音容两渺茫。</SectionTitle> <br />
				</div><div>
					<SectionTitle>昭阳殿里恩爱绝，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>蓬莱宫中日月长。</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>回头下望人寰处，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>不见长安见尘雾。</SectionTitle> <br />
				</div><div>
					<SectionTitle>惟将旧物表深情，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>钿合金钗寄将去。</SectionTitle> <br />
				</div><div>
					<SectionTitle>钗留一股合一扇，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>钗擘黄金合分钿。</SectionTitle> <br />
				</div><div>
					<SectionTitle>但令心似金钿坚，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>天上人间会相见。</SectionTitle> <br />
				</div><div>
					<SectionTitle>临别殷勤重寄词，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>词中有誓两心知。</SectionTitle> <br />
				</div><div>
					<SectionTitle>七月七日长生殿，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>夜半无人私语时。</SectionTitle> <br />
				</div><div>
					<SectionTitle>在天愿作比翼鸟，
</SectionTitle> <br />
				</div><div>
					<SectionTitle>在地愿为连理枝。</SectionTitle> <br />
				</div><div>
					<SectionTitle>天长地久有时尽，
</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>此恨绵绵无绝期。</SectionTitle> <br />
				</div>
				
			</div>

		</div>
	)
};
