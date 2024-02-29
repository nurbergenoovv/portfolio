import styles from './HeaderCard.module.css'
function HeaderCard() {
	return (
		<div className={styles.HeaderCard}>
			<div className='left'>
				<div className={styles.photo}>
					<img
						src='/photo.png'
						alt='profile-photo'
						className={styles.profilePhoto}
					/>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.nickname}>
				<span>nurbergenovv</span>
				<img src='/Circle_Check.svg'/>
				</div>
				<p className={styles.desctiption}>
					Hello World, Я Нурберген Ибрахим, full-stack разработчик
				</p>
				<div className={styles.socialBtns}>
					<a className={styles.socialItem} href='https://t.me/nurbergenoovv'>
						<img src='/Telegram.svg' alt='' className={styles.socialIcon} />
						<span className={styles.socialName}>TELEGRAM</span>
					</a>
					<a className={styles.socialItem} href='https://github.com/nurbergenoovv'>
						<img src='/Github.svg' alt='' className={styles.socialIcon} />
						<span className={styles.socialName}>GITHUB</span>
					</a>
					<a className={styles.socialItem} href='https://www.instagram.com/nurbergenovv__/'>
						<img src='/Instagram.svg' alt='' className={styles.socialIcon} />
						<span className={styles.socialName}>INSTAGRAM</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default HeaderCard
