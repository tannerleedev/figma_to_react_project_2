import { useMediaQuery } from 'react-responsive';
import Logo from '../../assets/images/logo-white.png';

function HeaderSection() {

    const isDesktop = useMediaQuery({ minWidth: 800 });

    return (
        <header className="max-w-360 container mx-auto flex items-center justify-between px-5 py-4">
            <img src={Logo} alt="Website logo" />
            {isDesktop ?
                <nav className='text-zinc-400 font-medium text-lg'>
                    <ul className='flex items-center gap-8'>
                        <li className='hover:text-zinc-50'>About</li>
                        <li className='hover:text-zinc-50'>Collection</li>
                        <li className='hover:text-zinc-50'>FAQs</li>
                        <button className='rounded-full px-8 py-2 bg-main/30 text-secondary'>Connect wallet</button>
                        <div className='flex items-center gap-4'>
                            <a href=""><i className='fa-brands fa-twitter text-white'></i></a>
                            <a href=""><i className='fa-brands fa-discord text-white'></i></a>
                        </div>
                    </ul>
                </nav>
                :
                <i className="fa-regular fa-bars text-2xl ml-4 cursor-pointer"></i>
            }
        </header>
    )
}

export default HeaderSection