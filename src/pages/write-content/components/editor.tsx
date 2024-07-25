import "ckeditor5/ckeditor5.css";
import {
    ClassicEditor,
    Context,
    Bold,
    Essentials,
    Italic,
    Paragraph,
    ContextWatchdog,
    Indent,
    IndentBlock,
    BlockQuote,
    Heading,
    ImageUpload,
    Undo,
    AutoLink,
    FontFamily,
    FontSize,
    FontColor,
    FontBackgroundColor,
    Strikethrough,
    Subscript,
    Superscript,
    Code,
    Link,
    CodeBlock,
    TodoList,
    Image,
    ImageInsertUI,
    Table,
    TableColumnResize,
    TableCaptionEditing,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    TableColumnResizeEditing,
    Alignment,
    Base64UploadAdapter,
    ImageResize,
    ImageEditing,
    ImageResizeEditing,
    ImageResizeButtons,
    ImageToolbar,
    ImageBlock,
    ImageInline,
    ImageResizeHandles,
    ImageBlockEditing,
    ImageCaption,
    ImageCaptionEditing,
    ImageStyle,
} from "ckeditor5";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import { useRef } from "react";
import "./style.css";

interface EditorConfigurationProps {
    setContent?: any;
    content?: any;
}

export const EditorConfig: React.FC<EditorConfigurationProps> = ({
    setContent,
    content,
}) => {
    const timeRef = useRef<any>(null);

    const configurationEditor = {
        placeholder: "Write your content...",
        height: "500px",
        plugins: [
            Undo,
            Essentials,
            Bold,
            Italic,
            Paragraph,
            Indent,
            Image,
            IndentBlock,
            BlockQuote,
            Heading,
            AutoLink,
            FontFamily,
            FontSize,
            FontColor,
            ImageUpload,
            FontBackgroundColor,
            Strikethrough,
            Subscript,
            Superscript,
            Code,
            Link,
            CodeBlock,
            TodoList,
            ImageInsertUI,
            Table,
            TableColumnResize,
            TableCaptionEditing,
            TableToolbar,
            TableProperties,
            TableCellProperties,
            TableColumnResizeEditing,
            Alignment,
            Base64UploadAdapter,
            ImageResize,
            ImageEditing,
            ImageResizeEditing,
            ImageResizeButtons,
            ImageToolbar,
            ImageBlock,
            ImageBlockEditing,
            ImageInline,
            ImageResizeHandles,
            ImageCaption,
            ImageCaptionEditing,
            ImageStyle,
        ],
        toolbar: {
            items: [
                "undo",
                "redo",
                "|",
                "heading",
                "|",
                "fontfamily",
                "fontsize",
                "fontColor",
                "fontBackgroundColor",
                "|",
                "bold",
                "italic",
                "strikethrough",
                "alignment:left",
                "alignment:center",
                "alignment:right",
                "|",
                "subscript",
                "superscript",
                "code",
                "|",
                "link",
                "insertImage",
                "alignBlockLeft",
                "alignBlockRight",
                "alignCenter",
                "resizeImage",
                "insertTable",
                "blockQuote",
                "codeBlock",
                "|",
                "todoList",
                "outdent",
                "indent",
                "|",
            ],
            shouldNotGroupWhenFull: true,
        },
        image: {
            options: [
                "inline",
                "alignLeft",
                "alignRight",
                "alignCenter",
                "alignBlockLeft",
                "alignBlockRight",
                "block",
                "side",
            ],
            toolbar: [
                "imageStyle:inline",
                "imageStyle:block",
                "imageStyle:side",
                "|",
                "toggleImageCaption",
                "imageTextAlternative",
            ],
        },
        resizeOptions: [
            {
                name: "resizeImage:original",
                value: null,
                icon: "original",
            },
            {
                name: "resizeImage:custom",
                value: "custom",
                icon: "custom",
            },
            {
                name: "resizeImage:50",
                value: "50",
                icon: "medium",
            },
            {
                name: "resizeImage:75",
                value: "75",
                icon: "large",
            },
        ],
        table: {
            contentToolbar: [
                "tableColumn",
                "tableRow",
                "mergeTableCells",
                "tableProperties",
                "TableCellProperties",
            ],
        },
        fontSize: {
            options: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32],
        },
    };

    const handleChange = (value: string) => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
            setContent(value);
        }, 2000);
    };

    return (
        <>
            <CKEditorContext
                context={Context}
                contextWatchdog={ContextWatchdog}
            >
                <CKEditor
                    editor={ClassicEditor}
                    config={configurationEditor}
                    data={content}
                    onChange={(_, value) => {
                        const data = value.getData();
                        handleChange(data);
                    }}
                    ref={timeRef}
                />
            </CKEditorContext>
        </>
    );
};
