import styles from '../css/Contact.module.css'

const ContactForm = () => {

    const handleSubmit = (e:any) => {
        e.preventDefault()
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
            <label  htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" required placeholder='Enter your name'/>
        </div>
        <div className={styles.formGroup}>
            <label  htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required placeholder='Enter your email'/>
        </div>
        <div className={styles.formGroup}>
            <label  htmlFor="email">Message: </label>
            <textarea name="textarea" id="textarea" cols={30} rows={5} placeholder='Enter your message'></textarea>
        </div>
        <button type='submit'>SEND</button>
    </form>
  )
}

export default ContactForm