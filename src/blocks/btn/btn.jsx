import cn from "classnames";

function Btn(props) {
    const { className, id, config, children, onClick } = props;

    return (
        <div
            id={id}
            className={cn('btn', {
                [className]: className || '',
                btn_border: config?.border,
                btn_img: config?.hasImage,
                btn_lg: config?.large,
                btn_inactive: config?.inactive,
                selected: config?.selected,
            })}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Btn;
