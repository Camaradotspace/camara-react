module.exports = (componentName) => ({
  content: ` 
  import * as React from 'react';
  import styled, { css } from 'styled-components';


    export interface ${componentName}Props {
      /**
      * Foo is for foo
      */
      foo: any;
    };

    export const Styled${componentName} = styled.div<${componentName}Props>;
    
    export const ${componentName} = ({foo}: ${componentName}Props) => {
        return (
            <div>
              <p>Hello ${componentName}</p>
            </div>
        )
    }

    ${componentName}.defaultProps = {}

    ${componentName}.displayName = "${componentName}Component"
    `,

  extension: `.tsx`,
});
