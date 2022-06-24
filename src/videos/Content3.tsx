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
	const translation = interpolate(frame, [0, 150], [150, -200]);
	
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
					<BigTitle>什么是工作量证明(POW)？</BigTitle> <br />
					<SecTitle></SecTitle> <br />
				</div>
				<div>
					<SectionTitle>
            工作证明（PoW）是区块链和Web3中最常见的共识机制。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
 PoW是一个验证过程，使得向链上添加数据的成本很高。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
换句话说，通过随机猜测一个目标哈希值数字，如果你猜对了，你会得到奖励；如果你猜错了，--其他什么都不会发生。          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
当一个新区块被创建时，网络将产生一个非常复杂的随机数字，称为目标哈希值。
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
矿工们用他们的电脑一次又一次地猜测这个目标数字，直到有人猜对
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
谁猜到了目标值，谁将赢得这一轮
          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
然后该区块被关闭并加入到链中，猜对的人获得奖励。          </SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
						我们来看看详细过程          
					</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
						首先，网络为每个区块设置一个目标哈希值。         
					</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
						这是一个需要矿工猜测的数字。         
					</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
						接下来，矿工为区块头创建一个哈希值，并产生一个称为nonce的随机数字。         
					</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
						nonce是关键：随机数可以确保不同的矿工得到不同的哈希值。         
					</SectionTitle> <br />
				</div>
				<div>
					<SectionTitle>
						如果没有这个随机数，就没有办法与目标哈希值相匹配，并通过挖掘新区块来赚取奖励。         
					</SectionTitle> <br />
				</div>
				
			</div>

		</div>
	)
};
