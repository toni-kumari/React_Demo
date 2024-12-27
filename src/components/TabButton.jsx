export default function TabBUtton({children, isSelected, ...props})
{
    return (<li>
        <button className={isSelected? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}