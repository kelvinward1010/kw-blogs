// import { FileLoader } from '@ckeditor/ckeditor5-upload/src/filerepository';

// async function uploadAdapter(loader: FileLoader) {
//     try {
//         const file = await loader.file;

//         // Thực hiện logic tải lên ảnh từ dữ liệu binary (ví dụ: gửi lên server)
//         const binaryData = await convertFileToBinary(file as any);

//         // Trả về URL của ảnh (hoặc dữ liệu binary)
//         return {
//             default: binaryData,
//         };
//     } catch (error) {
//         console.error('Error uploading image:', error);
//         throw error;
//     }
// }

// async function convertFileToBinary(file: File): Promise<Uint8Array> {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => {
//             // Chuyển đổi dữ liệu từ ArrayBuffer sang Uint8Array
//             const arrayBuffer = reader.result as ArrayBuffer;
//             const uint8Array = new Uint8Array(arrayBuffer);
//             resolve(uint8Array);
//         };
//         reader.onerror = (error) => reject(error);
//         reader.readAsArrayBuffer(file);
//     });
// }

// function uploadPlugin(editor: any) {
//     editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
//         return uploadAdapter(loader);
//     };
// }

// export { uploadPlugin };

// Trong file uploadAdapter.ts
import { BASE_URL, URL_API_UPLOADFILE } from "@/constant/config";
import { Editor } from "@ckeditor/ckeditor5-core";
import {
    UploadAdapter,
    FileLoader,
} from "@ckeditor/ckeditor5-upload/src/filerepository";
import axios from "axios";

function uploadAdapter(loader: FileLoader): UploadAdapter {
    return {
        upload: () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const file = await loader.file;
                    const response = await axios.request({
                        method: "POST",
                        url: `${BASE_URL}/${URL_API_UPLOADFILE}`,
                        data: {
                            files: file,
                        },
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    resolve({
                        default: `${response.data.url}`,
                    });
                } catch (error) {
                    reject("Hello");
                }
            });
        },
        abort: () => {},
    };
}
export function uploadPlugin(editor: Editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return uploadAdapter(loader);
    };
}
