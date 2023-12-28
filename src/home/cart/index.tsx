
 import NavBar from "../components/navbar"
 import styles from "@/home/styles.module.scss"
 

 const CartContainer=()=>{
    return(
        <div className={styles.bgContainer}>
        <NavBar/>        
        <div className={styles.headCont}>
            <h1>Cart Section</h1>
        </div>
        </div>
    )
 }

 export default CartContainer