import { ArrayHelpers, Field } from "formik";
import * as React from "react";
import { useCallback, useRef } from "react";
import { useDragDrop, DropZone } from "./UseDragDrop";

interface NameAndModifierFieldProps {
  arrayHelpers: ArrayHelpers;
  modifierType: string;
  index: number;
}

export function NameAndModifierField(props: NameAndModifierFieldProps) {
  let nameInput = useRef<HTMLInputElement>();
  useCallback(
    () => {
      if (nameInput.current.value == "") {
        nameInput.current.focus();
      }
    },
    [nameInput]
  );

  const [drag, drop, dropProps, preview] = useDragDrop(
    props.modifierType,
    props.index,
    props.arrayHelpers.move
  );
  return (
    <React.Fragment>
      <DropZone drop={drop} dropProps={dropProps} />
      <div className="inline" ref={preview}>
        <div className="grab-handle fas fa-grip-horizontal" ref={drag} />
        <Field
          type="text"
          className="name"
          name={`${props.modifierType}[${props.index}].Name`}
          innerRef={f => (nameInput = f)}
        />
        <Field
          type="number"
          className="modifier"
          name={`${props.modifierType}[${props.index}].Modifier`}
        />
        <span
          className="fa-clickable fa-trash"
          onClick={() => props.arrayHelpers.remove(props.index)}
        />
      </div>
    </React.Fragment>
  );
}
