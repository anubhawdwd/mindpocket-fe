import type React from "react";
import { DeleteIcon } from "../assets/DeleteIcon";
import { ShareIcon } from "../assets/shareIcon";
import { Twitter } from "../assets/TwitterIcon";
import { YouTubeEmbed } from "react-social-media-embed";
import { XEmbed } from 'react-social-media-embed';
import type { JSX } from "react";

type notesType = "twitterX" | "youtube" | "notes";

interface CardProps {
    noteType: notesType,
    heading: string,
    userUrl: string,
    userNotes?: string
}

const Card: React.FC<CardProps> = ({
    noteType,
    heading,
    userUrl,
    userNotes
}) => {

    const notesTypeRecord: Record<notesType, JSX.Element> = {
        youtube: <YouTubeEmbed className="w-[250px] h-[250px] rounded-lg overflow-hidden" url={userUrl} />,
        twitterX: <XEmbed className="w-full h-full" url={userUrl} />,
        notes: <div>{userNotes}</div>
    }
    return (
        <div className="max-w-72 max-h-96 bg-slate-100 rounded-xl shadow-md overflow-hidden m-4 border border-gray-300">
            {/* Header Section */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-200 border-b border-gray-300">
                <Twitter />
                <h2 className="text-lg font-semibold text-gray-800">{heading}</h2>
                <div className="flex gap-3">
                    <ShareIcon />
                    <DeleteIcon />
                </div>
            </div>

            {/* Content Section */}
            {userNotes?
            <div className="p-4 bg-white">
                <div className="flex justify-center w-[250px] h-[250px]">{notesTypeRecord[noteType]}</div>
            </div>
            : ""}
            {/* footer */}
            <div className="flex justify-center items-center p-4">
                {userNotes}
            </div>
        </div>
    );
};

export default Card;