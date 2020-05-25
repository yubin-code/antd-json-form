import React, { useEffect } from 'react'
import Editor, { EditorState } from 'braft-editor';
import 'braft-editor/dist/index.css';
import _ from 'lodash';


interface EditorProps extends EditorState {

}

export default (props: EditorProps) => {

  useEffect(() => {
    if(!_.isUndefined(props.value)){
      if(_.isFunction(props.onChange)){
        props.onChange(Editor.createEditorState(props.value || ''))
      }
    }
  })
  
  return <Editor
    {...props}
    />

}
