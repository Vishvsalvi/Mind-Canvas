"use client"

import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "../tools";
import { CldUploadButton, CldImage } from "next-cloudinary";

export default function Page() {

    const [editorContent, setEditorContent] = useState({ blocks: [] });
    const [coverImageId, setCoverImageId] = useState(() => {
        // Get the saved cover image ID from local storage, if it exists
        return localStorage.getItem('coverImageId') || "um7lbwkgmfx98ny227d4";
    });

    useEffect(() => {
        const editor = new EditorJS({
            holderId: 'mainEditor',
            data: editorContent,
            tools: tools,
            placeholder: "Write your article here...",
            onChange: async () => {
                const content = await editor.save();
                setEditorContent(content);
            }
        });

        // Cleanup function to destroy the editor instance
        return () => {
            editor.destroy();
        };
    }, []);

    const handleUploadSuccess = (result) => {
        if (result.event === "success") {
            const newCoverImageId = result.info.public_id;
            setCoverImageId(newCoverImageId);
            localStorage.setItem('coverImageId', newCoverImageId);
        }
    };

    const handleClick = () => {
        console.log(editorContent);
    };

    return (
        <section className="p-4">
            {/* The navbar starts here */}
            <div className="flex justify-between w-full fixed top-0 left-0 right-0 bg-white p-4 z-50">
                <Sidebar />

                <div className="flex space-x-2">
                    <CldUploadButton 
                        className="text-sm font-medium border px-3 rounded-md hover:bg-gray-50"
                        options={{ maxFiles: 1 }}
                        uploadPreset="ai7umnnt"
                        onUpload={handleUploadSuccess}
                    >
                        Upload Cover
                    </CldUploadButton>

                    <Button variant="outline">Save as draft</Button>
                    <Button onClick={handleClick}>Publish</Button>
                </div>
            </div>
            {/* The navbar ends here */}

            <div className="mt-24 relative"> {/* Add margin to avoid overlap with fixed navbar */}
                <div className="w-[80%] mx-auto">
                    <CldImage
                        className="mx-auto"
                        src={coverImageId}
                        alt="Default cover"
                        width={1000}
                        height={600}
                        crop="scale" 
                    />
                </div>

                <div className="mt-8 mx-auto w-[68%] ">
                    <textarea
                        className="w-full text-2xl sm:text-3xl md:text-4xl outline-none resize-none font-bold"
                        placeholder="Article Title"
                        name=""
                        id=""
                    ></textarea>
                </div>
                <div id="mainEditor" className="xl:mx-[-1.7rem] md:mx-12 mx-auto w-[80%] sm:text-lg text-md md:text-xl">
                </div>
            </div>
        </section>
    );
}


