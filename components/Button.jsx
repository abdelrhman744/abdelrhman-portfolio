const Button = ({ children, variant = 'primary', size = 'md', icon, ...props }) => {
    const base =
        "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black";

    const variants = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border-2 border-black hover:bg-gray-50",
        ghost: "hover:bg-gray-100",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
            {icon}
            {children}
        </button>
    );
};

export default Button;
