import './style.css';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import theme from './theme';
import ToolbarPlugin from './plugins/toolbar-plugin';
import { $generateHtmlFromNodes } from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin';

const testContent: any = '{"root":{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"ff","type":"text","version":1}],"direction":"ltr","format":"left","indent":0,"type":"paragraph","version":1,"textFormat":1},{"children":[],"direction":null,"format":"left","indent":0,"type":"paragraph","version":1,"textFormat":0},{"children":[],"direction":null,"format":"left","indent":0,"type":"paragraph","version":1,"textFormat":0},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"osdfghj","type":"text","version":1}],"direction":"ltr","format":"center","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}';
// const htmlString: any = '<p class="editor-paragraph" dir="ltr" style="text-align: left;"><b><strong class="editor-text-bold" style="white-space: pre-wrap;">ff</strong></b></p><p class="editor-paragraph" style="text-align: left;"><br></p><p class="editor-paragraph" style="text-align: left;"><br></p><p class="editor-paragraph" dir="ltr" style="text-align: center;"><span style="white-space: pre-wrap;">osdfghj</span></p>'

function onChangeMain(editorState: any, editor: any) {
    editorState.read(() => {
        const html = $generateHtmlFromNodes(editor);
        console.log(html);
    });

    // const jsonState = JSON.stringify(editor.getEditorState());
    // console.log(jsonState)
}


function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        editor.focus();
    }, [editor]);

    return null;
}

export function Editor() {

    const editorConfig = {
        namespace: 'React.js Demo',
        nodes: [],
        onError(error: Error) {
            throw error;
        },
        theme: theme,
        editorState: testContent
    };

    

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <ToolbarPlugin />
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={<div className="editor-placeholder">Write your content...</div>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <OnChangePlugin onChange={onChangeMain} />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                    <MyCustomAutoFocusPlugin />
                    <ListMaxIndentLevelPlugin maxDepth={7} />
                </div>
            </div>
        </LexicalComposer>
    )
}