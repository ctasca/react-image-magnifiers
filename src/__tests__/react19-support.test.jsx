import React from 'react';
import { renderToString } from 'react-dom/server';
import Magnifier from '../Magnifier';

// Smoke test: the component should render to string without crashing under a modern React environment.
// This is a proxy for React 19+ compatibility; the package declares peer range including ^19.

describe('React 19+ compatibility', () => {
  it('renders Magnifier to string without throwing', () => {
    const html = renderToString(
      <div style={{ width: 200 }}>
        <Magnifier imageSrc="data:image/gif;base64,R0lGODlhAQABAAAAACw=" imageAlt="test" />
      </div>
    );
    expect(typeof html).toBe('string');
    expect(html).toContain('img');
  });
});
