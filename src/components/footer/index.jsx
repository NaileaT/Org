import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
    <div className="redes">
        <a href="https://www.facebook.com/nailea.trujillo">
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href="https://twitter.com/nai222_t=tZg0T2n3GyisvOtwXUJ21Q&s=09">
            <img src="/img/twitter.png" alt="Twitter"/>
        </a>
        <a href="https://instagram.com/loveonnai?igshid=NTc4MTlwNjQ2YQ==">
            <img src="/img/instagram.png" alt="Intragram"/>
        </a>
    </div>
    <img src="/img/Logo.png" alt="org"/>
    <strong>Desarrollado por Nailea Trujillo</strong>
    </footer>
    
}

export default Footer