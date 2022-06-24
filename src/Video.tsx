import {Composition} from 'remotion';
import {MyComposition} from './videos/Content9';


export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
