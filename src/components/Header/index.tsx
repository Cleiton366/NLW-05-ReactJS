import styles from './styles.module.scss';
import format from 'date-fns/format';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d, MMMM');

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt=""/>
            <p>O melhor para voce ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    );
}