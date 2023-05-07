import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import s from './Header.module.scss'

interface HeaderProps {
    className?: string
}
export const Header = ({className}: HeaderProps) => {
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
                    MAIN
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/profile' className={s.profile}>
                    PROFILE
                </AppLink>
            </div>
        </div>
    );
};