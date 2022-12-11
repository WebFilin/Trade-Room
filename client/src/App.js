import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import SidebarTradeRoom from "./components/SidebarTradeRoom/SidebarTradeRoom";
function App() {
  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <Header />
      </header>

      <section className={styles.trade_room__sidebar}>
        <SidebarTradeRoom />
      </section>
    </main>
  );
}

export default App;
