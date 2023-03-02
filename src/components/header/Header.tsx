import React, { useState } from 'react' 
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Title from '../title/Title'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
	const [showNav, setShowNav] = useState(false)

	const toggleNavItems = () => {
		setShowNav(!showNav)
	}

	return (
		<>
			<div>
				<nav className={styles.navbar}>
					<div className={styles.container}>
						<div className={styles.logo}>
							<NavLink to='/'>
								<Title />
							</NavLink>
						</div>
						<div className={styles.menuIcon} onClick={toggleNavItems}>
							<MenuIcon />
						</div>
						<div className={ showNav ? styles.navElements + ' ' + styles.active : styles.navElements}>
							<ul>
								<li>
									<NavLink to='/'>Hjem</NavLink>
								</li>
								<li>
									<NavLink to='/projects'>Prosjekter</NavLink>
								</li>
								<li>
									<NavLink to='/contact'>Kontakt</NavLink>
								</li>
								<li>
									<NavLink to='/about'>Om oss</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			{/* <div className={styles['main-container']}>
            <nav className={styles['navbar']}>
                <div className={styles['nav-container']}>
                    <NavLink to='/' className={styles['logo-container']}>
                        <img src='../../assets/react.svg' className='' alt='logo' />
                    </NavLink>
                    <Title />
                </div>
                <ul className={click ? styles['nav-menu active'] : styles['nav-menu']}>
                    <li className={styles['nav-item']}>
                    <NavLink to='/about' className={styles['option']}>
                        Om oss
                    </NavLink>
                    </li>
                    <li className={styles['nav-item']}>
                    <NavLink to='/contact' className={styles['option']}>
                        Kontakt
                    </NavLink>
                    </li>
                </ul>
                <div className={styles['options']}>
                    
                </div>
                <ul>
                    <li className='nav-item'></li>
                    <li className='nav-item'></li>
                </ul>
            </nav>
        </div> */}
		</>
	)
}

export default Header