import YoutubeIcon from "../../../images/social-icon_youtube.svg?react";
import TgIcon from "../../../images/social-icon_telegram.svg?react";
import VkIcon from "../../../images/social-icon_vk.svg?react";

const socials = [
    { url: "https://www.youtube.com/@itfmebel2246", icon: YoutubeIcon },
    { url: "https://t.me/AntonObuhov_Group", icon: TgIcon },
    { url: "https://vk.com/umnye_kuhni", icon: VkIcon },
];

export const SocialItem = ({ url, icon: Icon }) => {
    return (
        <a
            href={url}
            className="w-9 h-9 flex items-center justify-center bg-white rounded-xl transition text-app-gray hover:text-purple-400"
            target="_blank"
        >
            <Icon height="32" />
        </a>
    );
};

const Socials = () => {
    return (
        <div className="flex gap-3 items-center justify-between w-max">
            {socials.length > 0 &&
                socials.map(
                    (
                        social,
                        idx // когда массив проходит через итератор map, и возвращает новый элемент, он обязательно должен получить key
                    ) => (
                        <SocialItem
                            key={idx}
                            icon={social?.icon}
                            url={social?.url}
                        />
                    )
                )}
        </div>
    );
};

export default Socials;
