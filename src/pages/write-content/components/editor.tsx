import './style.css';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import theme from './theme';
import ToolbarPlugin from './plugins/toolbar-plugin';

function Placeholder() {
    return <div className="editor-placeholder">Write your content...</div>;
}

// function MyOnChangePlugin({ onChange }: { onChange: (editorState: any) => void }) {
//     const [editor] = useLexicalComposerContext();
//     useEffect(() => {
//         return editor.registerUpdateListener(({ editorState }: { editorState: any }) => {
//             onChange(editorState);
//         });
//     }, [editor, onChange]);
//     return null;
// }

const editorConfig = {
    namespace: 'React.js Demo',
    nodes: [],
    // Handling of errors during update
    onError(error: Error) {
        throw error;
    },
    // The editor theme
    theme: theme,
};
export function Editor() {
    

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <ToolbarPlugin />
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                </div>
            </div>
        </LexicalComposer>
    )
}