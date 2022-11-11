import 'tailwindcss/tailwind.css';
import { Parameters } from '@storybook/addons';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import type { DecoratorFn } from '@storybook/react';
import React from 'react';

// Start Mock Service Worker
initialize({ onUnhandledRequest: 'bypass' });

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  mswDecorator as DecoratorFn,
  (story) => {
    return <div className="p-2">{story()}</div>;
  },
];
