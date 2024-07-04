"use client"
import React, { useState } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import {
  useSaveCallback,
  useLoadData,
  options,
  useSetData,
  useClearDataCallback,
} from "@/components/Editor"

const Editor = dynamic<{
  editorRef: any
  children?: any
  data: any
  options: any
}>(
  () =>
    import("@/components/Editor/editor").then((mod) => mod.EditorContainer as any),
  { ssr: false }
)

export default function DemoWriter() {
  const [editor, setEditor] = useState(null)

  // save handler
  const onSave = useSaveCallback(editor)

  // load data
  const { data, loading } = useLoadData()

  // set saved data
  // useSetData(editor, data)

  // clear data callback
  const clearData = useClearDataCallback(editor)

  const disabled = editor === null || loading

  return (
    <div className="container">
      <Head>
        <title>EditorJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        </h1>
        <p className="description">
          Hit TAB on empty line <code>for toolbar</code>, select text for{" "}
          <code>more options</code>
        </p>
        <p>
          <a href="#" onClick={clearData}>
            Clear data
          </a>
        </p>
        <div className="editorContainer">
          <Editor editorRef={setEditor} options={options} data={data} />
        </div>
        <button type="button" onClick={onSave}>
          Save &amp; see console &amp; Reload
        </button>{" "}
      </main>

 
    </div>
  )
}
