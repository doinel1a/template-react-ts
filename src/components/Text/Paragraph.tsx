const Paragraph: React.FC<{ text: string; customCss?: string }> = ({
    text,
    customCss,
}) => {
    return <p className={`${customCss ? customCss : ''}`}>{text}</p>;
};

export default Paragraph;
