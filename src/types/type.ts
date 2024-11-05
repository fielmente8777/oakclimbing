import { StaticImageData } from "next/image";
export interface roomCardType {
    roomData: {
        id: number;
        name: string;
        description: string;
        image: string | StaticImageData;
        linkName: string;
        linkUrl: string;
    }
}


export interface amenitiesProps {
    icon: React.ReactNode;
    title: string;
}