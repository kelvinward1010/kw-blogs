import { EditorConfig } from '../components/editor';
import styles from './write-content.module.scss';

export function WriteContent() {

    return (
        <div className={styles.container}>
            <EditorConfig />
        </div>
    )
}