import badgeVariants from "./Badge.variants";

function Badge({ color, children, className }) {
	return <span className={badgeVariants({ color, className })}>{children}</span>;
}

export default Badge;
