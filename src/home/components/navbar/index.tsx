"use client"
import styles from "@/home/styles.module.scss"
import { useRouter } from "next/navigation"

const NavBar=()=>{
    const router=useRouter()
    
    const handleHomeRoute=()=>{
        router.push('/')
    }

    const handleAboutRoute=()=>{
        router.push('/about')
    }

    const handleCartRoute=()=>{
        router.push('/cart')
    }

    return(
        <nav className={styles.navBar}>
                <div>
                    <a className={styles.ancHome} onClick={handleHomeRoute}>Home</a>
                </div>
                <div className={styles.ancOther}>
                    <a onClick={handleAboutRoute}>About</a>
                    <a onClick={handleCartRoute}>Cart</a>
                </div>
            </nav>
    )
}

export default NavBar