 import NavBar from "../components/navbar"
 import styles from "@/home/styles.module.scss"
 

 const AboutContainer=()=>{
    return(
        <div className={styles.bgContainer}>
        <NavBar/>        
        <div className={styles.headCont}>
            <h1>About Section</h1>
        </div>
        </div>
    )
 }

 export default AboutContainer