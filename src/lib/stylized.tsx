import React from 'react';
import { Tag } from './types';
import { v4 as uuidv4 } from 'uuid';

function addStylesToDom(className: string, styles: string) {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    .${className} {
        ${styles}
    }
  `);
}

const stylized = (Tag: Tag) => (styles: string) => {
  return function StylizedComponent(props: any) {
    const uniqueClassName = uuidv4();
    addStylesToDom(uniqueClassName, styles);

    return <Tag className={uniqueClassName} {...props} />;
  };
};

// add curried functions for each tag
stylized.h1 = stylized('h1');
stylized.h2 = stylized('h2');
stylized.h3 = stylized('h3');
stylized.h4 = stylized('h4');
stylized.h5 = stylized('h5');

stylized.a = stylized('a');

stylized.div = stylized('div');
stylized.p = stylized('p');
stylized.article = stylized('article');

export default stylized;
