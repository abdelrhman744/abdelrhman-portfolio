const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl bg-white ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
export default Card;