
const Header = () => {
    return (
        <header className='bg-black w-full flex shadow-md'>
            <div className='container py-2 flex justify-between items-center'>
                <p className='text-3xl text-white font-medium font-sans'>React mini-shop(light version)</p>
                <div className="rounded-lg border-2 border-solid border-white p-2">
                    <a className="text-xl font-bold text-white font-sans" target="_blank" rel="noopener noreferrer" href="https://github.com/SecondNiceee/vertkaNum2">Repository</a>
                </div>
            </div>
        </header>
    );
};

export default Header;