import {atom} from 'recoil'

export const postState = atom({
    key: "postState",
    default: {
        title: '',
        editorContent: '',
        coverImg: ''
    }
})