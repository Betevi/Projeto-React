import styles from './header.module.css'

function Header() {
return (
    <header className={styles.header}>
    <span> Biblioteca Bem Te Vi </span>

        <nav>
        <Link to="/Home">Home</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to ="/Projetos">Projetos</Link>
        <Link to="/Contatos">Contatos</Link>
        <Link to="/"></Link>
        </nav>
        </header>
    )
}
export default Header