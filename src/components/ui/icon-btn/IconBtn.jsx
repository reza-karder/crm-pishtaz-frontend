import iconBtnVariants from "./IconBtn.variants";

function IconBtn({ children, color, className, ...props }) {
	return (
		<button className={iconBtnVariants({ color, className })} {...props}>
			{children}
		</button>
	);
}

export default IconBtn;
