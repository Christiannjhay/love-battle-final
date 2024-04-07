import myImage from '../../assets/LoveBattle.png'

export default function Logo () {
    return (
        <div>
            <div className='w-fit h-fit'>
                <img src={myImage} alt="My Image" className='mt-10 h-18' />
            </div>
        </div>
    )
}