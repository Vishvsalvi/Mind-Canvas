import Embed from "@editorjs/embed"
import Image from "@editorjs/image"
import List from "@editorjs/list"
import Quote from "@editorjs/quote"
import Raw from "@editorjs/raw"
import SimpleImage from "@editorjs/simple-image"
import Link from "@editorjs/link"

interface UploadResult {
    success: number;
    file: { url: any };
}

const uploadImageByURL = async (e: any): Promise<UploadResult> => {
    try {
        const url = await Promise.resolve(e);
        return {
            success: 1,
            file: { url }
        };
    } catch (err) {
        throw err;
    }
};

const uploadByFile = () => {
    
}
type Tools = {
    embed: typeof Embed,
    image: typeof Image,
    list: typeof List,
    quote: typeof Quote,
    raw: typeof Raw,
    simpleImage: typeof SimpleImage,
    link: typeof Link
}

const tools: Tools = {
    embed: Embed,
    image: {
        class: Image,
        config: {
            uploader: {
                uploadByUrl: uploadImageByURL,
                uploadByFile: uploadByFile
            }
        }
    },
    list: List,
    quote: Quote,
    raw: Raw,
    simpleImage: SimpleImage,
    link: Link
}

export default tools;