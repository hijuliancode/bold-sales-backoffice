import styles from './HelloWorld.module.scss'

export default function HelloWorld() {
  return (
    <div className={styles.hello}>
      Hello World, I am being styled using SCSS Modules!
    </div>
  )
}