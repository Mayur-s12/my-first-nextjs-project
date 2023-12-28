import styles from "@/home/styles.module.scss"
import NavBar from "./components/navbar"

const HomeContainer=()=>{
    return(
        <div className={styles.bgContainer}>
            <NavBar/>
            <div className={styles.headCont}>
                <h1>Home Page</h1>
            </div>
        </div>
    )
}


export default HomeContainer