import React from 'react';

export interface DefaultInputComponentProps extends React.Props<any> {
  label?: string,
  error?: boolean,
}

/**
 * Default Formup input component.
 * @param param0 Options.
*/
const DefaultInputComponent = ({
  label,
  error,
  ...props
}: DefaultInputComponentProps) => (
  <>
    {
      label && (
        <p>
          {label}
        </p>
      )
    }

    <input {...props} />
  </>
);

export default DefaultInputComponent;
