import "./Footer.css"

const Footers = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.Facebook.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.twitter.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado  x Grupo 3</strong>
    </footer>
}

export default Footers