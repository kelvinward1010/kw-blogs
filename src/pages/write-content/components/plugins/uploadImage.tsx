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
import { uploadFile } from "@/services/file/uploadImage";
import { FileLoader } from "@ckeditor/ckeditor5-upload/src/filerepository";

class MyUploadAdapter {
    constructor(private loader: FileLoader) {}

    upload() {
        const formData = new FormData();
        return this.loader.file.then(
            (file: any) =>
                new Promise((resolve, reject) => {
                    formData.append("upload", file, file.name);

                    return uploadFile(file)
                        .then((res) => res.json())
                        .then((d) => {
                            if (d.url) {
                                resolve({
                                    default: d.url,
                                });
                            } else {
                                reject(`Couldn't upload file: ${file.name}.`);
                            }
                        });
                }),
        );
    }
}

export default function ThisCustomUploadAdapterPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
        loader: any,
    ) => {
        return new MyUploadAdapter(loader);
    };
}
