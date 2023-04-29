interface ButtonProps {
    children: string;
    onClick: () => void;
    color?: 'primary' | 'warning' | 'secondary';
}

const ButtonComponent = ({ children, color = "warning", onClick }: ButtonProps) => {
    return (
        <>
            <button type="button" onClick={onClick} className={"btn btn-" + color}>{children}</button>
            <button type="button" className="btn btn-secondary">Secondary Button</button>
        </>);
};

export default ButtonComponent