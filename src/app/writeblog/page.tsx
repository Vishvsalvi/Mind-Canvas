"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

import { CldUploadButton, CldImage } from "next-cloudinary";
import { deleteImage, testServerSession } from "../actions/user";
import TipTapEditor from "@/components/TipTapEditor";
import { useRecoilState } from "recoil";
import { postState } from "@/app/store/atoms/editor";

export default function Page() {

    const [postContent, setPostContent] = useRecoilState(postState);

    const handleUploadSuccess = (result: any) => {
        if (result.event === "success") {
            const newCoverImageId = result.info.public_id;
            setPostContent((prevState:any) => {
                return {
                    ...prevState,
                    coverImg: newCoverImageId
                }
            })
        }
    };

    const handleRemoveImage = async () => {
        try {
            await deleteImage(postContent.coverImg);
            setPostContent((prevState:any) => {
                return {
                    ...prevState,
                    coverImg: "",
                }
            })
        } catch (error) {
            console.error("Failed to delete image:", error);
        }
    };

    const publishPost = async () => {
        console.log(postContent)
        testServerSession();
    }


    return (
        <section className="p-4">
            <div className="flex justify-between w-full fixed top-0 left-0 right-0 bg-white p-4 z-50">
                <Sidebar />
                <div className="flex space-x-2">
                    <Button variant="outline">Save as draft</Button>
                    <Button onClick={publishPost}>
                       
                        Publish</Button>
                </div>
            </div>

            <div className="mt-24 grid grid-cols-1">
                <div className="relative">
                    {postContent.coverImg && (
                        <>
                            <CldImage
                                className="mx-auto"
                                src={`https://res.cloudinary.com/vishvsalvi/image/upload/v1719501252/${postContent.coverImg}.png`}
                                alt="Cover"
                                width={1000}
                                height={600}
                                crop="scale"
                            />
                            <Button
                                variant="secondary"
                                className="absolute bottom-5 right-5 md:right-72"
                                onClick={handleRemoveImage}
                            >
                                Remove the Image
                            </Button>
                        </>
                    )}
                </div>
                <div className="lg:mx-[15.2rem] mt-6">

                    <CldUploadButton
                        className={`text-sm font-medium border px-3 py-2 rounded-md hover:bg-gray-50 mb-5 ${postContent.coverImg ? 'hidden' : ''}`}
                        options={{ maxFiles: 1 }}
                        uploadPreset="ai7umnnt"
                        onUpload={handleUploadSuccess}
                    >
                        Add Cover
                    </CldUploadButton>

                    <textarea
                        className="w-full text-2xl sm:text-3xl md:text-4xl outline-none resize-none font-bold overflow-y-hidden"
                        placeholder="Article Title"
                        value={postContent.title}
                        onChange={(e) => {
                            setPostContent((prevState:any) => {
                                return {
                                    ...prevState,
                                    title: e.target.value
                                }
                            })
                        }
                        }
                        name=""
                        id=""
                    ></textarea>
                    <TipTapEditor />
                </div>
            </div>
        </section>
    );
}
