import cn from 'classnames';

function Link({ children, href, target, className, rel }) {
    return (
        <a
            href={href}
            className={cn('link', className)}
            target={target}
            rel={rel}
        >
            {children}
        </a>
    );
}

export default Link;