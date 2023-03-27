import React, { useState } from 'react';
import MoanacoEditor, { OnChange } from '@monaco-editor/react';

export default function CodeEditor({
  theme = 'vs-dark',
  language = 'cpp',
  code = '',
  setCode = () => {},
}: {
  theme: string;
  language: string;
  code: string;
  setCode: (newCode: string | undefined) => void;
}) {
  const [value, setValue] = useState(code);
  const onChange: OnChange = (newValue) => {
    if (!newValue) return;
    setValue(newValue);
    setCode(newValue);
  };
  return (
    <MoanacoEditor
      height="100vh"
      width="100%"
      language={language}
      theme={theme}
      value={value}
      onChange={onChange}
    />
  );
}
