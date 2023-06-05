import Head from "next/head"
import styles from '../styles/Layout.module.css'

export default function Layout({children}){
    return(
        <>
        <Head>
            <title>To-do-list: nextjs</title>
        </Head>
        <main className={styles.main_container}>
            {children}
        </main>
        </>
    )
}