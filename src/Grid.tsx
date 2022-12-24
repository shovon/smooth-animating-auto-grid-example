type GridItemProps = {
	children?: JSX.Element | JSX.Element[] | string | string[] | null;
};

export function GridItem({ children }: GridItemProps) {
	return <>{children}</>;
}

type GridChild = React.ReactElement<GridItemProps>;

type GridProps = {
	children: GridChild | GridChild[] | null | undefined;
};

export function Grid({ children }: GridProps) {
	const gridItems = (
		!children ? [] : !Array.isArray(children) ? [children] : children
	) satisfies GridChild[];

	return (
		<div>
			{gridItems.map((item) => (
				<div>{item}</div>
			))}
		</div>
	);
}
