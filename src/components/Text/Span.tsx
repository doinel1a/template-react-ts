const Span: React.FC<{ text: string; customCss?: string }> = ({
    text,
    customCss,
}) => {
    return <span className={customCss ? customCss : ''}>{text}</span>;
};

export default Span;
