"use client";

import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "../tools";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { deleteImage } from "../actions/user";

export default function Page() {
    const [editorContent, setEditorContent] = useState({ blocks: [] });
    const [coverImageId, setCoverImageId] = useState(() => {
        return localStorage.getItem('coverImageId') || "";
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

        return () => {
            editor.destroy();
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('coverImageId', coverImageId);
    }, [coverImageId]);

    const handleUploadSuccess = (result) => {
        if (result.event === "success") {
            const newCoverImageId = result.info.public_id;
            setCoverImageId(newCoverImageId);
        }
    };

    
    const handleRemoveImage = async () => {
        try {
            await deleteImage(coverImageId);
            setCoverImageId("");
        } catch (error) {
            console.error("Failed to delete image:", error);
        }
    };
    const handleClick = () => {
        console.log(editorContent);
    };

    return (
        <section className="p-4">
            <div className="flex justify-between w-full fixed top-0 left-0 right-0 bg-white p-4 z-50">
                <Sidebar />
                <div className="flex space-x-2">
                    <Button variant="outline">Save as draft</Button>
                    <Button onClick={handleClick}>Publish</Button>
                </div>
            </div>

            <div className="mt-24 relative">
                   
                <div className="w-[80%] mx-auto relative">
                    
                    {coverImageId && (
                        <div className="relative">
                            <CldImage
                                className="mx-auto"
                                src={`https://res.cloudinary.com/vishvsalvi/image/upload/v1719501252/${coverImageId}.png`}
                                alt="Cover"
                                width={1000}
                                height={600}
                                crop="scale" 
                            />
                            <Button
                                variant="secondary"
                                className="absolute bottom-6 right-32"
                                onClick={handleRemoveImage}
                            >
                                Remove the Image
                            </Button>
                        </div>
                    )}
                </div>

                <div className="mt-8 mx-auto w-[68%]">
                <CldUploadButton 
                        className={`text-sm font-medium border px-3 py-2 rounded-md hover:bg-gray-50 mb-5 ${coverImageId ? 'hidden' : ''}`}
                        options={{ maxFiles: 1 }}
                        uploadPreset="ai7umnnt"
                        onUpload={handleUploadSuccess}
                    >
                        Add Cover
                    </CldUploadButton>
                    <textarea
                        className="w-full text-2xl sm:text-3xl md:text-4xl outline-none resize-none font-bold"
                        placeholder="Article Title"
                        name=""
                        id=""
                    ></textarea>
                </div>
                <div id="mainEditor" className="xl:mx-[-2rem] md:mx-12 mx-auto w-[80%] sm:text-lg text-md md:text-xl">
                </div>
            </div>
        </section>
    );
}
