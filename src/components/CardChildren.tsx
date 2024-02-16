import AvatarFille from "../assets/avatarFille.png";
import { Link } from 'react-router-dom';
import AvatarGarcon from "../assets/avatarGarcon.png";
import { IChild } from "./Children";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Props {
    child: IChild;
}



const CardChildren = ({ child }: Props) => {

    // function to format the birthday date
    const formatBirthday = (birthday: string): string => {
        const date = new Date(birthday); // here we convert the string to a date
        return format(date, 'dd MMMM', { locale: fr });  // here we format the date to the format we want to display
    };
    return (

        <div className="flex items-center justify-center">
            <div className="max-w-xs">
                <div className="bg-[#FFB54A] shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        {child.gender === "fille" ? <img className="w-32 h-32 rounded-full mx-auto" src={AvatarFille} /> : <img className="w-32 h-32 rounded-full mx-auto" src={AvatarGarcon} />}
                        {/* here we check if the child is a boy or a girl, and display the correct */}
                    </div>
                    <div className="p-2 ">
                        <h3 className="text-center text-xl text-white font-medium leading-8">{child.firstname}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">

                        </div>
                        <table className="text-xs my-3">
                            <tbody><tr>
                                <td className="px-2 py-2 text-white font-semibold">Anniversaire :</td>
                                <td className="px-2 py-2 text-white">{formatBirthday(child.birthday)}</td>
                            </tr>
                                <tr>
                                    <td className="px-2 py-2 text-white font-semibold">Régime alimentaire :</td>
                                    <td className="px-2 py-2 text-white">{child.diet}</td>
                                </tr>
                            </tbody></table>

                        <div className="text-center my-3">
                            <Link to="/absence" className="text-xs  btn text-black font-medium"> Notifier une absence</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    )
}

export default CardChildren