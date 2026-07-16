
function FooterSection() {
    return (
        <footer className="max-w-360 container mx-auto px-6 sm:px-10 py-10 flex flex-col gap-10">
            <div className="flex flex-col gap-10 sm:flex-row items-center justify-between pb-10">
                <a href="#" className="text-3xl font-medium">CryptoPunks</a>

                <ul className="flex flex-col sm:flex-row items-center gap-6  sm:gap-8 text-zinc-300 text-lg font-medium">
                    <li><a href="#">Buy a Punk</a></li>
                    <li><a href="#">View Full Collection</a></li>
                </ul>

                <div className="flex items-center gap-6 text-xl">
                    <a href=""><i className='fa-brands fa-twitter text-white'></i></a>
                    <a href=""><i className='fa-brands fa-discord text-white'></i></a>
                </div>
            </div>
            <hr className="text-zinc-700" />
            <div className="flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-10 mx-auto text-zinc-400">
                <p>© 2021 CryptoPunks. All right reserved.</p>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies Settings</a>
            </div>
        </footer>
    )
}

export default FooterSection