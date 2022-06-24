import {Composition} from 'remotion';
import {MyComposition} from './videos/Content7';


export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={2220}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
