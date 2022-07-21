const Heading: React.FC<{ type: string; text: string; customCss?: string }> = ({
    type,
    text,
    customCss,
}) => {
    return type === 'h1' ? (
        <h1 className={customCss ? customCss : ''}>{text}</h1>
    ) : type === 'h2' ? (
        <h2 className={customCss ? customCss : ''}>{text}</h2>
    ) : type === 'h3' ? (
        <h3 className={customCss ? customCss : ''}>{text}</h3>
    ) : type === 'h4' ? (
        <h4 className={customCss ? customCss : ''}>{text}</h4>
    ) : type === 'h5' ? (
        <h5 className={customCss ? customCss : ''}>{text}</h5>
    ) : type === 'h6' ? (
        <h6 className={customCss ? customCss : ''}>{text}</h6>
    ) : (
        <></>
    );
};

export default Heading;
