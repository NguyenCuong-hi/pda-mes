import { Editor } from "@toast-ui/react-editor"

const InputType = () =>
{
    <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue="hello"
          ref={this.editorRef}
        />
        <button onClick={this.handleClick}>make bold</button>
      </>
}

export default InputType